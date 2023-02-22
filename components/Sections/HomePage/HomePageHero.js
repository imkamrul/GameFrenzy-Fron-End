/* eslint-disable @next/next/no-img-element */
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HomePageHero = ({ content }) => {
  return (
    <>
      <Zoom scale={0.9}>
        {content.map((item, index) => (
          <section
            key={index}
            className="h-[150vh] bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${item.slider_bg})`,
            }}
          >
            <div className="container flex flex-col lg:flex-row pt-[10vh] h-full items-center">
              <div className="w-5/12">
                <img src={item?.slider_title} alt="img" />
              </div>
              <div className="w-7/12 relative">
                <img
                  src={item?.slider_img}
                  alt="img"
                  className="absolute lg:-bottom-[300px] right-0"
                />
              </div>
            </div>
          </section>
        ))}
      </Zoom>
    </>
  );
};

export default HomePageHero;
