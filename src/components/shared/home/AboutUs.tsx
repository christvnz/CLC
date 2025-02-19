import { ReferenceComponentAboutUsFragment } from "@src/lib/__generated/sdk"
import Link from "next/link"
import { CtfRichText } from '@src/components/features/contentful';
import { CtfImage } from '@src/components/features/contentful';

interface props {
    content: ReferenceComponentAboutUsFragment
}

const AboutUs = (props: props) => {
    const content = props.content
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
                <div className="space-y-6 text-center lg:text-start">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        {content.title}
                    </h1>
                    <CtfRichText json={content.shortDescription?.json} links={content.shortDescription?.links} />
                    <Link href={'/contact'} className="block font-medium py-4 px-7 text-lg rounded-xl overflow-hidden col-span-12 w-fit bg-[#FEAB01] text-colorWhite cursor-pointer">
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="lg:w-1/2">
                <div className="relative w-full h-fit">
                    {
                        content.videoUrl ? (
                            <div className="relative w-full pt-[56.25%]">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                                    src={content.videoUrl + '&autoplay=1&mute=1&loop=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1'}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen={false}
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title="YouTube video player"
                                />
                            </div>
                        ) : content.image ? 
                            <CtfImage
                                nextImageProps={{
                                    className: 'object-cover w-full  rounded-md',
                                }}
                                {...content.image}
                            />
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutUs