import { GetStaticProps } from 'next';
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

const ErrorPage404 = () => {
  const { t } = useTranslation();

  return <Container>this page will be about you and me</Container>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  };
};

export default ErrorPage404;
