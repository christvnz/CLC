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
import Lightbox from "yet-another-react-lightbox";
import React from 'react';
import { Gallery, ImageFieldsFragment } from '@src/lib/__generated/sdk';

interface ImageInterface {
    src: string
}

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const page = useContentfulLiveUpdates(props.page);
    const gallery = useContentfulLiveUpdates(props.gallery);
    const [index, setIndex] = React.useState(-1);
    const [slides, setSlides] = React.useState([]);
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSetSlides = (item: any, index: number) => {
        if (!item.imagesCollection) return;
        const images = item.imagesCollection.items.map((image: ImageFieldsFragment) => {
            return {
                src: image.url
            }
        })
        setSlides(images);
        setIndex(index);
        setIsOpen(true);
    }

    const handleSliderClose = () => {
        setIndex(-1)
        setIsOpen(false)
        setSlides([])
    }

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
                                    <div key={index} className="rounded-xl overflow-hidden bg-colorWhite col-span-12 cursor-pointer p-4">
                                        <p className="h3 mb-2 text-colorBlack md:mb-3 text-xl font-semibold text-gray-800 text-center">
                                            {item.title}
                                        </p>
                                        <div className='grid grid-cols-12 gap-5'>
                                            {
                                                item.imagesCollection.items.slice(0, 4).map((image: any, imageKey: number) => {
                                                    return (
                                                        <div key={imageKey} className="rounded-lg aspect-[16/10] overflow-hidden col-span-12  xl:col-span-3 lg:col-span-3 sm:col-span-4 relative">
                                                            <CtfImage
                                                                nextImageProps={{ 
                                                                    className: 'object-cover aspect-[16/10] w-full hover:scale-105',
                                                                    onClick: () => handleSetSlides(item, imageKey)
                                                                }}
                                                                {...image}     
                                                            />
                                                            {
                                                                imageKey === 3 && item.imagesCollection.items.length > 4 &&
                                                                <div onClick={() => handleSetSlides(item, imageKey)} className='absolute bg-colorBlack opacity-80 top-0 left-0 w-full h-full flex items-center justify-center text-colorWhite'>
                                                                    <span className='text-2xl font-semibold'>+{item.imagesCollection.items.length - 4}</span>
                                                                </div>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='text-center text-lg mt-5'>
                                            <Link href={`/gallery/${item.slug}`} className="bg-[#FEAB01] text-colorWhite font-medium py-2 px-5 rounded-xl overflow-hidden col-span-12 cursor-pointer">
                                                View All
                                            </Link>
                                        </div>
                                    </div>
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
            <Lightbox
                index={index}
                slides={slides}
                open={isOpen}
                close={handleSliderClose}
            />
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