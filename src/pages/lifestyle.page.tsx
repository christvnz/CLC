import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

import { getServerSideTranslations } from './utils/get-serverside-translations';

import { ArticleTileGrid } from '@src/components/features/article';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { PageBlogPostOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';
import NoData from '@src/components/features/noData'

const Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const page = useContentfulLiveUpdates(props.page);
  const posts = useContentfulLiveUpdates(props.posts);
  const { currentPage, totalPages, totalPosts } = props.pagination;

  console.log('page', posts);

  if (!page || !posts) return null;
  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}

      <Container className="navMargin flex flex-col items-center">
        <h1>Lifestyle</h1>
        <p>{totalPosts} results</p>
      </Container>
      <Container className="my-8 md:mb-10 lg:mb-16">
        {
          posts.length === 0 && (
            <NoData 
              text="There is no lifestyle post found"   
            />
          )
        }
        <ArticleTileGrid
          className="md:grid-cols-2 lg:grid-cols-3"
          articles={posts}
        />
        
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {currentPage > 1 && (
              <Link href={`/lifestyle?page=${currentPage - 1}`} className="px-4 py-2 border rounded hover:bg-gray-100">
                Previous
              </Link>
            )}
            
            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>
            
            {currentPage < totalPages && (
              <Link href={`/lifestyle?page=${currentPage + 1}`} className="px-4 py-2 border rounded hover:bg-gray-100">
                Next
              </Link>
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale, draftMode: preview, query }) => {
  try {
    const gqlClient = preview ? previewClient : client;
    
    const currentPage = query.page ? Number(query.page) : 1;
    const postsPerPage = 50;
    const skip = (currentPage - 1) * postsPerPage;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    const blogPostsData = await gqlClient.pageBlogPostCollection({
      limit: 100,
      locale,
      limit: postsPerPage,
      skip: skip,
      order: PageBlogPostOrder.PublishedDateDesc,
      where: {
        blogPostType_not: "food",
        slug_not: page?.featuredBlogPost?.slug,
      },
      preview,
    });

    const posts = blogPostsData.pageBlogPostCollection?.items || [];
    const totalPosts = blogPostsData.pageBlogPostCollection?.total || 0;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    if (!page || currentPage < 1 || (totalPages > 0 && currentPage > totalPages)) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        previewActive: !!preview,
        ...(await getServerSideTranslations(locale)),
        page,
        posts,
        pagination: {
          currentPage,
          totalPages,
          postsPerPage,
          totalPosts
        }
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};

export default Page;