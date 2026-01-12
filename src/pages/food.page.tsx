import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { getServerSideTranslations } from './utils/get-serverside-translations';

import { ArticleTileGrid } from '@src/components/features/article';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { PageBlogPostOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';
import NoData from '@src/components/features/noData';
import { revalidateDuration } from './utils/constants';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { page, posts: allPosts } = props;

  // Handle client-side pagination
  const postsPerPage = 50;
  const currentPage = router.query.page ? Number(router.query.page) : 1;

  const { posts, totalPages, totalPosts } = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = allPosts.slice(startIndex, endIndex);

    return {
      posts: paginatedPosts,
      totalPages: Math.ceil(allPosts.length / postsPerPage),
      totalPosts: allPosts.length
    };
  }, [allPosts, currentPage, postsPerPage]);

  if (!page || !posts) return null;
  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}

      <Container className="navMargin flex flex-col items-center">
        <h1>Food</h1>
        <p>{totalPosts} results</p>
      </Container>
      <Container className="my-8 md:mb-10 lg:mb-16">
        {
          posts.length === 0 && (
            <NoData 
              text="There is no food post found"   
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
              <Link href={`/food?page=${currentPage - 1}`} className="px-4 py-2 border rounded hover:bg-gray-100">
                Previous
              </Link>
            )}
            
            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>
            
            {currentPage < totalPages && (
              <Link href={`/food?page=${currentPage + 1}`} className="px-4 py-2 border rounded hover:bg-gray-100">
                Next
              </Link>
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, draftMode: preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    // Fetch all food posts at build time
    const blogPostsData = await gqlClient.pageBlogPostCollection({
      limit: 100,
      locale,
      order: PageBlogPostOrder.PublishedDateDesc,
      where: {
        blogPostType: "food",
        slug_not: page?.featuredBlogPost?.slug,
      },
      preview,
    });

    const posts = blogPostsData.pageBlogPostCollection?.items || [];

    if (!page) {
      return {
        notFound: true,
        revalidate: revalidateDuration,
      };
    }

    return {
      props: {
        previewActive: !!preview,
        ...(await getServerSideTranslations(locale)),
        page,
        posts,
      },
      revalidate: revalidateDuration, // ISR: regenerate page every hour
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
      revalidate: revalidateDuration,
    };
  }
};

export default Page;