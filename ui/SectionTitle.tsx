const SectionTitle = ({ title = "" }): JSX.Element => {
  return (
    <div className="w-full flex items-center justify-center pb-4">
      <div className="w-3/4 flex items-center justify-center">
        <div className="h-0 border-t-2 flex-grow border-blue" />
        <h1 className="font-black text-3xl text-blue text-center mx-3">
          {title}
        </h1>
        <div className="h-0 border-t-2 flex-grow border-blue" />
      </div>
    </div>
  );
};

export default SectionTitle;
