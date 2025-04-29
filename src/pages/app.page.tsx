import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getServerSideTranslations } from './utils/get-serverside-translations';
import { Container } from '@src/components/shared/container';
import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';
import { CtfImage, CtfRichText } from '@src/components/features/contentful';
import Image from 'next/image';
import facebook from '@src/components/templates/footer/facebook.png';
import instagram from '@src/components/templates/footer/instagram.png';
import { SeoFields } from '@src/components/features/seo';
import Link from 'next/link';


const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

  const page = useContentfulLiveUpdates(props.page);
  const app = page.app
  
  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <Container className="my-8 md:mb-10 lg:mb-16">
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <CtfImage
                nextImageProps={{
                    className: 'w-[30rem] rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0',
                }}
                {...app.sideImage}
              />
              <div className="lg:max-w-lg">
                <p className="text-[#0C141C] text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
                  ChowLuckCard
                </p>
                <p className=" text-yellow-600 text-lg/8"><span className='text-[#FEAB01]'>Power by</span> Chow Luck Club</p>
                <div className='my-2'>
                  <CtfRichText json={app.description?.json} links={app.description?.links} />
                </div>
                <div className="text-base/6.5 text-gray-600 mt-3 max-w-xl space-y-8 lg:max-w-none">
                  <div className="relative items-center justify-between">
                    <div className="flex flex-col text-gray-900 font-semibold">
                      Click the icons on the right to discover more about our restaurant partners,
                      their exciting deals, and ongoing special promotions.
                      <div className="flex gap-x-2 mt-3">
                        <Link href="https://www.facebook.com/chowluckclub">
                          <Image src={facebook} width={25} height={25} alt="facebook" />
                        </Link>
                        <Link href="https://www.instagram.com/chowluckclub"> 
                          <Image src={instagram} width={25} height={25} alt="instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 mt-4 flex max-w-xl flex-col items-center space-y-6 lg:max-w-none lg:flex-row lg:space-x-6 lg:space-y-0">
                  {
                    app.appleAppUrl && app.androidAppUrl && (
                      <>
                        <Link href={app.appleAppUrl}>
                          <CtfImage
                            nextImageProps={{
                                className: 'h-40 w-60 object-contain',
                            }}
                            {...app.appleIcon}
                          />
                        </Link>
                        <Link href={app.androidAppUrl}>
                          <CtfImage
                            nextImageProps={{
                                className: 'h-40 w-60 object-contain',
                            }}
                            {...app.androidAppIcon}
                          />
                        </Link>
                      </>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, draftMode: preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

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


