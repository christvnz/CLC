import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { getServerSideTranslations } from './utils/get-serverside-translations';
import { CtfImage } from '@src/components/features/contentful';
import { ArticleContent, ArticleHero, ArticleTileGrid } from '@src/components/features/article';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';
import ArticleSocialShare from '@src/components/features/article/ArticleSocialShare';
import Link from 'next/link';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const { blogPost, advertisement } = props;
  const relatedPosts = blogPost?.relatedBlogPostsCollection?.items;

  if (!blogPost || !relatedPosts) return null;
  return (
    <>
      {blogPost.seoFields && <SeoFields {...blogPost.seoFields} />}
      <Container className="navMargin">
        <ArticleHero article={blogPost} isFeatured={props.isFeatured} isReversedLayout={true} />
      </Container>
      <Container className="mt-8 max-w-8xl">
        <div className='relative flex justify-between flex-col xl:flex-row gap-y-4 xl:gap-y-0 gap-x-0 xl:gap-x-3'>
          <div className='mx-auto max-w-4xl'>
            <ArticleContent article={blogPost} />
            <div className='mt-6'>
              <ArticleSocialShare title={blogPost.title || ''} slug={blogPost.slug} />
            </div>
          </div>
          {
            advertisement && 
              <div className='mx-auto max-w-4xl xl:max-w-full sticky top-44 h-fit w-[300px]'>
                <Link href={advertisement.redirectUrl ? advertisement.redirectUrl : ''} target={advertisement.redirectUrl ? '_blank' : '_self'}>
                  <CtfImage nextImageProps={{ className: 'w-full' }} {...advertisement.image} />
                </Link>
              </div>
          }
        </div>
      </Container>
      {relatedPosts.length ? (
        <Container className="my-8 max-w-5xl">
          <h2 className="mb-4 md:mb-6">{t('article.relatedArticles')}</h2>
          <ArticleTileGrid className="md:grid-cols-2" articles={relatedPosts} />
        </Container>
      ) : null}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale, draftMode: preview }) => {
  if (!params?.slug || !locale) {
    return {
      notFound: true,
      revalidate: revalidateDuration,
    };
  }

  const gqlClient = preview ? previewClient : client;

  try {
    const [blogPageData, landingPageData, advertisementPageData] = await Promise.all([
      gqlClient.pageBlogPost({ slug: params.slug.toString(), locale, preview }),
      gqlClient.pageLanding({ locale, preview }),
      gqlClient.pageAdvertisement({ locale, preview }),
    ]);

    const blogPost = blogPageData.pageBlogPostCollection?.items[0];
    const landingPage = landingPageData.pageLandingCollection?.items[0];
    const advertisement = advertisementPageData.componentAdvertisementCollection?.items.length ? advertisementPageData.componentAdvertisementCollection?.items[0] : null;

    const isFeatured = landingPage?.featuredBlogPost?.slug === blogPost?.slug;

    if (!blogPost) {
      return {
        notFound: true,
        revalidate: revalidateDuration,
      };
    }

    return {
      revalidate: revalidateDuration,
      props: {
        ...(await getServerSideTranslations(locale)),
        previewActive: !!preview,
        blogPost,
        isFeatured,
        advertisement
      },
    };
  } catch {
    return {
      notFound: true,
      revalidate: revalidateDuration,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const dataPerLocale = locales
    ? await Promise.all(
        locales.map(locale => client.pageBlogPostCollection({ locale, limit: 100 })),
      )
    : [];

  const paths = dataPerLocale
    .flatMap((data, index) =>
      data.pageBlogPostCollection?.items.map(blogPost =>
        blogPost?.slug
          ? {
              params: {
                slug: blogPost.slug,
              },
              locale: locales?.[index],
            }
          : undefined,
      ),
    )
    .filter(Boolean);

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Page;
