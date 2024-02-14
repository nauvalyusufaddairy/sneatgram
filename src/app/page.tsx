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

  const onSubmit = (val: any) => {
    console.log("values", val);
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
              <form onSubmit={() => form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-50/80">
                        username
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=" bg-gray-100/5 text-gray-50/70 border-[1px] border-gray-50/10 placeholder:text-gray-50/40 focus:border-[#36B5B0]"
                          {...field}
                          placeholder="username or email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <Form {...form}>
              <form onSubmit={() => form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="w-full flex justify-between items-center">
                        {" "}
                        <FormLabel className="text-gray-50/80">
                          password
                        </FormLabel>
                        <Button variant={"link"} className="text-blue-500">
                          <Link href={"/"}> forgot password</Link>
                        </Button>
                      </div>

                      <FormControl>
                        <Input
                          className=" bg-gray-100/5 text-gray-50/70 border-[1px] border-gray-50/10 placeholder:text-gray-50/40 focus:border-[#36B5B0]"
                          {...field}
                          placeholder="*********"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <div className="w-full flex justify-center">
              <Button className="w-[40%] bg-[#36B5B0] text-[#040D12] mt-2 hover:text-label">
                Sign in
              </Button>
            </div>
            <div className="w-full text-label flex items-center">
              {" "}
              dont have an acount?{" "}
              <Button variant={"link"} className="text-blue-500">
                {" "}
                <Link href={"/credential_signup"}>Sign up</Link>
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
