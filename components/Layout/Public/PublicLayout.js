const PublicLayout = (props) => {
  return (
    <>
      <main className={`relative z-[0] bg-white mt-[0px] md:mt-0`}>
        {props.children}
      </main>
    </>
  );
};

export default PublicLayout;
