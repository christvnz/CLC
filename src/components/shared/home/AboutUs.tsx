import Link from "next/link"

const AboutUs = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
            <div className="space-y-6 text-center lg:text-start">
                <p className="text-gray-600 uppercase tracking-wider">ABOUT US</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                <span className="relative">
                    Helping businesses
                    <span className="absolute -z-10 left-0 bottom-2 bg-green-100 h-3 w-full"></span>
                </span>
                <br />
                succeed through the
                <br />
                power of video.
                </h1>
                <p className="text-gray-600 text-lg mt-4">
                Video is the future of business in this digital-focused world.
                </p>
                <p className="text-gray-600">
                Vidyard uses video to change the way companies connect and communicate. We help organizations of all sizes humanize their communications and personalize their customer experiences.
                </p>
                <div>
                <Link href={'/about'} className="font-medium py-4 px-7 text-lg rounded-xl overflow-hidden col-span-12 w-fit bg-[#FEAB01] text-colorWhite cursor-pointer">
                    View More
                </Link>
                </div>
            </div>
            </div>
            <div className="lg:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto">
                <img
                src="https://images.ctfassets.net/k6cg0ahe7dc0/4ZYIqmVICPlH1skTh6PuUV/602ee61fdee589e461f3f8ae66413b60/Imperial_Palace_-_Pecking_Duck.jpg"
                alt="Person working on laptop"
                className="relative w-full h-full object-cover rounded-md"
                />
            </div>
            </div>
        </div>
    )
}

export default AboutUs