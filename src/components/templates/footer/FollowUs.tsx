import styled from 'styled-components';

const Container = styled.div`
  grid-column: span 1;
`;

const Title = styled.h4`
  text-transform: uppercase;
`;

const LinksGrid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 0.75rem; /* Tailwind's space-y-3 */
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LinkText = styled.p`
  margin: 0;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  transition: color 0.3s ease;

  &:hover {
    color: #005bb5; /* Change color as per your preference */
  }

  svg {
    margin-right: 8px; /* Spacing between icon and text */
  }
`;

const FollowUs = () => (
  <Container>
    <Title>Follow us</Title>
    <LinksGrid>
      <LinkContainer>
        <LinkText>
          <Link href="https://www.instagram.com/wavetickmusic">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="ph:instagram-logo-fill">
                <path
                  id="Vector"
                  d="M15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7949 9.00247 13.5565 9.31934 14.1186 9.88141C14.6807 10.4435 14.9975 11.2051 15 12ZM21.375 7.875V16.125C21.375 17.5174 20.8219 18.8527 19.8373 19.8373C18.8527 20.8219 17.5174 21.375 16.125 21.375H7.875C6.48261 21.375 5.14726 20.8219 4.16269 19.8373C3.17812 18.8527 2.625 17.5174 2.625 16.125V7.875C2.625 6.48261 3.17812 5.14726 4.16269 4.16269C5.14726 3.17812 6.48261 2.625 7.875 2.625H16.125C17.5174 2.625 18.8527 3.17812 19.8373 4.16269C20.8219 5.14726 21.375 6.48261 21.375 7.875ZM16.5 12C16.5 11.11 16.2361 10.24 15.7416 9.49993C15.2471 8.75991 14.5443 8.18314 13.7221 7.84254C12.8998 7.50195 11.995 7.41283 11.1221 7.58647C10.2492 7.7601 9.44736 8.18868 8.81802 8.81802C8.18868 9.44736 7.7601 10.2492 7.58647 11.1221C7.41283 11.995 7.50195 12.8998 7.84254 13.7221C8.18314 14.5443 8.75991 15.2471 9.49993 15.7416C10.24 16.2361 11.11 16.5 12 16.5C13.1935 16.5 14.3381 16.0259 15.182 15.182C16.0259 14.3381 16.5 13.1935 16.5 12ZM18 7.125C18 6.9025 17.934 6.68499 17.8104 6.49998C17.6868 6.31498 17.5111 6.17078 17.3055 6.08564C17.1 6.00049 16.8738 5.97821 16.6555 6.02162C16.4373 6.06502 16.2368 6.17217 16.0795 6.3295C15.9222 6.48684 15.815 6.68729 15.7716 6.90552C15.7282 7.12375 15.7505 7.34995 15.8356 7.55552C15.9208 7.76109 16.065 7.93679 16.25 8.0604C16.435 8.18402 16.6525 8.25 16.875 8.25C17.1734 8.25 17.4595 8.13147 17.6705 7.9205C17.8815 7.70952 18 7.42337 18 7.125Z"
                  fill="#9A9A9A"></path>
              </g>
            </svg>
            Instagram
          </Link>
        </LinkText>
      </LinkContainer>
      <LinkContainer>
        <LinkText>
          <Link href="https://twitter.com/wavetickmusic">
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 462.799">
              <path
                fill="#9A9A9A"
                fill-rule="nonzero"
                d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"></path>
            </svg>
            Twitter
          </Link>
        </LinkText>
      </LinkContainer>
      <LinkContainer>
        <LinkText>
          <Link href="https://www.tiktok.com/@wavetickmusic">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="ic:twotone-tiktok">
                <path
                  id="Vector"
                  d="M16.6 5.82C15.9164 5.03962 15.5397 4.03743 15.54 3H12.45V15.4C12.4261 16.071 12.1428 16.7066 11.6597 17.1729C11.1766 17.6393 10.5314 17.8999 9.85997 17.9C8.43997 17.9 7.25997 16.74 7.25997 15.3C7.25997 13.58 8.91997 12.29 10.63 12.82V9.66C7.17997 9.2 4.15997 11.88 4.15997 15.3C4.15997 18.63 6.91997 21 9.84997 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2973 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z"
                  fill="#9A9A9A"></path>
              </g>
            </svg>
            TikTok
          </Link>
        </LinkText>
      </LinkContainer>
    </LinksGrid>
  </Container>
);

export default FollowUs;
