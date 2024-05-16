import React from 'react';
import { useState } from 'react';
import HeaderStyles from '@src/styles/Header.module.css';
import Link from 'next/link';
// import SocialLinks from '@src/components/SocialLinks';
import { useRouter } from 'next/router';
import { Config } from '@src/utils/Config';
import Logo from './wordLogo.svg';
import Search from '@src/components/features/Search';

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const showSocialLinks = router.pathname !== '/';

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const hamburgerClasses = menuOpen
    ? `${HeaderStyles.hamburger} ${HeaderStyles.is__open}`
    : `${HeaderStyles.hamburger}`;

  const navLinksClasses = menuOpen
    ? `${HeaderStyles.header__navList}`
    : `${HeaderStyles.header__navList} ${HeaderStyles.header__navList__hide}`;

  return (
    <>
      <header className={HeaderStyles.header}>
        <div className={HeaderStyles.header__logoContainer}>
          <Link href="/">
            <div
              className={HeaderStyles.header__logoContainerLink}
              aria-label="Navigate to home page">
              <Logo />
            </div>
          </Link>
          <Link href="/">
            <div
              aria-label="Navigate to home page"
              className={HeaderStyles.header__logoContainerLinkWord}>
              Home
            </div>
          </Link>
          <Link href="/food">
            <div
              aria-label="Navigate to home page"
              className={HeaderStyles.header__logoContainerLinkWord}>
              Food
            </div>
          </Link>
          <Link href="/lifestyle">
            <div
              aria-label="Navigate to lifestyle page"
              className={HeaderStyles.header__logoContainerLinkWord}>
              LifeStyle
            </div>
          </Link>
          <Link href="/about">
            <div
              aria-label="Navigate to lifestyle page"
              className={HeaderStyles.header__logoContainerLinkWord}>
              About
            </div>
          </Link>
          <Search />
        </div>
      </header>
    </>
  );
};

export default Header;
