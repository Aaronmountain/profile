import { Fragment } from "react";
import type { AppProps } from "next/app";
import type { NextComponentType } from "next";
import global from "styles/globals.styles";
import reset from "styles/reset.styles";

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
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {global}
      </style>
    </Fragment>
  );
}

export default MyApp;
