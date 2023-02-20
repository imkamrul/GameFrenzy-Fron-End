/* eslint-disable @next/next/no-img-element */
const Images = ({ content }) => {
  console.log("content  :", content);
  return (
    <div className="test">
      {content?.images.map((item, idx) => {
        return (
          <img key={idx} src={item?.url} alt="" style={{ width: "33%" }} />
        );
      })}
    </div>
  );
};

export default Images;
