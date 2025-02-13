import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { getServerSideTranslations } from './utils/get-serverside-translations';

import { ArticleHero, ArticleTileGrid } from '@src/components/features/article';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { PageBlogPostOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';
import HomeBanner from '@src/components/shared/home/Banner';
import AboutUs from '@src/components/shared/home/AboutUs';
import NewsLetter from '@src/components/shared/home/NewsLetter';
import Partners from '@src/components/shared/home/Partners';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const page = useContentfulLiveUpdates(props.page);
  const posts = useContentfulLiveUpdates(props.posts);
  const partners = useContentfulLiveUpdates(props.partners);

  if (!page?.featuredBlogPost || !posts) return;

  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}

      <Container className='pb-6'>
        <HomeBanner />
      </Container>

      <Container className="my-8  md:my-10 lg:my-16">
        <h2 className="mb-4 md:mb-6">Latest articles</h2>
        <ArticleTileGrid className="md:grid-cols-2 lg:grid-cols-3" articles={posts} />
      </Container>

      <Container className="flex justify-center ">
        <Link href={'/food'} className="font-medium py-4 px-7 text-lg rounded-xl overflow-hidden col-span-12 w-fit bg-[#FEAB01] text-colorWhite cursor-pointer">
          View More
        </Link>
      </Container>

      <Container className='my-8 md:my-10 lg:my-16'>
        <AboutUs />
      </Container>

      <Container className='my-8 md:my-10 lg:my-16 bg-[#F7F5EC] text-center p-6 py-12'>
        <NewsLetter />
      </Container>

      <Container className='my-8 md:my-10 lg:my-16'>
        <Partners partners={partners}/>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, draftMode: preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    const blogPostsData = await gqlClient.pageBlogPostCollection({
      limit: 6,
      locale,
      order: PageBlogPostOrder.PublishedDateDesc,
      where: {
        slug_not: page?.featuredBlogPost?.slug,
      },
      preview,
    });

    const partnersCollection = await gqlClient.ourPartners({ locale, preview })
    const posts = blogPostsData.pageBlogPostCollection?.items;
    const partners = partnersCollection.pageOurPartnersCollection?.items;

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
        partners
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
