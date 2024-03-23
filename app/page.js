import Image from "next/image";
import Hero from "./_components/Hero";
import SearchPhysiotherapists from "./_components/SearchPhysiotherapists";

export default function Home() {
  return (
    <main>
      {/*Hero Section*/}
      <Hero />
      {/*Search Section*/}
      <SearchPhysiotherapists />
    </main>
  );
}
