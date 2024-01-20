export default function FormCard({
  label,
  steps,
  labelPointer,
  handleClick,
}: {
  steps: string[];
  label: string;
  labelPointer: string;
  handleClick: any;
}) {
  return (
    <div>
      <StepHiji
        label={label}
        steps={steps}
        labelPointer={labelPointer}
        handleClick={handleClick}
      />
    </div>
  );
}

function StepHiji({
  label,
  steps,
  labelPointer,
  handleClick,
}: {
  steps: string[];
  label: string;
  labelPointer: string;
  handleClick: any;
}) {
  return (
    <div className="hidden md:flex lg:flex xl:flex 2xl:flex w-screen h-screen bg-bg60 p-0 overflow-x-hidden">
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center pl-4 border-b-[1px] border-b-bg30 _md:h-[64px] _lg:h-[77px] text-xl text-white">
          {" "}
          Credential signup forms
        </div>
        <div className="w-full flex  _md:h-[calc(100vh-64px)] _lg:h-[calc(100vh-77px)] ">
          <div className="w-[20%] flex flex-col items-center border-r-[1px] border-r-bg30"></div>
          <div className="w-[80%]"></div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import * as zod from "zod";

// import { StepHijiSchema } from "@/lib/schemas";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "../ui/button";
// import { Dispatch, SetStateAction } from "react";

// export const FormCard = ({
//   steps,
//   setFinishedStep,
// }: {
//   steps: Pick<Steps, "step">;
//   setFinishedStep: Dispatch<SetStateAction<string[]>>;
// }) => {
//   return (
//     <div className="w-screen flex justify-center mt-20">
//       {" "}
//       {steps.step === "1" && <StepHiji setFinishedStep={setFinishedStep} />}
//     </div>
//   );
// };

// const StepHiji = ({
//   setFinishedStep,
// }: {
//   setFinishedStep: Dispatch<SetStateAction<string[]>>;
// }) => {
//   const onSubmit = (v: any) => {};
//   const form = useForm<zod.infer<typeof StepHijiSchema>>({
//     resolver: zodResolver(StepHijiSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//       username: "",
//     },
//     mode: "all",
//   });
//   return (
//     <div
//       className=" hidden md:flex lg:flex xl:flex 2xl:flex flex-col
//     _md:w-[320px] _md:h-[420px]
//     _lg:w-[380px] _lg:h-[480px]
//      bg-bg30 rounded-md shadow-md shadow-gray-100/5 _lg:px-8 _md:px-4 _lg:py-2 _md:py-2"
//     >
//       <div className="w-full mt-8 flex flex-col _md:gap-2 _lg:gap-4 ">
//         <Form {...form}>
//           <form onSubmit={() => form.handleSubmit(onSubmit)}>
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-50/80">email</FormLabel>
//                   <FormControl>
//                     <Input
//                       className=" bg-gray-100/5 text-gray-50/70 border-[1px] border-gray-50/10 placeholder:text-gray-50/40 focus:border-[#36B5B0]"
//                       {...field}
//                       placeholder="email"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </form>
//         </Form>
//         <Form {...form}>
//           <form onSubmit={() => form.handleSubmit(onSubmit)}>
//             <FormField
//               control={form.control}
//               name="username"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-50/80">username</FormLabel>
//                   <FormControl>
//                     <Input
//                       className=" bg-gray-100/5 text-gray-50/70 border-[1px] border-gray-50/10 placeholder:text-gray-50/40 focus:border-[#36B5B0]"
//                       {...field}
//                       placeholder="username"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </form>
//         </Form>
//         <Form {...form}>
//           <form onSubmit={() => form.handleSubmit(onSubmit)}>
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-50/80">password</FormLabel>
//                   <FormControl>
//                     <Input
//                       className=" bg-gray-100/5 text-gray-50/70 border-[1px] border-gray-50/10 placeholder:text-gray-50/40 focus:border-[#36B5B0]"
//                       {...field}
//                       placeholder="password"
//                       type="password"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </form>
//         </Form>
//         <Form {...form}>
//           <form onSubmit={() => form.handleSubmit(onSubmit)}>
//             <FormField
//               control={form.control}
//               name="confirmPassword"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-50/80">
//                     confirm password
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       className=" bg-gray-100/5 text-gray-50/70 border-[1px] border-gray-50/10 placeholder:text-gray-50/40 focus:border-[#36B5B0]"
//                       {...field}
//                       placeholder="confirm password"
//                       type="password"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </form>
//         </Form>
//         <Button className="bg-bg10 mt-2 text-white">Next</Button>
//       </div>
//     </div>
//   );
// };
