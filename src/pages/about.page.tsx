import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { client, previewClient } from '@src/lib/client';

import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

import styled from 'styled-components';
import { revalidateDuration } from './utils/constants';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { SeoFields } from '@src/components/features/seo';
import { CtfRichText } from '@src/components/features/contentful';

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

const About = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const page = useContentfulLiveUpdates(props.page);
  const aboutUs = useContentfulLiveUpdates(props.aboutUs);

  console.log(aboutUs);
  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <Container className="navMargin">
        <Title>About Us</Title>
        <CtfRichText json={aboutUs?.content?.json} links={aboutUs?.content?.links} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale, draftMode: preview }) => {
    const gqlClient = preview ? previewClient : client;
    try {
        const [galleryPageData, landingPageData] = await Promise.all([
            gqlClient.aboutUs({ locale, preview }),
            gqlClient.pageLanding({ locale, preview }),
        ]);
        const page = landingPageData.pageLandingCollection?.items[0];
        const aboutUs = galleryPageData.pageAboutUsCollection?.items[0]

        if (!aboutUs) {
            return {
                revalidate: revalidateDuration,
                notFound: true,
            };
        }

        return {
            revalidate: revalidateDuration,
            props: {
                previewActive: !!preview,
                ...(await getServerSideTranslations(locale)),
                page,
                aboutUs
            },
        };
    } catch {
        return {
            revalidate: revalidateDuration,
            notFound: true,
        };
    }
};

export default About;
