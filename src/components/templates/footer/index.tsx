import HeaderStyles from '@src/styles/Header.module.css';
import Logo from '../header/logo.svg';
import WordLogo from '../header/wordLogo.svg';
import EmailSubscription from '@src/components/features/emailSubscription';
import FollowUs from './FollowUs';

const Footer = () => {
  const date = new Date();

  return (
    <footer className="flex flex-col items-end justify-center">
      <div className="from-gray-700 via-gray-900 to-black w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]">
        <div className="mx-auto w-full py-10 px-4 sm:px-6 lg:px-8 lg:pt-20">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-full lg:col-span-2">
              <div className="flex items-center">
                <Logo className={`me-15 h-8 ${HeaderStyles.header__logoName}`} />
              </div>
              <p className="text-white mt-6">
                Chowluckclub is a website designed to help you find good restaurants in your area.
                It offers a comprehensive list of dining options, from casual eateries to gourmet
                establishments. With user reviews and detailed information, Chowluckclub makes it
                easy to discover the perfect place to eat.
              </p>
            </div>
            <div className="col-span-1">
              <FollowUs />
            </div>
            <div className="col-span-1">
              <h4 className="text-gray-100 font-semibold uppercase">Important Links</h4>
              <div className="mt-6 grid space-y-3">
                <p>
                  <a className="text-white hover:text-gray-200 inline-flex gap-x-2" href="#">
                    Our Journeys
                  </a>
                </p>
                <p>
                  <a className="text-white hover:text-gray-200 inline-flex gap-x-2" href="#">
                    Roadmap
                  </a>
                </p>
                <p>
                  <a className="text-white hover:text-gray-200 inline-flex gap-x-2" href="#">
                    Pricing Plans
                  </a>
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <EmailSubscription />
            </div>
          </div>
        </div>
      </div>
      <WordLogo />
    </footer>
  );
};

export default Footer;
