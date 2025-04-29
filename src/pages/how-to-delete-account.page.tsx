import { Container } from "@src/components/shared/container";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-xl shadow-lg text-gray-200 font-sans mb-12 navMargin">
      <NextSeo 
        title="How to Delete Your ChowLuckCard Account"
      />
      <div className="mb-6 flex justify-center">
        <div className="h-48 w-48 md:h-60 md:w-60">
          <img
            src="/image1.png"
            alt="ChowLuckCard Logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <h1 className="mb-4 text-center text-4xl font-bold md:text-5xl">ChowLuckCard</h1>

      <h2 className="text-gray-600 mb-8 text-center text-xl font-medium">
        How to Delete Your ChowLuckCard Account
      </h2>

      <div className="space-y-6">
        <p className="text-base">
          If you wish to delete your ChowLuckCard account, please follow the steps below:
        </p>

        <div>
          <h3 className="text-gray-500 mb-3 text-lg font-bold">Option 1: In-app Deletion</h3>
          <ul className="list-disc space-y-2 pl-10">
            <li>Open the ChowLuckCard app.</li>
            <li>
              Navigate to <span className="font-bold">My Profile</span> &gt;{' '}
              <span className="font-bold">Delete Account</span>.
            </li>
            <li>
              Tap on <span className="font-bold">Delete Account</span>.
            </li>
            <li>Confirm your deletion request.</li>
          </ul>
          <p className="mt-4">
            This will permanently delete your account and all associated data from our servers.
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 mb-3 text-lg font-bold">Option 2: Request via Email</h3>
          <p>
            If you cannot access the app, email us at{' '}
            <span className="font-bold"><a href="mailto:app@chowluckcard.com">app@chowluckcard.com</a></span> with the subject:
            <span className="italic">&quot;Account Deletion Request&quot;</span>. Include your registered
            email ID in the message. Your account will be deleted within 7 working days.
          </p>
        </div>

        <p>
          For more information, view our
          <a href="#" className="text-blue-600 underline ml-2">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Page;
