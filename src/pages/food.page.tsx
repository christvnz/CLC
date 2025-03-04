import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { groupArticlesByCuisineType } from './utils/groupArticles';
import Link from 'next/link';

import { getServerSideTranslations } from './utils/get-serverside-translations';

import { ArticleHero, ArticleTileGrid } from '@src/components/features/article';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { PageBlogPostOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const page = useContentfulLiveUpdates(props.page);
  const posts = useContentfulLiveUpdates(props.posts);

  const foodPosts = posts.filter(post => {
    return post.blogPostType === 'food';
  });

  if (!page?.featuredBlogPost || !posts) return null;
  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}

      <Container className="navMargin flex flex-col items-center">
        <h1>Food</h1>
        <p>{posts.length} results</p>
      </Container>
      <Container className="my-8 md:mb-10 lg:mb-16">
        <ArticleTileGrid
          className="md:grid-cols-2 lg:grid-cols-3"
          articles={foodPosts}
        />
      </Container>
      {/* {cuisineTypes.map(cuisineType => (
        <Container key={cuisineType} className="my-8 md:mb-10 lg:mb-16">
          <h2 className="mb-4 md:mb-6">{cuisineType}</h2>
          <ArticleTileGrid
            className="md:grid-cols-2 lg:grid-cols-3"
            articles={categorizedPosts[cuisineType]}
          />
        </Container>
      ))}

      <Container className="my-8 md:mb-10 lg:mb-16">
        <h2 className="mb-4 md:mb-6">Others</h2>
        <ArticleTileGrid
          className="md:grid-cols-2 lg:grid-cols-3"
          articles={categorizedPosts['Others']}
        />
      </Container> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, draftMode: preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    const blogPostsData = await gqlClient.pageBlogPostCollection({
      locale,
      order: PageBlogPostOrder.PublishedDateDesc,
      where: {
        slug_not: page?.featuredBlogPost?.slug,
      },
      preview,
    });
    const posts = blogPostsData.pageBlogPostCollection?.items;

    if (!page) {
      return {
        revalidate: revalidateDuration,
        notFound: true,
      };
    }

    return {
      revalidate: revalidateDuration,
      props: {
        previewActive: !!preview,
        ...(await getServerSideTranslations(locale)),
        page,
        posts,
      },
    };
  } catch {
    return {
      revalidate: revalidateDuration,
      notFound: true,
    };
  }
};

export default Page;
