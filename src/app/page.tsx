// import sendEmail from "@/actions/send-email";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         const email = await sendEmail("nauvalyusufad@gmail.com", "lalalal");

//         console.log("!=============email=================!", email);
//       }}
//     >
//       <Button>email</Button>
//     </form>
//   );
//}
"use client";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_REDIRECT } from "@/routes";
import Link from "next/link";
export default function Home() {
  const form = useForm<zod.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      password: "",
      username: "",
    },
    mode: "all",
  });

  const onSubmit = (val: zod.infer<typeof LoginSchema>) => {
    signIn("credentials", {
      username: val.username,
      password: val.password,
      redirect: true,
      callbackUrl: "/home",
    });
  };
  return (
    <div className=" bg-[#040D12] w-screen h-screen flex items-center justify-center">
      <div className=" _sm:w-[320px] _sm:h-[calc(320px*1.6)]  _md:w-[420px] _md:h-[calc(420px*1.3)] _lg:w-[480px] _lg:h-[calc(480px*1.3)] bg-bg30 rounded-md shadow-md shadow-gray-100/5">
        <div className="w-full h-full flex flex-col _lg:px-8 _lg:py-12 _sm:px-4 _sm:py-8    ">
          <h1 className="text-4xl text-center text-[#36B5B0] font-[600] font-burtons">
            {" "}
            Sneatgram
          </h1>
          <div className="w-full mt-8 flex flex-col _sm:gap-2 _md:gap-4 _lg:gap-6  ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((e) => {
                  onSubmit(e);
                })}
                className="space-y-4"
              >
                <FormField
                  name="username"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-label">
                        Username or Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="email or username"
                          {...field}
                          className=" bg-gray-100/5 text-gray-50/70 border-[1px] border-gray-50/10 placeholder:text-gray-50/40 focus:border-[#36B5B0]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <div className="w-full flex justify-between items-center">
                        {" "}
                        <FormLabel className="text-gray-50/80">
                          Password
                        </FormLabel>
                        <Button variant={"link"} className="text-blue-500">
                          <Link href={"/"}> Forgot password</Link>
                        </Button>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="password"
                          {...field}
                          className=" bg-gray-100/5 text-gray-50/70 border-[1px] border-gray-50/10 placeholder:text-gray-50/40 focus:border-[#36B5B0]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="w-full flex justify-center ">
                  <Button
                    type="submit"
                    className="w-[40%] bg-[#36B5B0] text-[#040D12] mt-4 hover:text-label"
                  >
                    Signin
                  </Button>
                </div>
              </form>
            </Form>

            <div className="w-full text-label flex items-center">
              {" "}
              dont have an acount?{" "}
              <Button variant={"link"} className="text-blue-500">
                {" "}
                <Link href={"/credential-signup"}>Sign up</Link>
              </Button>
            </div>

            <div className="w-full flex items-center justify-between text-gray-50/50 text-sm leading-[0px] _lg:my-8 _sm:my-4 _md:my-6 ">
              <div className="w-[45%] h-[1px] bg-gray-50/50 " />
              <p className="">or</p>
              <div className="w-[45%] h-[1px] bg-gray-50/50 " />
            </div>
            <div className="w-full flex justify-between ">
              <Button
                className="bg-slate-300 w-[48%]  text-xl hover:text-label"
                onClick={() => signIn("google", { callbackUrl: "/home" })}
              >
                <FcGoogle />
              </Button>
              <Button className="bg-gray-300 w-[48%] text-xl text-slate-950 hover:text-label">
                <FaGithub />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
