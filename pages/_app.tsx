import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>NFT Mint Verification Eligible Gitshock Chain</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="An NFT Verification For Gitshock Chain is a person who is responsible for verifying the authenticity of digital images that are being turned into NFTs (Non-Fungible Tokens). This may involve verifying that the image is original and has not been previously used or sold, and ensuring that it meets any other standards set by the NFT marketplace or platform. "
        />
        <meta
          name="keywords"
          content="Thirdweb, thirdweb Edition drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
