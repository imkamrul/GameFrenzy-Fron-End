import PublicLayout from "@/components/Layout/Public/PublicLayout";
import Head from "next/head";

import "../styles/globals.css";
const layoutList = {
  PublicLayout: PublicLayout,
};

export default function App({ Component, pageProps }) {
  console.log("Component.layout :", Component.layout);
  const Layout = layoutList[Component.layout] || PublicLayout;

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="GameVault is your ultimate destination for the latest video games and accessories. Discover the hottest titles across all gaming platforms, including PlayStation, Xbox, Nintendo, and PC. Browse our extensive selection of games, consoles, controllers, and gaming accessories, and get them delivered straight to your doorstep. Shop now and level up your gaming experience with GameVault."
        />
        <meta
          name="keywords"
          content="video games, gaming, consoles, PlayStation, Xbox, Nintendo, PC games, gaming accessories"
        />
        <title>GameVault - Your Ultimate Gaming Destination</title>
      </Head>

      {/* <Provider store={store}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </Provider> */}
    </>
  );
}
