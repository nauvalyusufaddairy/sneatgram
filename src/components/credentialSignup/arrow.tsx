export const Arrow = ({ props }: { props: Steps }) => {
  return (
    <div>
      {" "}
      <ArrowLG props={props} />
    </div>
  );
};

const ArrowLG = ({ props }: { props: Steps }) => {
  return (
    <div className="hidden xl:flex lg:flex md:flex gap-2 items-center">
      <div className=" w-[24px] h-[24px] rounded-full text-[14px] bg-inputBorder relative flex justify-center items-center text-bg60">
        {props.step}
        <div className="w-[200px] absolute top-8 text-center text-gray-100">
          {props.label}
        </div>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-100 rounded-r-md" />
    </div>
  );
};
