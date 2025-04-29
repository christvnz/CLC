import React, { useState } from 'react';
import HeaderStyles from '@src/styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoWord from './wordLogoBlack.svg';
import Image from 'next/image';
import Search from '@src/components/features/Search';
import HamburgerMenu from './hamburgerMenu';
import FollowUs from '../footer/FollowUs';
import NewsLetter from './newsletter.png';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

const Header = () => {
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      <header className={HeaderStyles.header}>
        <div className="m-auto mt-9 hidden w-11/12 justify-end lg:flex lg:pr-6">
          <FollowUs />
        </div>
        <div className={HeaderStyles.header__logoContainer}>
          <Link href="/">
            <div
              className={`${HeaderStyles.header__logoContainerLink}`}
              aria-label="Navigate to home page">
              <LogoWord className={HeaderStyles.header__logoName} />
            </div>
          </Link>
          <Link href="/" className="hidden lg:block">
            <div
              aria-label="Navigate to home page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/' ? HeaderStyles.active : ''
              }`}>
              Home
            </div>
          </Link>
          <Popover className="relative hidden lg:block">
            {({ open, close }) => ( 
              <>
                <PopoverButton className={`flex gap-x-3 cursor-pointer !shadow-none ${HeaderStyles.header__logoContainerLinkWord} ${
                    (router.pathname === '/food' || router.pathname === '/lifestyle') ? HeaderStyles.active : ''
                  }`}>
                  <span>Blogs</span>
                    <svg className={'w-6 h-6 transition-transform' + (open ? ' rotate-180' : '') } fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </PopoverButton>
                <PopoverPanel transition anchor="bottom" className={"flex flex-col z-10 mt-4 bg-colorWhite transition duration-300"}>
                  <Link href="/food" className="hidden lg:block"
                    onClick={close}
                  >
                    <div
                      aria-label="Navigate to food page"
                      className={`font-medium p-3 px-5 text-xl hover:bg-gray100 ${urbanist.variable} font-sans ${
                        router.pathname === '/food' ? HeaderStyles.active : ''
                      }`}>
                      Food
                    </div>
                  </Link>
                  <Link href="/lifestyle" className="hidden lg:block"
                    onClick={close}
                  >
                    <div
                      aria-label="Navigate to lifestyle page"
                      className={`font-medium p-3 px-5 text-xl hover:bg-gray100 ${urbanist.variable} font-sans ${
                        router.pathname === '/lifestyle' ? HeaderStyles.active : ''
                      }`}>
                      Lifestyle
                    </div>
                  </Link>
                </PopoverPanel>
              </>
            )}
          </Popover>
          <Link href="/about" className="hidden lg:block">
            <div
              aria-label="Navigate to about page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/about' ? HeaderStyles.active : ''
              }`}>
              About
            </div>
          </Link>
          <Link href="/gallery" className="hidden lg:block">
            <div
              aria-label="Navigate to about page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/gallery' ? HeaderStyles.active : ''
              }`}>
              Gallery
            </div>
          </Link>
          <Link href="/events" className="hidden lg:block">
            <div
              aria-label="Navigate to about page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/events' ? HeaderStyles.active : ''
              }`}>
              Events
            </div>
          </Link>
          {/* <Link href="/app" className="hidden lg:block">
            <div
              aria-label="Navigate to about page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/app' ? HeaderStyles.active : ''
              }`}>
              App
            </div>
          </Link> */}
          <div className="flex flex-row">
            <div className="mr-3">
              <HamburgerMenu />
            </div>
            <button onClick={() => setSearchModalOpen(true)} className="mr-2">
              <svg
                width="33"
                height="33"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="36" height="36" fill="url(#pattern0_615_87)" />
                <defs>
                  <pattern
                    id="pattern0_615_87"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1">
                    <use xlinkHref="#image0_615_87" transform="scale(0.0078125)" />
                  </pattern>
                  <image
                    id="image0_615_87"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </button>
            <a href="http://eepurl.com/iT3DE-/" className="hidden lg:block">
              <Image src={NewsLetter} width={55} height={55} alt="subscribe" />
            </a>
          </div>

          <Search isOpen={isSearchModalOpen} closeModal={() => setSearchModalOpen(false)} />
        </div>
      </header>
    </>
  );
};

export default Header;
