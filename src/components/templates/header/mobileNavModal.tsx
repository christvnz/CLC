// components/Modal.js
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import FollowUs from '../footer/FollowUs';

const Title = styled.h4`
  text-transform: uppercase;
  color: grey;
  margin-top: 20px;
  font-size: 14px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: black;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  color: black;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 30px 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 32px;
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default function Modal({ closeModal }) {
  const handleNavClick = () => {
    closeModal();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="36" height="36" fill="url(#pattern0_615_96)" />
            <defs>
              <pattern
                id="pattern0_615_96"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1">
                <use xlinkHref="#image0_615_96" transform="scale(0.0078125)" />
              </pattern>
              <image
                id="image0_615_96"
                width="128"
                height="128"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </CloseButton>
        <Nav>
          <NavList>
            <NavItem>
              <NavLink href="/" onClick={handleNavClick}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/food" onClick={handleNavClick}>
                Food
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/lifestyle" onClick={handleNavClick}>
                Lifestyle
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" onClick={handleNavClick}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gallery" onClick={handleNavClick}>
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/events" onClick={handleNavClick}>
                Events
              </NavLink>
            </NavItem>
          </NavList>
          <div>
            <Title>Follow us</Title>
            <FollowUs />
          </div>
        </Nav>
      </ModalContent>
    </ModalOverlay>
  );
}
