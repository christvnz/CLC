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

const About = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const page = useContentfulLiveUpdates(props.page);
  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <Container className="navMargin">
        <Title>About Us</Title>
        <CtfRichText json={page.aboutUs.description.json} links={page.aboutUs.description?.links} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale, draftMode: preview }) => {
  const gqlClient = preview ? previewClient : client;
  try {
    const [landingPageData] = await Promise.all([
      gqlClient.pageLanding({ locale, preview }),
    ]);
    const page = landingPageData.pageLandingCollection?.items[0];

    return {
      revalidate: revalidateDuration,
      props: {
        previewActive: !!preview,
        ...(await getServerSideTranslations(locale)),
        page,
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
