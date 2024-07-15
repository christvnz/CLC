import HeaderStyles from '@src/styles/Header.module.css';
import Logo from '../header/logo.svg';
import WordLogo from '../header/wordLogo.svg';
import EmailSubscription from '@src/components/features/emailSubscription';
import FollowUs from './FollowUs';
import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #e08c54;
  padding: 0 32px 27px;

  @media (min-width: 768px) {
    padding: 0 87px 37px;
  }
`;

const TextP = styled.p`
  font-size: 15px;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer className="flex-column">
      <WordLogo />
      <div className="grid grid-cols-2 md:gap-12">
        <div className="col-span-2 md:order-1 md:col-span-1">
          <TextP className=" mt-6">
            chowluckclub.com is a digital platform designed to help you discover great restaurants,
            products, and businesses in Auckland. It offers a comprehensive directory of dining
            options, ranging from casual eateries to gourmet establishments, along with a variety of
            other establishments. This platform also features articles from our writers showcasing
            top spots, opinions, and in-depth restaurant features, making it a valuable resource for
            discovering the best of Auckland's offerings.
          </TextP>
        </div>
        <div className="md:order-0 col-span-2 mt-6 md:col-span-1">
          <div className="">
            <EmailSubscription />
          </div>
        </div>

        <div className="order-2 col-span-2">
          <FollowUs />
        </div>

        <div className="order-2 col-span-2">
          <div className="grid space-y-3">
            <TextP>
              <Link className=" hover:text-gray-200 inline-flex gap-x-2" href="/about">
                About us
              </Link>
            </TextP>
            <TextP>
              <Link className=" hover:text-gray-200 inline-flex gap-x-2" href="/advertising">
                Advertising & Partnership
              </Link>
            </TextP>
            <TextP>
              <Link className=" hover:text-gray-200 inline-flex gap-x-2" href="/policy">
                Editorial Policy
              </Link>
            </TextP>
            <TextP>
              <Link className=" hover:text-gray-200 inline-flex gap-x-2" href="/contact">
                Contact us
              </Link>
            </TextP>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
