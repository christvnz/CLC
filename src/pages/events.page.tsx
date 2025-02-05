import { Container } from "@src/components/shared/container"
import { client, previewClient } from "@src/lib/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { revalidateDuration } from "./utils/constants";
import { getServerSideTranslations } from "./utils/get-serverside-translations";
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { SeoFields } from '@src/components/features/seo';
import { PageEvent } from "@src/lib/__generated/sdk";
import { CtfImage } from '@src/components/features/contentful';
import NoData from '@src/components/features/noData'
import { formatDateForDisplay } from "@src/utils/Date";

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

    const page = useContentfulLiveUpdates(props.page);
    const events = useContentfulLiveUpdates(props.events);
    return (
        <>
            {page.seoFields && <SeoFields {...page.seoFields} />}
            <Container className="navMargin flex flex-col items-center">
                <h1>Upcoming Events</h1>
            </Container>
            <Container className="my-8 md:mb-10 lg:mb-16">
                {
                    events.length > 0 ? 
                        <div className="grid grid-cols-12 gap-5">
                            {
                                events.map((item: PageEvent, index: number) => (
                                    <div key={index} className="rounded-lg flex flex-col md:flex-row gap-8 p-2 lg:p-8 col-span-12 shadow-md border border-gray300">
                                        <div className="rounded-xl overflow-hidden">
                                            {
                                                item.thumbnail &&
                                                    <CtfImage   
                                                        nextImageProps={{ className: 'w-auto md:w-[400px] h-auto md:h-[500px] object-cover' }}
                                                        {...item.thumbnail}     
                                                    />
                                            }
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-col justify-center h-full gap-y-3">
                                                <h2 className="text-[35px] font-bold text-gray-800 mb-2">{ item.title }</h2>
                                                <div className="text-[25px] text-[#FEAB01] rounded-bl-lg font-bold">
                                                    { item.amount }
                                                </div>
                                                <p className="text-gray600 mb-3 line-clamp-3 md:line-clamp-5 break-all">{ item.description }</p>
                                                {
                                                    item.location &&
                                                        <div className="text-lg">
                                                            <span className="font-bold">Location: </span>
                                                            <span>{ item.location }</span>
                                                        </div>
                                                }
                                                {
                                                    item.date && 
                                                        <div className="text-lg">
                                                            <span className="font-bold">Date: </span>
                                                            <span>{ formatDateForDisplay(item.date) }</span>
                                                        </div>
                                                }
                                                {
                                                    item.time && 
                                                        <div className="text-lg">
                                                            <span className="font-bold">Time: </span>
                                                            <span>{ item.time }</span>
                                                        </div>
                                                }
                                                <a href={item.buttonLink ? item.buttonLink : '#'} className="bg-[#FEAB01] text-colorWhite font-medium py-4 px-5 rounded hover:bg-red-600 text-center cursor-pointer w-fit">
                                                    { item.eventCta ? item.eventCta : 'Buy Now' }
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    : (
                        <NoData 
                            text="There are no events at the moment."
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

    const eventsData = await gqlClient.pageEventsCollection({ locale, preview });
    const events = eventsData.pageEventCollection?.items;

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
        events
      },
    };
  } catch {
    return {
      revalidate: revalidateDuration,
      notFound: true,
    };
  }
};

export default Page