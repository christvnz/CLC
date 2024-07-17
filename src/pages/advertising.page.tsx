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
      <Title>Advertising & Partnership</Title>
      <Paragraph>
        <div>
          <p>What can we do for you?</p>
          <ul className="mt-3">
            <li>Increase your business</li>
            <li>Find your niche</li>
            <li>Create brand awareness</li>
            <li>Content marketing</li>
          </ul>
          <p>
            We work with you to grow your business and tell your stories. Your goal is our goal.
          </p>
        </div>
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
