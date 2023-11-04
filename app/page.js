import Head from 'next/head'
import Image from "next/image";
import TextBox from "./components/TextBox";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="flex min-h-screen flex-col items-center p-12 bg-[#223C25]">
        <h1 className="text-[#E982A2] italic font-extrabold text-6xl md:text-8xl mt-4 text-center mb-9">
          Lucian Earl
        </h1>
        <h2 className="text-[#96E072] text-4xl md:text-5xl mb-9">
          Welcome to my silly little website
        </h2>
        <div className="rounded-full overflow-hidden opacity-75 mb-9">
          <Image src="/faceBW.png" width="384" height="384" alt="My face" />
        </div>
        <div className="flex flex-col md:flex-row justify-between md:w-4/5">
          <TextBox
            title="Who am I?"
            text="I’m some guy, raised on an eclectic diet of eighties music and dinosaur trivia in rural Canterbury. I also make websites and sometimes other stuff."
          />
          <TextBox title="What am I?" text="Looking for my next adventure" />
        </div>
      </main>
    </>
  );
}
