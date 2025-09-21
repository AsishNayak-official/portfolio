// import Hacker from "@/components/hacker-section";

import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";

export default function Home() {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <main className="flex flex-col bg-black min-h-screen">
        <div
          role="img"
          className="text-white opacity-10 sm:text-9xl xs:text-8xl inline-block absolute rotate-90 right-0 md:top-52 xs:top-96"
        >
          DEV
        </div>
      </main>
    </>
  );
}
