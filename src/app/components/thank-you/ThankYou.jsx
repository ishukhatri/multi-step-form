import React from "react";
import Image from "next/image";

const ThankYou = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <Image src={"/assets/images/icon-thank-you.svg"} width={40} height={40} />
      <div className="flex flex-col gap-2">
        <p className="text-center text-theme-denim text-2xl font-bold">
          Thank you!
        </p>
        <p className="text-center text-theme-grey text-base font-normal leading-[25px]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
