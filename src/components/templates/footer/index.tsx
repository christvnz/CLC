import SocialLinks from '@src/components/features/SocialLinks';
import FooterStyles from '@src/styles/Footer.module.css';
import ButtonStyles from '@src/styles/Button.module.css';
import TypographyStyles from '@src/styles/Typography.module.css';
import Link from 'next/link';
import { Config } from '@src/utils/Config';

const Footer = () => {
  const date = new Date();

  return (
    <footer className={FooterStyles.footer}>
      <nav className={FooterStyles.footer__nav} aria-label="secondary">
        I am a footer
      </nav>

      <div className={FooterStyles.footer__socialLinksContainer}>
        <SocialLinks fillColor="#ffffff" />
      </div>

      <Link href={Config.pageMeta.privacyPolicy.slug}>
        <div className={`${TypographyStyles.inlineLink} ${FooterStyles.footer__privacyPolicyLink}`}>
          to be implemented
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
