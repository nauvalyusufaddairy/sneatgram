import { BiError } from "react-icons/bi";
export const FormError = ({ message }: { message: string }) => {
  if (message) {
    return (
      <div className=" flex items-center gap-1 py-1 px-4 bg-red-500/20 text-red-500 rounded-md text-[14px] leading-3">
        <p className="text-[16px]">
          {" "}
          <BiError />
        </p>{" "}
        <p>{message}</p>
      </div>
    );
  }
};
