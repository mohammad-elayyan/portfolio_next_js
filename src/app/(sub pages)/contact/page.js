"use client";
import React from "react";
import Image from "next/image";
import Form from "@/components/contact/Form";
import ItemLayout from "@/components/about/ItemLayout";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Image
        className="w-full h-full -z-50 fixed top-0 left-0 object-cover object-center opacity-25"
        src={"/background/contact-background.png"}
        alt="background"
        layout="responsive"
        width={1200}
        height={800}
        priority
        sizes="100vw"
      />

      <article className="relative w-full flex flex-col items-center justify-center sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:*:w-3/4">
          <h1 className="text-4xl font-semibold text-accent text-center capitalize">
            Contact me
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Contact me for any questions or collaborations and I will back to
            you as soon as posible.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-8 md:gap-6 lg:gap-4 w-full justify-items-center">
          <ItemLayout className="col-span-full md:col-span-5 !p-0 h-72 flex flex-col w-full">
            <h1 className="text-accent text-2xl md:text-3xl capitalize">
              contact info
            </h1>

            <div className="flex flex-col gap-6">
              <div className="flex items-start justify-center space-y-4  gap-2 hover:text-accent">
                <h2 className="text-lg md:text-2lg text-left capitalize">
                  <Mail className="w-full h-auto" strokeWidth={1.5} />
                </h2>
                <p className=" font-light text-left w-full text-xs sm:text-md md:text-base !mt-0">
                  moh.elayyan.98@gmail.com
                </p>
              </div>
              <div className="flex items-center justify-center space-y-4 gap-2 hover:text-accent text-left">
                <h2 className="text-lg md:text-2lg text-left capitalize">
                  <Phone className="w-full h-auto" strokeWidth={1.5} />
                </h2>
                <p className="font-light text-left w-full text-xs sm:text-md md:text-base !mt-0">
                  +962 79 094 2430
                </p>
              </div>
              <div className="flex items-center justify-center space-y-4 gap-2 hover:text-accent">
                <h2 className="text-lg md:text-2lg text-left capitalize">
                  <MapPin className="w-full h-auto" strokeWidth={1.5} />
                </h2>
                <p className="font-light text-left w-full text-xs sm:text-md md:text-base !mt-0">
                  Amman - Jordan
                </p>
              </div>
            </div>
          </ItemLayout>
          <Form className="col-span-full md:col-span-6 !p-0" />
        </div>
      </article>
    </>
  );
};

export default Contact;
