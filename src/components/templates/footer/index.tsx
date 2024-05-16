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
        <ul className={FooterStyles.footer__linkList}>
          <li className={FooterStyles.footer__linkListItem}>
            <Link href="/topics/webdev">
              <div className={FooterStyles.footer__linkListItemLink}>Explore content</div>
            </Link>
          </li>
          <li className={FooterStyles.footer__linkListItem}>
            <Link href="/uses">
              <div className={FooterStyles.footer__linkListItemLink}>Things I use</div>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={FooterStyles.footer__socialLinksContainer}>
        <SocialLinks fillColor="#ffffff" />
      </div>
      <p className={FooterStyles.footer__copyright}>
        © {Config.site.owner} {date.getFullYear()} All Rights Reserved.
      </p>
      <Link href={Config.pageMeta.privacyPolicy.slug}>
        <div className={`${TypographyStyles.inlineLink} ${FooterStyles.footer__privacyPolicyLink}`}>
          Privacy Policy
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
