import { GetStaticProps } from 'next';
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';

import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

import styled from 'styled-components';

const Container = styled.div`
  background-color: #000;

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
        Chowluckclub.com is a digital platform and food website all about food with a focus on
        interesting cuisine, restaurant and hospitality-related lifestyle stories that will also
        give you a behind-the-scenes look.
      </Paragraph>
      <Paragraph>
        As former F&B entrepreneurs in the restaurant and hotel-linked businesses, Chowluckclub.com
        was co-founded by Lincoln Tan and Bee Keng Koh and now has a team of dedicated foodies.
        Lincoln is also a senior journalist with the New Zealand Herald and Bee was a former
        educator and education consultant.
      </Paragraph>
      <Paragraph>
        As a team, we hunt down the best eats and stories to inspire hungry bellies.
      </Paragraph>
      <Paragraph>
        Complementing the online food and lifestyle publication, we also run food-related events
        from walking food tours, menu launches, food festivals, and events that dive into unique
        food and cultural experiences.
      </Paragraph>
      <Paragraph>
        To bring you a more visual aspect to the food adventures, we have our channels on Facebook,
        TikTok, Instagram, and Xiaohongshu.
      </Paragraph>
      <Paragraph>
        Rather than being an online review site, where strangers are your food critics,
        Chowluckclub.com is like a trusted friend with a proven palate to help you with food choices
        and hospitality experiences.
      </Paragraph>

      <SectionTitle>Our Policy on Sponsorship, Collaboration, and Advertising</SectionTitle>

      <QnASection>
        <Question>
          Can a restaurant invite Chowluckclub.com team for food tasting or give a media gift in
          exchange for a feature write-up?
        </Question>
        <Answer>
          A write-up or social posting will only be done if we deem it interesting enough. Free
          sponsorship of meals, products, or event invitation does not automatically guarantee a
          write-up, although we will try our best. However, if the food or experience is really bad,
          it will not be published and we will instead provide feedback and advise the owners. A
          restaurant cannot expect a raving review just because they gave us a freebie.
        </Answer>
      </QnASection>

      <QnASection>
        <Question>Can a featured company tell Chowluckclub what to say in the article?</Question>
        <Answer>
          Our editorial policy is that articles are based on our independent voice and choice and
          will not be subject to any business’s editing or direction. Only if the facts are wrong
          will we make correction edits, but we will not be obliged to external requests.
        </Answer>
      </QnASection>
      <QnASection>
        <Question>Can we pay Chowluckclub.com to write an article about us?</Question>
        <Answer>
          In general, articles on the publication are from meals and experiences that have been paid
          out of our own budget or through media invites. However, to sustain the operations, we
          also do paid-for advertorials to support our writers. These paid-for articles will be
          specifically indicated as sponsorship/partnership advertorials. However, our editorial
          standards will still need to be upheld.
        </Answer>
      </QnASection>

      <QnASection>
        <Question>
          Can we trust Chowluckclub.com of not being biased when you’re receiving sponsored meals?
        </Question>
        <Answer>
          Credibility is most important to Chowluckclub. Articles are written as honestly as
          possible from the perspectives of our writers, and we will not have ratings or any
          overhyped recommendations. Whether a meal is paid-for or sponsored will not affect what we
          say. As mentioned above, our team of writers are more like a sharing from trusted friends
          with proven palates. Our site will also not contain ratings.
        </Answer>
      </QnASection>

      <QnASection>
        <Question>How do I get Chowluckclub.com to do paid advertorials?</Question>
        <Answer>
          For paid advertorial campaigns, interested parties can contact our marketing team via
          email. Note that payment for these will have to be in cash and not food vouchers. Also
          kindly note that Chowluckclub.com maintains our right to reject would-be clients deemed to
          be detrimental to readers and our members.
        </Answer>
      </QnASection>

      <QnASection>
        <Question>
          How much lead time do we need to give Chowluckclub.com to publish an article?
        </Question>
        <Answer>
          The publishing lead time for articles is two weeks, but this is subject to the editor’s
          discretion and how urgent the promotion is.
        </Answer>
      </QnASection>

      <QnASection>
        <Question>What kind of promotions can we do with Chowluckclub.com?</Question>
        <Answer>
          From Giveaways to hosting, many options can be further explored if you contact our
          business team.
        </Answer>
      </QnASection>

      <Paragraph>
        If you are interested to collaborate, email{' '}
        <EmailLink href="mailto:bee@chowluckclub.com">bee@chowluckclub.com</EmailLink>
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
