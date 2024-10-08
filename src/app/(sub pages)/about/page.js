"use client";
import React from "react";
import Image from "next/image";
import { projectsData } from "@/app/data";
import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
// import Hat from "@/components/models/Hat";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const Hat = dynamic(() => import("@/components/models/Hat"), { ssr: false });

const About = () => {
  return (
    <>
      <Image
        className="w-full h-full -z-50 fixed top-0 left-0  object-cover object-center opacity-25"
        src={"/background/about-background.png"}
        alt="background"
        layout="responsive"
        width={1200}
        height={800}
        priority
        sizes="100vw"
      />

      <div className="w-full h-3/5 xs:3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center top-8">
        <div className="flex flex-col items-center text-center absolute top-1/2 sm:top-[60%] left-1/2  -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent text-nowrap">
            Mohammad Elayyan
          </h1>
          <p className="font-light text-foreground text-base mt-3">
            Meet the dev behind this portfolio
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
};

export default About;
