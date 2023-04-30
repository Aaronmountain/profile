import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Layout from "components/Layout/Layout";

type PageProps = NextPage & { Layout: any };

const PageComponent: PageProps = () => {
  return (
    <div className="w-full h-screen bg-[url('../../public/home/background.jpg')] bg-cover">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-5xl text-white font-semibold mb-6">
          WelCome To My Website
        </h2>
        <Link
          href="/projects"
          prefetch
          className="group w-[80%] p-5 border-4 border-white border-solid rounded-full relative before:absolute before:left-0 before:top-0 before:rounded-full before:bg-violet-600 before:w-0 before:h-full before:transition-all before:duration-500 before:ease-linear hover:before:w-full"
        >
          <span className="text-purple-600 absolute left-[50%] top-[50%] translate-x-[-50%]  translate-y-[-50%] font-bold group-hover:text-white  group-hover:transition-all group-hover:ease-linear group-hover:delay-300">
            Next Page
          </span>
        </Link>
      </div>
    </div>
  );
};

PageComponent.Layout = Layout;

export default PageComponent;
