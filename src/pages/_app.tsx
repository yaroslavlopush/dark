import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from '../components/Header/Header';


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
