import Images from "@/components/Sections/dummy/imges";
import HomePageHero from "@/components/Sections/HomePage/HomePageHero";
import imgedata from "../data/imges.json";
export default function Home() {
  return (
    <>
      <HomePageHero />
      {false && (
        <div className="">
          <Images content={imgedata} />
        </div>
      )}
    </>
  );
}

Home.layout = "PublicLayout";
