'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const FacebookShareButton = dynamic(
  () => import('react-share').then(mod => mod.FacebookShareButton),
  { ssr: false }
);

const FacebookIcon = dynamic(
  () => import('react-share').then(mod => mod.FacebookIcon),
  { ssr: false }
);

const WhatsappShareButton = dynamic(
  () => import('react-share').then(mod => mod.WhatsappShareButton),
  { ssr: false }
);

const WhatsappIcon = dynamic(
  () => import('react-share').then(mod => mod.WhatsappIcon),
  { ssr: false }
);

interface Props {
  title: string;
  slug: string;
}

// Add Social Share Buttons
const ArticleSocialShare = (props: Props) => {
  const location = `${process.env.NEXT_PUBLIC_BASE_URL}${props.slug}`;
  const title = props.title || '';

  const copyLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(location);
  };

  const handleShareClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <div className='flex items-center gap-x-2'>
      <span className="text-[16px] font-semibold uppercase">Share Me</span>
      <button onClick={handleShareClick} className="!h-[32px]">
        <FacebookShareButton url={location} title={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </button>
      <button onClick={handleShareClick} className="!h-[32px]">
        <WhatsappShareButton url={location} title={title} separator=" - ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </button>
      <button 
        className='bg-colorWhite border rounded-full h-[32px] w-[32px] text-gray600 flex items-center justify-center' 
        onClick={copyLink}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      </button>
    </div>
  );
};

export default ArticleSocialShare;