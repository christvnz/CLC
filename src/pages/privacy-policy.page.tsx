import { NextSeo } from 'next-seo';

const Page = () => {
  return (
    <div className="text-gray-200 navMargin mx-auto mb-12 max-w-3xl rounded-xl p-6 font-sans shadow-lg md:p-8">
      <NextSeo title="Privacy Policy" />
      <header className="mb-8">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24">
            <img
              src="/image1.png"
              alt="ChowLuckCard Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-primary mb-2 text-center text-3xl font-bold md:text-4xl">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-center">Last updated: April 2025</p>
      </header>

      <div className="space-y-6">
        <p className="leading-relaxed">
          This privacy policy is applicable to the ChowLuckCard app (hereinafter referred to as
            &quot;Application&quot;) for mobile devices, which was developed by Chow Luck Club (hereinafter
          referred to as &quot;Service Provider&quot;) as a Free service. This service is provided &quot;AS IS&quot;.
        </p>

        <section className="space-y-3">
          <h2 className="text-primary text-2xl font-semibold">
            What information does the Application obtain and how is it used?
          </h2>

          <h3 className="mt-4 text-xl font-medium">User Provided Information</h3>
          <p className="leading-relaxed">
            The Application acquires the information you supply when you download and register the
            Application. Registration with the Service Provider is not mandatory. However, bear in
            mind that you might not be able to utilize some of the features offered by the
            Application unless you register with them.
          </p>
          <p className="leading-relaxed">
            The Service Provider may also use the information you provided them to contact you from
            time to time to provide you with important information, required notices and marketing
            promotions.
          </p>

          <h3 className="mt-4 text-xl font-medium">Automatically Collected Information</h3>
          <p className="leading-relaxed">
            The Application may collect certain information automatically, including, but not
            limited to, the type of mobile device you use, your mobile device&quot;s unique device ID,
            the IP address of your mobile device, your mobile operating system, the type of mobile
            Internet browsers you use, and information about the way you use the Application.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-primary text-2xl font-semibold">
            Does the Application collect precise real time location information of the device?
          </h2>
          <p className="leading-relaxed">
            This Application does not gather precise information about the location of your mobile
            device.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-primary text-2xl font-semibold">
            Do third parties see and/or have access to information obtained by the Application?
          </h2>
          <p className="leading-relaxed">
            Only aggregated, anonymized data is periodically transmitted to external services to aid
            the Service Provider in improving the Application and their service. The Service
            Provider may share your information with third parties in the ways that are described in
            this privacy statement.
          </p>
          <p className="leading-relaxed">
            Please note that the Application utilizes third-party services that have their own
            Privacy Policy about handling data. Below are the links to the Privacy Policy of the
            third-party service providers used by the Application:
          </p>
          <ul className="list-disc space-y-1 pl-10">
            <li>Google Play Services</li>
          </ul>
          <p className="leading-relaxed">
            The Service Provider may disclose User Provided and Automatically Collected Information:
          </p>
          <ul className="list-disc space-y-1 pl-10">
            <li>
              as required by law, such as to comply with a subpoena, or similar legal process;
            </li>
            <li>
              when they believe in good faith that disclosure is necessary to protect their rights,
              protect your safety or the safety of others, investigate fraud, or respond to a
              government request;
            </li>
            <li>
              with their trusted services providers who work on their behalf, do not have an
              independent use of the information disclosed to them, and have agreed to adhere to the
              rules set forth in this privacy statement.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-primary text-2xl font-semibold">What are my opt-out rights?</h2>
          <p className="leading-relaxed">
            You can halt all collection of information by the Application easily by uninstalling the
            Application. You may use the standard uninstall processes as may be available as part of
            your mobile device or via the mobile application marketplace or network.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-primary text-2xl font-semibold">
            Data Retention Policy, Managing Your Information
          </h2>
          <p className="leading-relaxed">
            The Service Provider will retain User Provided data for as long as you use the
            Application and for a reasonable time thereafter. The Service Provider will retain
            Automatically Collected information for up to 24 months and thereafter may store it in
            aggregate. If you&quot;d like the Service Provider to delete User Provided Data that you have
            provided via the Application, please contact them at{' '}
            <a
              href="mailto:app@chowluckclub.com"
              className="text-primary hover:underline">
              app@chowluckclub.com
            </a>{' '}
            and we will respond in a reasonable time. Please note that some or all of the User
            Provided Data may be required in order for the Application to function properly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-primary text-2xl font-semibold">Children</h2>
          <p className="leading-relaxed">
            The Service Provider does not use the Application to knowingly solicit data from or
            market to children under the age of 13. If the Service Provider discovers that a child
            under 13 has provided personal information, they will immediately delete this from their
            servers. If you are a parent or guardian and you are aware that your child has provided
            personal information, please contact the Service Provider at{' '}
            <a
              href="mailto:app@chowluckclub.com"
              className="text-primary hover:underline">
              app@chowluckclub.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-primary text-2xl font-semibold">Security</h2>
          <p className="leading-relaxed">
            The Service Provider is concerned about safeguarding the confidentiality of your
            information. They provide physical, electronic, and procedural safeguards to protect
            information they process and maintain. Although efforts are made to provide reasonable
            security for information, no security system can prevent all potential security
            breaches.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-primary text-2xl font-semibold">Changes</h2>
          <p className="leading-relaxed">
            This Privacy Policy may be updated from time to time for any reason. The Service
            Provider will notify you of any changes to the Privacy Policy by updating this page with
            the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any
            changes, as continued use is deemed approval of all changes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-primary text-2xl font-semibold">Your Consent</h2>
          <p className="leading-relaxed">
            By using the Application, you are giving your consent to the Service Provider&quot;s
            processing of your information as set forth in this Privacy Policy now and as amended.
            &quot;Processing&quot; means using cookies on a computer/handheld device or using or touching
            information in any way, including, but not limited to, collecting, storing, deleting,
            using, combining, and disclosing information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-primary text-2xl font-semibold">Contact us</h2>
          <p className="leading-relaxed">
            If you have any questions regarding privacy while using the Application, or have
            questions about the practices, please contact the Service Provider via email at
            <a
              href="mailto:app@chowluckclub.com"
              className="text-primary hover:underline">
              app@chowluckclub.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
