"use client";
import React from "react";
import Image from "next/image";
import { projectsData } from "@/app/data";
import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
// import Staff from "@/components/models/Staff";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Image
        className="w-full h-full -z-50 fixed top-0 left-0  object-cover object-center opacity-25"
        src={"/background/projects-background.png"}
        alt="background"
        layout="responsive"
        width={1200}
        height={800}
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 left-1/2 lg:-left-24 -translate-x-1/2 lg:translate-x-0 -z-10 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
};

export default Home;
