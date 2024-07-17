import { GetStaticProps } from 'next';
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';

import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  color: #e0e0e0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: var(--color-primary);
  font-weight: 700;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: var(--color-primary);
  margin: 20px 0 15px;
  margin-bottom: 10px;
  padding-bottom: 5px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  /* color: #bdbdbd; */
  line-height: 1.8;
  margin-bottom: 20px;
`;

const QnASection = styled.div`
  margin: 20px 0;
`;

const Question = styled.h3`
  font-size: 1.3rem;
  color: var(--color-primary);
  margin: 15px 0;
  font-weight: 600;
`;

const Answer = styled.p`
  font-size: 1.1rem;
  /* color: #e0e0e0; */
  line-height: 1.8;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const EmailLink = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <Container className="navMargin">
      <Title>About Us</Title>
      <Paragraph>
        About Us chowluckclub.com is a digital platform and food website all about food and
        lifestyle with a focus on interesting cuisine, restaurant and hospitality-related lifestyle
        stories that will also give you a behind-the-scenes look. As former F&B entrepreneurs in the
        restaurant and hotel-linked businesses, chowluckclub.com was co-founded by Lincoln Tan and
        Bee Keng Koh and now has a team of dedicated foodies. Lincoln is also a senior journalist
        with the New Zealand Herald and Bee was a former educator and education marketing
        consultant. As a team, we hunt down the best eats and stories to inspire hungry bellies.
        Complementing the online food and lifestyle publication, we also run food-related events
        from walking food tours, menu launches, food festivals, and events that dive into unique
        food and cultural experiences. To bring you a more visual aspect to the food adventures, we
        have our channels on Facebook, TikTok, Instagram, and Xiaohongshu. Rather than being an
        online review site, where strangers are your food critics, chowluckclub.com is like a
        trusted friend with a proven palate to help you with food choices and hospitality
        experiences.
      </Paragraph>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  };
};

export default About;
