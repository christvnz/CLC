import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";

interface Props {
    title: string
    slug: string
}

const ArticleSocialShare = (props: Props) => {
    const location = process.env.NEXT_PUBLIC_BASE_URL + props.slug;

    const copyLink = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(location);
    };

    const handleShareClick = (e: any) => {
        e.stopPropagation();
    };

    const title = props.title || '';

    return (
        <div className='flex items-center gap-x-2'>
            <span className="text-[16px] font-semibold uppercase">Share Me</span>
            <div onClick={handleShareClick} className="!h-[32px]">
                <FacebookShareButton
                    url={location}
                    title={title}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </div>
            <div onClick={handleShareClick} className="!h-[32px]">
                <WhatsappShareButton
                    url={location}
                    title={title}
                    separator=' - '
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </div>
            <button className='bg-colorWhite border rounded-full h-[32px] w-[32px] text-gray600 flex items-center justify-center' onClick={copyLink}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[18px] h-[18px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
            </button>
        </div>
    );
}

export default ArticleSocialShare