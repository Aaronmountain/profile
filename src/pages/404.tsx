import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

type PageProps = NextPage;

const PageComponent: PageProps = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      router.replace("/home");
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-6xl text-red-600">
        This Page is not found
        <br />
        <span className="block w-full text-center text-3xl mt-4 font-bold underline underline-offset-8">
          will redirect to home page
        </span>
      </div>
    </div>
  );
};

export default PageComponent;
