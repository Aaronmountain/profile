import React from "react";
import type { NextPage } from "next";
import Layout from "components/Layout/Layout";
import Projects from "containers/Projects";

type PageProps = NextPage & { Layout: any };

const PageComponent: PageProps = () => {
  return <Projects />;
};

PageComponent.Layout = Layout;

export default PageComponent;
