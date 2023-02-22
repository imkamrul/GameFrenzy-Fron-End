/* eslint-disable @next/next/no-img-element */
const Images = ({ content }) => {
  console.log("content  :", content);
  return (
    <div className="test">
      {content?.images.map((item, idx) => {
        return (
          <>
            <div className="test-2">
              <img key={idx} src={item?.url} alt="" style={{ width: "100%" }} />
              <p className="text-[red]">{item.fileName}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Images;
