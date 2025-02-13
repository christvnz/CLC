import styled from 'styled-components';
import WordLogo from '../header/wordLogo.svg';
import Link from 'next/link';
import FollowUs from './FollowUs';

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

const TextP = styled.p`
  font-size: 15px;
  color: white;
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const Title = styled.h4`
  text-transform: uppercase;
`;

const V2Footer = () => {
    return (
        <FooterColor>
            <div className="flex flex-col lg:flex-row gap-16 py-12 md:py-16 mx-auto max-w-8xl px-4 border-b border-[#1F242F]">
                <div className='flex-none w-full max-w-full lg:max-w-96 xl:max-w-3xl block'>
                    <div className='mb-8'>
                        <WordLogo />
                    </div>
                    <TextP className="mb-6 mt-6 md:mb-0 md:mt-0">
                        <span className="font-bold">chowluckclub.com</span>
                        {`is a digital platform designed to help you discover great restaurants,
                        products, and businesses in Auckland. It offers a comprehensive directory of dining
                        options, ranging from casual eateries to gourmet establishments, along with a variety of
                        other establishments. This platform also features articles from our writers showcasing
                        top spots, opinions, and in-depth restaurant features, making it a valuable resource for
                        discovering the best of Auckland's offerings.`}
                    </TextP>
                </div>
                <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-8 justify-end'>
                    <div>
                        <h5 className="text-2xl font-bold text-colorBlack mb-4">Quick Links</h5>
                        <ul className="space-y-3">
                            <li className='hover:text-gray200 text-colorWhite text-lg gap-x-2'>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li className='hover:text-gray200 text-colorWhite text-lg gap-x-2'>
                                <Link href="/advertising">
                                    Advertising
                                </Link>
                            </li>
                            <li className='hover:text-gray200 text-colorWhite text-lg gap-x-2'>
                                <Link href="/policy">
                                    Editorial Policy
                                </Link>
                            </li>
                            <li className='hover:text-gray200 text-colorWhite text-lg gap-x-2'>
                                <Link href="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-2xl font-bold text-colorBlack mb-4">Contact Information</h5>
                        <ul className="space-y-3">
                            <li className='hover:text-gray200 text-colorWhite text-lg gap-x-2'>
                                <div className='flex items-center gap-x-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <span>
                                        dsfsklfdf;fklsfjsl;ffks;lfk
                                    </span>
                                </div>
                            </li>
                            <li className='hover:text-gray200 text-colorWhite text-lg gap-x-2'>
                                <div className='flex items-center gap-x-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    <span>+65 1234 5678</span>
                                </div>
                            </li>
                            <li className='hover:text-gray200 text-colorWhite text-lg gap-x-2'>
                                <div className='flex items-center gap-x-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <span>contact@chowluckclub.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden sm:block'></div>
                    <div>
                        <div className="order-2 col-span-2 mt-8 mb-8 md:order-1 md:col-span-2 md:mt-0 md:mb-0">
                            <Title>Follow us</Title>

                            <FollowUs />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-4 flex flex-col md:flex-row items-center justify-between gap-4 mx-auto max-w-8xl px-4'>
                <span className="hover:text-gray200 inline-flex gap-x-2">{`©Lincoln's Table 2024`}</span>
                <Link className=" hover:text-gray200 ml-2 inline-flex gap-x-2" href="/terms">
                    T&Cs / Privacy Policy
                </Link>
            </div>
        </FooterColor>
    )
}

export default V2Footer