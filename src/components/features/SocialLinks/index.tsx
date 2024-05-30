import SocialLinksStyles from '@src/styles/SocialLinks.module.css';
import GitHub from './svg/github';

const socialLinksList = [
  {
    name: 'GitHub',
    url: 'https://www.facebook.com/groups/chowluckclub/',
    ariaLabel: 'Browse code on GitHub',
    svg: <GitHub />,
  },
];

export default function SocialLinks(props) {
  const { fillColor } = props;

  return (
    <div className={SocialLinksStyles.socialLinks}>
      <ul className={SocialLinksStyles.socialLinks__list}>
        {socialLinksList.map(link => (
          <li className={SocialLinksStyles.socialLinks__listItem} key={link.name}>
            <a
              className={SocialLinksStyles.socialLinks__listItemLink}
              style={{ color: fillColor }}
              href={link.url}
              aria-label={link.ariaLabel}
              target="_blank"
              rel="nofollow noreferrer">
              {link.svg}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
