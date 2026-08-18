import Header from "@/components/modules/Header/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <>
      <Header />

      <section className="flex items-center justify-center flex-col mt-22.75 md:mt-26 mb-23.75 container">
        <Image
          alt="Not Found"
          src={"/assets/images/not-found.png"}
          width={599}
          height={546}
          className="mb-4"
        />
        <p className="mb-6 text-lg md:text-2xl text-Primary_shade_7">
          صفحه مورد نظر شما یافت نشد!
        </p>
        <Link
          href={"/"}
          className="border border-primary rounded-xl text-primary px-3 md:px-4 py-[5.5px] md:py-3 text-base md:text-lg"
        >
          بازگشت به صفحه اصلی
        </Link>
      </section>
    </>
  );
};

export default NotFound;
