import React from "react";
import type { NextPage } from "next";
import Layout from "components/Layout/Layout";
import Home from "containers/Home";

type PageProps = NextPage & { Layout: any };

const PageComponent: PageProps = () => {
  return <Home />;
};

PageComponent.Layout = Layout;

export default PageComponent;
