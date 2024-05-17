import React from 'react';
import { useState } from 'react';
import HeaderStyles from '@src/styles/Header.module.css';
import Link from 'next/link';
// import SocialLinks from '@src/components/SocialLinks';
import { useRouter } from 'next/router';
import { Config } from '@src/utils/Config';
import LogoWord from './wordLogo.svg';
import Logo from './logo.svg';
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
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className={HeaderStyles.header}>
        <div className={HeaderStyles.header__logoContainer}>
          <Link href="/">
            <div
              className={HeaderStyles.header__logoContainerLink}
              aria-label="Navigate to home page">
              <Logo />
              <LogoWord />
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
          <button
            onClick={() => setModalOpen(true)}
            style={{ fontSize: '24px', border: 'none', background: 'none', cursor: 'pointer' }}>
            🔍
          </button>
          <Search isOpen={isModalOpen} closeModal={() => setModalOpen(false)} />
        </div>
      </header>
    </>
  );
};

export default Header;
