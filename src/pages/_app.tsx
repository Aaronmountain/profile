import { Fragment } from "react";
import type { AppProps } from "next/app";
import type { NextComponentType } from "next";
import "styles/globals.css";

type Props = AppProps & {
  Component: NextComponentType & { Layout: any };
};

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component?.Layout ? Component.Layout : Fragment;

  return (
    <Fragment>
      <Fragment>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Fragment>
    </Fragment>
  );
}

export default MyApp;
