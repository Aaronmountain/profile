import React from "react";
import type { NextPage } from "next";
import Layout from "components/Layout/Layout";
import Profile from "containers/Profile";

type PageProps = NextPage & { Layout: any };

const PageComponent: PageProps = () => {
  return <Profile />;
};

PageComponent.Layout = Layout;

export default PageComponent;
