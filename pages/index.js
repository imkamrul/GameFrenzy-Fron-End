import Images from "@/components/Sections/dummy/imges";
import HomePageHero from "@/components/Sections/HomePage/HomePageHero";
import homePage from "../data/homePage.json";
import imagedata from "../data/imges.json";
export default function Home({ pageData }) {
  const { hero_slider } = pageData;
  return (
    <>
      <HomePageHero content={hero_slider} />
      {false && (
        <div className="">
          <Images content={imagedata} />
        </div>
      )}
    </>
  );
}
export const getStaticProps = async () => {
  return {
    props: {
      pageData: homePage,
    },
  };
};
Home.layout = "PublicLayout";
