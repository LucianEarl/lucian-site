"use client";
import Head from "next/head";
// import Image from "next/image";
// import TextBox from "./components/TextBox";
import Category from "./components/Category";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // always start at top of page

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="flex min-h-screen flex-col items-center  bg-[#223C25]">
        <h1 className="bg-gradient-to-r from-l-pink via-mid-pink to-l-pink text-transparent bg-300% bg-clip-text italic font-extrabold text-6xl md:text-9xl mt-4 text-center mb-9 animate-shiny">
          LUCIAN
        </h1>
        <h2 className="text-[#96E072] text-4xl md:text-5xl mb-9">
          Welcome to my little website
        </h2>
        <div className="rounded-full overflow-hidden mb-9 opacity-75">
          {/* <Image src="/faceBW.png" width="384" height="384" alt="My face" /> */}
          <video
            src="/myeyes.webm"
            width="384"
            // height="100"
            type="video/webm"
            autoPlay
            loop
            muted
          />
        </div>
        {/* <div className="flex flex-col md:flex-row justify-between md:w-4/5">
          <TextBox
            title="Who am I?"
            text="I’m some guy in Christchruch. Sometimes I make websites and other stuff."
          />
          <TextBox
            title="What else?"
            text="80s music, dinosaur trivia and a bad sense of humour."
          />
        </div> */}
        <div className="w-full">
          <Category
            name="Who am I?"
            title="I'm the guy"
            text="I’m some guy in Christchurch. Sometimes I make websites and other stuff."
          />
          <Category
            name="Web Development"
            title="My skills in dev work:"
            text="I’m some guy in Christchruch. Sometimes I make websites and other stuff."
          />
          <Category
            name="Past work"
            title="Websites I've made before:"
            text="I’m some guy in Christchruch. Sometimes I make websites and other stuff."
          />
          <Category
            name="Qualifications"
            title="Formal qualifications I hold"
            text="I’m some guy in Christchruch. Sometimes I make websites and other stuff."
          />
          <Category
            name="Experience"
            title="My career so far"
            text="I’m some guy in Christchruch. Sometimes I make websites and other stuff."
          />
        </div>
      </main>
    </>
  );
}
