import { Container } from '@src/components/shared/container';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { getServerSideTranslations } from '../utils/get-serverside-translations';
import { revalidateDuration } from '../utils/constants';
import { CtfImage } from '@src/components/features/contentful';
import { client, previewClient } from '@src/lib/client';
import { SeoFields } from '@src/components/features/seo';
import Lightbox from "yet-another-react-lightbox";
import React from 'react';
import { ImageFieldsFragment, GalleryOrder } from '@src/lib/__generated/sdk';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { page, gallery } = props;
    const slides = gallery.imagesCollection.items.map((image: ImageFieldsFragment) => {
        return {
            src: image.url
        }
    });
    const [index, setIndex] = React.useState(-1);
    return (
        <>
            {page.seoFields && <SeoFields {...page.seoFields} />}
            <Container className="my-5 md:mb-10 lg:mb-16">
                <h1 className='h3 mb-2 text-gray800 md:mb-3 text-center block'>{ gallery.title }</h1>
                <div className='grid grid-cols-12 gap-5 mt-3'>
                    {
                        gallery.imagesCollection.items.map((image: any, index: number) => (
                            <div key={index} className='col-span-12 xl:col-span-4 lg:col-span-4 sm:col-span-6 overflow-hidden'>
                                <CtfImage
                                    nextImageProps={
                                        { 
                                            className: 'object-cover aspect-[16/10] w-full rounded-md cursor-pointer hover:scale-105', 
                                            onClick: () => setIndex(index)
                                        }
                                    }
                                    {...image}     
                                />
                            </div>
                        ))
                    }
                    <Lightbox
                        index={index}
                        slides={slides}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                    />
                </div>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params, locale, draftMode: preview }) => {
    if (!params?.slug || !locale) {
        return {
            notFound: true,
            revalidate: revalidateDuration,
        };
    }
    const gqlClient = preview ? previewClient : client;
    try {
        const [galleryPageData, landingPageData] = await Promise.all([
            gqlClient.pageGallery({ slug: params.slug.toString(), locale, preview }),
            gqlClient.pageLanding({ locale, preview }),
        ]);
        const page = landingPageData.pageLandingCollection?.items[0];
        const gallery = galleryPageData.galleryCollection?.items[0]

        if (!gallery) {
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

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    // Only pre-render the 10 most recent gallery pages at build time
    // Other galleries will be generated on-demand (fallback: 'blocking')
    const dataPerLocale = locales
        ? await Promise.all(
            locales.map(locale => client.galleryCollection({
                locale,
                limit: 10,
                order: [GalleryOrder.SysPublishedAtDesc]
            })),
        )
        : [];

    const paths = dataPerLocale
        .flatMap((data, index) =>
            data.galleryCollection?.items.map(gallery =>
                gallery?.slug
                    ? {
                        params: {
                            slug: gallery.slug,
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