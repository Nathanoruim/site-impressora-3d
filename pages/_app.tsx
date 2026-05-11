import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PrintLab — Hub de Impressão 3D</title>

        <meta
          name="description"
          content="Plataforma focada em testes, calibração e organização de arquivos STL para impressão 3D."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}