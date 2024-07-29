import styled from 'styled-components';
import Image from 'next/image';
import facebook from './facebook.png';
import instagram from './instagram.png';
import tiktok from './tiktok.png';
import youtube from './youtube.png';

const Container = styled.div`
  grid-column: span 1;
  @media (max-width: 768px) {
    /* margin: 30px 0px; */
  }
`;

const Title = styled.h4`
  text-transform: uppercase;
  margin-bottom: 6px;
`;

const LinksGrid = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
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
    <LinksGrid>
      <LinkContainer>
        <LinkText>
          <a
            href="https://www.instagram.com/chowluckclub"
            target="_blank"
            rel="noopener noreferrer">
            <Image src={instagram} width={24} height={24} alt="instagram" />
          </a>
        </LinkText>
      </LinkContainer>

      <LinkContainer>
        <LinkText>
          <a href="https://www.tiktok.com/@chowluckclub" target="_blank" rel="noopener noreferrer">
            <Image src={tiktok} width={24} height={24} alt="tiktok" />
          </a>
        </LinkText>
      </LinkContainer>
      <LinkContainer>
        <LinkText>
          <a
            href="https://www.facebook.com/groups/chowluckclub/"
            target="_blank"
            rel="noopener noreferrer">
            <Image src={facebook} width={24} height={24} alt="facebook" />
          </a>
        </LinkText>
      </LinkContainer>
      <LinkContainer>
        <LinkText>
          <a href="https://www.youtube.com/@chowluckclub" target="_blank" rel="noopener noreferrer">
            <Image src={youtube} width={24} height={24} alt="youtube" />
          </a>
        </LinkText>
      </LinkContainer>
    </LinksGrid>
  </Container>
);

export default FollowUs;
