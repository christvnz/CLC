import { Container } from "@src/components/shared/container";
import { NextSeo } from "next-seo";
import Link from "next/link";

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
        Account Deletion Request
      </h2>

      <div className="space-y-6">
        <p className="text-base">
        We respect your privacy and give you control over your data. If you no longer wish to use our services, you can delete your account and all associated data at any time.
        </p>

        <div>
          <h3 className="font-bold">How to Delete Your Account</h3>
          <p className="text-base my-2">
            To Delete your account directly from the app, follow these steps:
          </p>
          <ul className="list-disc space-y-2 pl-10">
            <li>Open the app.</li>
            <li>
              Go to <span className="font-bold">Profile</span>.
            </li>
            <li>
              Select  <span className="font-bold">Delete Account</span>.
            </li>
            <li>Confirm the deletion when prompted.</li>
          </ul>
          <p className="mt-4">
            <span className="font-bold">Note:</span>This action is permanent and cannot be undone.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Need Help ?</h3>
          <p>
            If you are unable to access the app or need assistance, you can request account. deletion manually by contacting us:
          </p>
          <p className="my-2">
            <a href="mailto:info@chowluckclub.com">
              info@chowluckclub.com
            </a>
          </p>
          <p>
          Please include your registered email address or account ID so we can verify your identity and process the deletion request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
