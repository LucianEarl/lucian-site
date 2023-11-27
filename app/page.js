"use client";
import Head from "next/head";
import Link from "next/link";
import Category from "./components/Category";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // always start at top of page

  let eyesVid = (
    <div className="rounded-full overflow-hidden mb-9 opacity-75">
      <video
        src="/myeyes.webm"
        // width="50%"
        type="video/webm"
        autoPlay
        loop
        muted
      />
    </div>
  );

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
        <h1 className="bg-gradient-to-r from-l-pink via-mid-pink to-l-pink text-transparent bg-300% bg-clip-text italic font-extrabold text-6xl md:text-9xl mt-4 md:mt-32 text-center mb-9 pt-12 md:pt-0 md:mb-12 animate-shiny">
          Lucian Earl
        </h1>
        <h2 className="text-[#96E072] text-4xl md:text-5xl mb-32 px-12">
          Welcome to my little website
        </h2>
        {/* <div className="rounded-full overflow-hidden mb-9 opacity-75">
          <Image src="/faceBW.png" width="384" height="384" alt="My face" />
        </div> */}

        <div className="w-full mt-9">
          <Category
            name="Who am I?"
            title="I'm the guy"
            text="I’m some guy in Christchurch. Sometimes I make websites and other stuff."
            decoration={eyesVid}
          />
          <Category
            name="Skill set"
            title="My skills are primarily in web dev work, but I pride myself on being a quick learner of anything"
            text={
              <ul>
                <li>React - Native, NextJS</li>
                <li>Python</li>
                <li>SQL</li>
                <li>JavaScript</li>
                <li>APIs</li>
              </ul>
            }
          />
          <Category
            name="Past work"
            title="Websites I've made before:"
            text={
              <ul>
                <li>
                  <a href="https://www.carbonlinked.com/">Carbon Linked</a>
                </li>
                <li>
                  <a href="https://www.clothnz.co.nz/">
                    Cloth Commercial Textiles
                  </a>
                </li>
              </ul>
            }
          />
          <Category
            name="Qualifications"
            title="Formal qualifications I hold"
            text={
              <>
                NZ Diploma in Software Development
                <br />
                Whiteliffe College
                <br />
                2019 - 2021. <br />
                <br />
                Bachelor's in Biological Science (Endorsement in Ecology)
                <br />
                University of Canterbury
                <br />
                2015 - 2018.
              </>
            }
          />
          <Category
            name="Experience"
            title="My career so far"
            text={
              <>
                Daisy Lake
                <br />
                Together with a friend, we founded and ran the company Daisy
                Lake for a few months while we were studying. During which, we
                designed and developed a few websites for clients
                <br />
                2020 - 2021. <br />
                <br />
                Worldline NZ
                <br />
                Worked as Connex System Operator for Worldline NZ, providing
                24/7 monitoring of the NonStop system.
                <br />
                2021-present
              </>
            }
            // text="Together with a friend, we founded and ran the company Daisy Lake Ltd. for a few months. During which, we designed and developed a few websites for clients"
          />
        </div>
      </main>
    </>
  );
}
