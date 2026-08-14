import Header from "@/components/modules/Header/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <>
      <Header />

      <section className="flex items-center justify-center flex-col mt-26 mb-23.75">
        <Image
          alt="Not Found"
          src={"/assets/images/not-found.png"}
          width={599}
          height={546}
          className="mb-4"
        />
        <p className="mb-6 text-2xl text-Primary_shade_7">
          صفحه مورد نظر شما یافت نشد!
        </p>
        <Link
          href={"/"}
          className="border border-primary rounded-xl text-primary py-3 px-4 text-lg"
        >
          بازگشت به صفحه اصلی
        </Link>
      </section>
    </>
  );
};

export default NotFound;
