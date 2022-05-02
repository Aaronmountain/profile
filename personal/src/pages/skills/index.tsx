import React from "react";
import type { NextPage } from "next";
import Layout from "components/Layout/Layout";
import Skills from "containers/Skills";

type PageProps = NextPage & { Layout: any };

const PageComponent: PageProps = () => {
  return <Skills />;
};

PageComponent.Layout = Layout;

export default PageComponent;
