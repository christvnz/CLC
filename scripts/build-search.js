const richTextPlainTextRenderer = require('@contentful/rich-text-plain-text-renderer');
const algoliasearch = require('algoliasearch/lite');

const dotenv = require('dotenv');

async function callContentful(query, variables) {
  try {
    const data = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
      },
    ).then(response => response.json());
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function getPaginatedPosts(page) {
  const queryLimit = 9;
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

  const variables = { limit: queryLimit, skip };

  const query = `query GetPaginatedPosts($limit: Int!, $skip: Int!) {
      pageBlogPostCollection(limit: $limit, skip: $skip,) {
        total
        items {
            __typename
            sys {
              id
              spaceId
            }
            internalName
            slug
            readingTime
            publishedDate
            title
            shortDescription
            content {
              json 
            }
          }
      }
    }`;

  const response = await callContentful(query, variables);

  const { total } = response.data.pageBlogPostCollection;
  const posts = response.data.pageBlogPostCollection.items || [];

  return { posts, total };
}

async function getAllPosts() {
  let page = 1;
  let shouldQueryMorePosts = true;
  const returnPosts = [];

  while (shouldQueryMorePosts) {
    const response = await getPaginatedPosts(page);

    if (response.posts.length > 0) {
      returnPosts.push(...response.posts);
    }

    shouldQueryMorePosts = returnPosts.length < response.total;
    page++;
  }

  return returnPosts;
}

function transformPostsToSearchObjects(posts) {
  const transformed = posts.map(post => {
    return {
      objectID: post.sys.id,
      ...post,
    };
  });

  return transformed;
}

(async function () {
  dotenv.config();

  try {
    const posts = await getAllPosts();
    const transformedPosts = transformPostsToSearchObjects(posts);

    if (posts.length > 0) {
      const client = algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_ADMIN_KEY,
      );

      const index = client.initIndex('lincolnstable');
      const algoliaResponse = await index.saveObjects(transformedPosts);

      console.log(
        `🎉 Sucessfully added ${
          algoliaResponse.objectIDs.length
        } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join('\n')}`,
      );
    }
  } catch (error) {
    console.log(error);
  }
})();
