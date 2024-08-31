"use client";
import React from "react";
import Image from "next/image";
import Form from "@/components/contact/Form";

const Contact = () => {
  return (
    <>
      <Image
        className="w-full h-full -z-50 fixed top-0 left-0  object-cover object-center opacity-25"
        src={"/background/contact-background.png"}
        alt="background"
        layout="responsive"
        width={1200}
        height={800}
      />

      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="text-4xl font-semibold text-accent text-center capitalize">
            summon the wizard
          </h1>
          <p class className="text-center font-light">
            summon the wizard summon the wizard summon the wizard summon the
            wizard summon the wizard summon the wizard
          </p>
        </div>

        <Form />
      </article>
    </>
  );
};

export default Contact;
