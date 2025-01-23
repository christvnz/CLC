import { Container } from '@src/components/shared/container';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getServerSideTranslations } from '../utils/get-serverside-translations';
import { revalidateDuration } from '../utils/constants';
import { CtfImage } from '@src/components/features/contentful';
import { client, previewClient } from '@src/lib/client';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { SeoFields } from '@src/components/features/seo';
import Link from 'next/link';
import NoData from '@src/components/features/noData'

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const page = useContentfulLiveUpdates(props.page);
    const gallery = useContentfulLiveUpdates(props.gallery);
    return (
        <>
            {page.seoFields && <SeoFields {...page.seoFields} />}
            <Container className="navMargin flex flex-col items-center">
                <h1>Gallery</h1>
                <p>{gallery.length} results</p>
            </Container>
            <Container className="my-8 md:mb-10 lg:mb-16">
                {
                    gallery.length > 0 ? 
                    <div className='grid grid-cols-12 gap-5'>
                        {
                            gallery.map((item: any, index: number) => {
                                return (
                                    <Link href={`/gallery/${item.slug}`} key={index} className="rounded-xl overflow-hidden bg-colorWhite col-span-12 xl:col-span-4 lg:col-span-4 sm:col-span-6 cursor-pointer">
                                        <div className="p-4">
                                            <p className="h3 mb-2 text-[#ff0000] md:mb-3 text-xl font-bold text-gray-800 text-center">
                                                {item.title}
                                            </p>
                                            <div className="rounded-lg overflow-hidden">
                                                <CtfImage
                                                    nextImageProps={{ className: 'object-cover aspect-[16/10] w-full' }}
                                                    {...item.thumbnail}     
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    : (
                        <NoData 
                            text="Check back soon as we update our gallery with fresh dining experiences from around Auckland"   
                        />
                    )
                }
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale, draftMode: preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    const galleryData = await gqlClient.galleryCollection({ locale, preview });
    const gallery = galleryData.galleryCollection?.items;

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
        gallery
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