import React, { useState } from 'react';
import HeaderStyles from '@src/styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoWord from './wordLogo.svg';
import Logo from './logo.svg';
import Search from '@src/components/features/Search';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <header className={HeaderStyles.header}>
        <div className={HeaderStyles.header__logoContainer}>
          <Link href="/">
            <div
              className={`${HeaderStyles.header__logoContainerLink}`}
              aria-label="Navigate to home page">
              <Logo className={HeaderStyles.header__logoImage} />
              <LogoWord className={HeaderStyles.header__logoName} />
            </div>
          </Link>
          <Link href="/">
            <div
              aria-label="Navigate to home page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/' ? HeaderStyles.active : ''
              }`}>
              Home
            </div>
          </Link>
          <Link href="/food">
            <div
              aria-label="Navigate to food page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/food' ? HeaderStyles.active : ''
              }`}>
              Food
            </div>
          </Link>
          <Link href="/lifestyle">
            <div
              aria-label="Navigate to lifestyle page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/lifestyle' ? HeaderStyles.active : ''
              }`}>
              LifeStyle
            </div>
          </Link>
          <Link href="/about">
            <div
              aria-label="Navigate to about page"
              className={`${HeaderStyles.header__logoContainerLinkWord} ${
                router.pathname === '/about' ? HeaderStyles.active : ''
              }`}>
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
