import { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

type PageProps = NextPage;

const Index: PageProps = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Index;
