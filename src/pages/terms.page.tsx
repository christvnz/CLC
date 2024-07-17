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
      <Title>T&Cs / Privacy Policy</Title>
      <Paragraph>
        1. GENERAL WEBSITE TERMS AND CONDITIONS 1. Acceptance: This website is owned and operated by
        Chow Luck Club ("CLC"). Your use of this website is subject to all applicable laws, these
        general terms and conditions, the privacy policy below and any additional terms of use
        indicated on this website (together, the "Terms"). By accessing and browsing chowluckcub.com
        ("our website"), you agree to be bound by the Terms. If you do not wish to be bound by the
        Terms, please do not use our websites. CLC may amend the Terms from time to time (see clause
        5 below). You agree to be bound by the Terms in effect at the time at which you access this
        website. 2. General Disclaimer: CLC makes every effort to ensure the information published
        on our website is up-to-date and accurate. However, we cannot guarantee the accuracy of our
        content at any one time. CLC does not accept any liability for any loss or damage which may
        directly or indirectly result from any advice, opinion, information, representation or
        omission, whether negligent or otherwise, contained on or accessed through our websites. 3.
        CLC is not an agent of any retailer or third party. If you buy products from the retailer’s
        own website, CLC will not be responsible to you in any way relating to those purchases or
        any transaction you may enter into through use of our website. 4. Additional terms: Some of
        the individual services, promotions, events and offers advertised on or through our websites
        are governed by CLC’s and third party suppliers’ additional terms of use (the "Additional
        Terms"). You accept, and agree to comply with, any Additional Terms (and CLC’s Additional
        Terms prevail if there is any inconsistency with these general terms and conditions). 5.
        Changes to Terms: These Terms may be amended at any time by CLC without specific notice to
        you. The latest Terms will be posted on our website, and you should review these Terms prior
        to using our website. 6. Limited duration and availability: Any events, offers and deals
        listed on our website may only be available for a limited time period (as indicated on the
        website) and are only available and redeemable in New Zealand by New Zealand residents and
        visitors in New Zealand (except where expressly stated otherwise). Such events, offers and
        deals are also subject to availability and change and are the sole responsibility of the
        relevant third party supplier, not CLC. In some instances, the events, offers and deals
        listed on our websites will be subject to strict age restrictions (e.g. R18 or R20),
        including but not limited to events, offers and deals for bars, restaurants, hotels and
        casinos and so only persons who meet the age restrictions are eligible for the aforesaid
        events, offers and deals. To apply for, or be entitled to, an event, offer or deal on our
        websites, you may need to register your details with CLC or the relevant third party
        supplier and/or apply for that event, offer or deal. You acknowledge that any events, offers
        and deals listed on our websites have not been successfully allocated to you unless and
        until this has been confirmed by CLC or the relevant third party supplier. 7. Change of
        Content: CLC reserves the right to make changes to the content of our website at any time
        without notice, excluding in the case of our member database where members change and update
        their own data from time to time. 8. Notice of Copyright: Material that you see on our
        websites or contained in emails sent to you by CLC (including email newsletters) may be
        protected by copyright or trademark, patent or other protections (“the Rights”), even if it
        is not stated to be. You may not download, copy, reprint, distribute or otherwise publish
        information, graphics or images from our websites without the express permission of the
        owner of the Rights. CLC is not responsible for damage (including damage caused by viruses)
        to your computer or software or any losses suffered by you as a result of downloading,
        installing or using the material. 9. Price and GST: Unless expressly stated otherwise, all
        references to price on our websites are in New Zealand Dollars (NZD) and are subject to
        Goods and Services Tax (GST), where applicable. 10. No responsibility: Although CLC
        endeavours to ensure that the third party events, offers and deals on chowluckclub.com are
        genuine, CLC does not necessarily sponsor, guarantee or approve of any of the events, offers
        or deals advertised or promoted on this website and, to the extent permitted by law, accepts
        no responsibility or liability for the events, offers or deals whatsoever. Admission to some
        events, or redemption of some offers or deals, may require the purchase of tickets or
        advanced booking, which are subject to availability and Additional Terms. 11. Accuracy: CLC
        endeavours to ensure the information and data published on our website, including but not
        limited to publications or information and data, is up-to-date and accurate. However, we
        cannot guarantee the accuracy of our content at any one time or that our website (or emails
        sent from CLC) will be error free, free of any viruses or compatible with any other software
        or material. CLC does not accept any liability (to the extent permitted by law), for any
        loss or damage which may directly or indirectly result from any advice, opinion,
        information, representation or omission, whether negligent or otherwise, contained on or
        accessed through our website or any emails or electronic alerts sent to you by CLC
        (including but not limited to email newsletters). 12. Inaccuracies: If you want to amend the
        information we hold or correct any inaccuracies that have been published on our websites or
        sent via email, you may do so by sending an email to info@chowluckclub.com. 13. Links: Our
        website may contain links to other sites. CLC accepts no responsibility or liability in
        relation to content, accuracy or opinions expressed in these sites. Inclusion of any linked
        website on our website does not imply approval or endorsement of the linked website by us.
        If you decide to leave our website and access these third party sites, you do so at your own
        risk. 14. No interference: When using our website, you agree not to do anything that may
        cause CLC undue inconvenience, disruption or offense, or that may affect the security or
        operation of our websites, any services offered via our website or any network or system
        underlying or connected to them (including without limitation, by using a robot, spider,
        scraper or other automated means to access this website or feature on it for any purpose).
        CLC reserves the right to terminate your use of our website for any reason whatsoever (in
        its sole discretion, acting reasonably). You agree to indemnify CLC against the consequences
        of any breach of these Terms. 2. PRIVACY POLICY 1. Your consent: By using our website and
        signing up to email newsletter/s, offer alerts or other alerts and/or using CLC’s services,
        you consent to our collection, use, disclosure, and processing of your personal information
        as described in this privacy policy. 2. If we change our privacy policies and procedures, we
        will post those changes on our website to keep you aware of what information we collect, how
        we use it and under what circumstances we may disclose it. 3. Cookies and web tags: Cookies
        are small bits of data that are deposited on a user's browser. Our website utilises cookies,
        IP addresses and other interactive techniques such as web tags to collect information on how
        you use our website for specific functions, including running analytics and targeting
        messaging on social media. The cookies and tags we use do not collect personally
        identifiable information, and we do not use them to determine your identity. Cookies permit
        users to store their password and other user information without having to constantly
        re-enter this data. Cookies also permit us to tailor our website to your needs. Most
        browsers permit users to decline to accept cookies, although the default setting is
        typically to accept them. You may choose to decline the cookies, but refusing cookies may
        limit your ability to use our websites in their entirety. 4. Information collection: If you
        do nothing during your visit but browse through our websites and read the information
        contained on the web pages, then we may gather certain information about your visit
        automatically. This information does not identify you personally. We may automatically
        gather the internet domain (for example, "companyx.co.nz" if you use a private internet
        access account, or "myschool.ac.nz" if you connect from a university's domain), IP address
        (an IP address is a number that is automatically assigned to your computer whenever you are
        surfing the web) from which you access our website, and the date and time you access our
        website and the pages you visit. This information is used in statistical and aggregate
        formats to assess the effectiveness of and improve our websites and CLC’s services, to
        determine our visitors’ preferences and interests, and to help us target messaging on social
        media. We may collect nonpublic personal information from you when you voluntarily provide
        personally identifiable information to us through our websites, such as when entering
        competitions or submitting a membership application. We limit use of such information to the
        purposes for which the information was provided and/or intended for. If you send an email
        that includes personally identifiable information, for example, in an email containing an
        inquiry, we will use that information to respond to your inquiry. Remember that email is not
        necessarily secure against interception. 5. Consumer member registration: To apply for, or
        be entitled to, an event, offer or deal on the consumer website (chowluckclub.com), you may
        be prompted to register as a member of the website. If you register as a member directly
        through the website, you will need to provide CLC with personal information such as your
        name and email address. If you register as a member through Facebook, you will be required
        to give permission to CLC to access your basic information (which includes your name,
        profile picture, gender, networks, user ID, list of friends, and any other information you
        have publicly shared). You will not be able to register as a member if you do not provide or
        allow CLC access to such personal information. 6. Newsletters: When you subscribe to either,
        or both of our newsletter mailing lists, your details become part of CLC's email newsletter
        mailing list. Being part of this list enables us to send you information about offers,
        events and the latest in dining and lifestyle. The information you have provided will remain
        confidential and will be used only for the purpose of communication, as well as for
        targeting our messaging on social media via de-identified means (eg using Audiences on
        Facebook). Once subscribed to these mailing lists, you may unsubscribe at any time. 7. Offer
        Alerts: When you subscribe to receive offer alerts, your details become part of the CLC's
        mailing list. Being part of this list enables us to send you information about CLC offers.
        Only CLC has rights to this mailing list and we will take all reasonable steps to ensure
        that your contact details remain confidential at all times. Once subscribed to this mailing
        list, you may unsubscribe at any time. 8. Access: You may ask to see the personal
        information that CLC holds about you at any time by contacting us or by viewing your details
        on your account page and or your member profile. You are entitled to ask CLC to correct,
        alter or delete any personal information that we hold about you by contacting us
        info@chowluckclub.com. 9. Competition: Any personal information collected as part of a
        competition or survey will be held by CLC in accordance with its obligations under the
        Privacy Act 2020 and will not be shared with third parties.
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
