import React, { useState } from 'react';
import HeaderStyles from '@src/styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoWord from './wordLogoBlack.svg';
import Search from '@src/components/features/Search';
import HamburgerMenu from './hamburgerMenu';
import FollowUs from '../footer/FollowUs';

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
          <Link href="/food" className="hidden lg:block">
            <div
              aria-label="Navigate to food page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/food' ? HeaderStyles.active : ''
              }`}>
              Food
            </div>
          </Link>
          <Link href="/lifestyle" className="hidden lg:block">
            <div
              aria-label="Navigate to lifestyle page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/lifestyle' ? HeaderStyles.active : ''
              }`}>
              Lifestyle
            </div>
          </Link>
          <Link href="/about" className="hidden lg:block">
            <div
              aria-label="Navigate to about page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/about' ? HeaderStyles.active : ''
              }`}>
              About
            </div>
          </Link>
          <div className="flex flex-row">
            <div className="mr-3">
              <HamburgerMenu />
            </div>
            <button onClick={() => setSearchModalOpen(true)} className="mr-2">
              <svg
                width="36"
                height="36"
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
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="54" height="54" fill="url(#pattern0_613_160)" />
                <defs>
                  <pattern
                    id="pattern0_613_160"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1">
                    <use xlinkHref="#image0_613_160" transform="scale(0.0078125)" />
                  </pattern>
                  <image
                    id="image0_613_160"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </a>
          </div>

          <Search isOpen={isSearchModalOpen} closeModal={() => setSearchModalOpen(false)} />
        </div>
      </header>
    </>
  );
};

export default Header;
