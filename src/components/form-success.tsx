// import { BiSave } from "react-icons/bi";
// export const FormSucces = ({ message }: { message: string }) => {
//   if (message) {
//     <div className=" flex items-center gap-1 py-1 px-4 bg-red-500/10 text-red-500 rounded-md text-[14px] leading-3">
//       <p className="text-[16px]">
//         {" "}
//         <BiSave />
//       </p>{" "}
//       <p>{message}</p>
//     </div>;
//   }
// };
import { BiCheckCircle } from "react-icons/bi";

export const FormSuccess = ({ message }: { message: string }) => {
  if (message) {
    return (
      <div className=" w-fit flex items-center gap-1 py-1 px-4 bg-teal-500/20 text-teal-500 rounded-md text-[14px] leading-3">
        <p className="text-[16px]">
          {" "}
          <BiCheckCircle />
        </p>{" "}
        <p>{message}</p>
      </div>
    );
  }
};
