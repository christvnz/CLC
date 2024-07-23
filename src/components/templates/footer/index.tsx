import WordLogo from '../header/wordLogo.svg';
import EmailSubscription from '@src/components/features/emailSubscription';
import FollowUs from './FollowUs';
import Link from 'next/link';
import styled from 'styled-components';

const FooterColor = styled.footer`
  background-color: #e08c54;
`;
const FooterContainer = styled.div`
  margin: auto;
  margin-top: 40px;
  padding: 0 32px 27px;
  max-width: 1440px;

  @media (min-width: 768px) {
    padding: 0 87px 37px;
  }
`;

const Title = styled.h4`
  text-transform: uppercase;
`;

const TextP = styled.p`
  font-size: 15px;
  color: white;
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterColor>
      <FooterContainer className="flex-column">
        <div className="pt-6 md:pt-0">
          <WordLogo />
        </div>
        <div className="grid grid-cols-3 md:mt-6 md:gap-10 lg:gap-16">
          <div className="col-span-3 md:order-1 md:col-span-2">
            <TextP className="mb-6 mt-6 md:mb-0 md:mt-0">
              <span className="font-bold">chowluckclub.com</span>{' '}
              {` is a digital platform designed to help you discover great restaurants,
            products, and businesses in Auckland. It offers a comprehensive directory of dining
            options, ranging from casual eateries to gourmet establishments, along with a variety of
            other establishments. This platform also features articles from our writers showcasing
            top spots, opinions, and in-depth restaurant features, making it a valuable resource for
            discovering the best of Auckland's offerings.`}
            </TextP>
          </div>
          <div className="md:order-0 col-span-3 md:col-span-1">
            <div className="">
              <EmailSubscription />
            </div>
          </div>

          <div className="order-2 col-span-2 mt-8 mb-8 md:mt-0 md:mb-0">
            <Title>Follow us</Title>

            <FollowUs />
          </div>

          <div className="order-2 col-span-2 md:col-span-2">
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
          <div className="order-2 col-span-3 mt-3 flex justify-center md:col-span-1 md:items-end md:justify-end">
            <span className=" hover:text-gray-200 inline-flex gap-x-2">{`©Lincoln's Table 2024`}</span>
            <Link className=" hover:text-gray-200 ml-2 inline-flex gap-x-2" href="/terms">
              T&Cs / Privacy Policy
            </Link>
          </div>
        </div>
      </FooterContainer>
    </FooterColor>
  );
};

export default Footer;
