import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Error from "containers/404";

type PageProps = NextPage;

const PageComponent: PageProps = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 1000);

    return () => {
      if (timer) clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Error />;
};

export default PageComponent;
