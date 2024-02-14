"use client";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CredentialValidationSchema } from "@/lib/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { SetStateAction, useState, useTransition } from "react";
import { InputDesc } from "../ui/input-desc";

import { Button } from "../ui/button";
import { cvUpload } from "@/actions/credentialValidationUpload";
import { FormError } from "../form-error";
import { SpinnerLoading } from "../spinner";
import { generateVeficationToken } from "@/lib/token";

export const CredentialValidation = ({
  setLabelPointer,
  setSteps,
  CVFData,
  setCVFData,
}: {
  setSteps: React.Dispatch<SetStateAction<Steps[]>>;
  setLabelPointer: React.Dispatch<SetStateAction<Steps>>;
  CVFData: zod.infer<typeof CredentialValidationSchema>;
  setCVFData: React.Dispatch<
    SetStateAction<zod.infer<typeof CredentialValidationSchema>>
  >;
}) => {
  const [renderCount, setRenderCount] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, setTransition] = useTransition();
  const initial: zod.infer<typeof CredentialValidationSchema> = {
    confirmPassword: "",
    email: "",
    password: "",
    username: "",
  };
  const [data, setData] = useState(initial);

  const onSubmit = (values: zod.infer<typeof CredentialValidationSchema>) => {
    console.log("onsubmittttt", values);
    setError("");
    setSuccess("");
    setTransition(() => {
      cvUpload(values).then((v: any) => {
        if (v) {
          console.log("cvUpload success", v);
          setCVFData(values);
          setSteps((prev) => [...prev, "Email confirmation"]);
          setLabelPointer("Email confirmation");
          generateVeficationToken(values.email);
        } else {
          console.log("cvUpload failed", v);
          setCVFData(values);
        }
      });
    });
  };

  const form = useForm<zod.infer<typeof CredentialValidationSchema>>({
    resolver: zodResolver(CredentialValidationSchema),
    defaultValues: {
      confirmPassword: CVFData.confirmPassword,
      email: CVFData.email,
      password: CVFData.password,
      username: CVFData.username,
    },
    mode: "onTouched",
  });
  return (
    <div className="w-full h-fit flex flex-col _lg:pl-8 _lg:pt-8">
      {/* Email */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-label ">Email</FormLabel>
                <div className="w-full flex">
                  <FormControl className="w-[50%] flex flex-col gap-1">
                    <Input
                      placeholder="john.doe@example.com"
                      {...field}
                      className=" bg-inputBg text-inputTextColor border-[1px] border-inputBorder focus:border-[1px] focus:border-bg10 "
                    />
                  </FormControl>
                  <div className="w-[50%] mr-4">
                    {form.formState.errors.email && (
                      <div className=" ">
                        <FormMessage className=" rounded-md ml-4 w-fit px-3 py-1 bg-red-500/10" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-[50%] pb-4">
                  {" "}
                  <InputDesc
                    desc=" You can sign in with an email or username, but all
                  notifications will be sent to your email"
                  />
                </div>
              </FormItem>
            )}
          />
          {/* Username */}
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-label mt-12">Username</FormLabel>
                <div className="w-full flex">
                  <FormControl className="w-[50%] flex flex-col gap-1">
                    <Input
                      placeholder="johndoe123"
                      {...field}
                      className=" bg-inputBg text-inputTextColor border-[1px] border-inputBorder  focus:border-[1px] focus:border-bg10 "
                    />
                  </FormControl>
                  <div className="w-[50%] mr-4">
                    {form.formState.errors.username && (
                      <div className=" ">
                        <FormMessage className=" rounded-md ml-4 w-fit px-3 py-1 bg-red-500/10" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-[50%]  pb-4">
                  {" "}
                  <InputDesc desc="Usernames are only allowed to contain alphanumeric characters and underscores but must not contain whitespace" />
                </div>
              </FormItem>
            )}
          />
          {/* password  */}
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-label">Password</FormLabel>
                <div className="w-full flex">
                  <FormControl className="w-[50%] flex flex-col gap-1">
                    <Input
                      placeholder="******"
                      {...field}
                      type="password"
                      className=" bg-inputBg text-inputTextColor border-[1px] border-inputBorder  focus:border-[1px] focus:border-bg10 "
                    />
                  </FormControl>
                  <div className="w-[50%] mr-4">
                    {form.formState.errors.password && (
                      <div className=" ">
                        <FormMessage className=" rounded-md ml-4 w-fit px-3 py-1 bg-red-500/10" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-[50%] pb-4">
                  {" "}
                  <InputDesc desc="Password atleast 6 characters" />
                </div>
              </FormItem>
            )}
          />
          {/* confirm password */}
          <FormField
            name="confirmPassword"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-label">Confirm password</FormLabel>
                <div className="w-full flex gap-2">
                  <FormControl className="w-[50%] flex flex-col gap-1">
                    <Input
                      placeholder="******"
                      {...field}
                      type="password"
                      className=" bg-inputBg text-inputTextColor border-[1px] border-inputBorder  focus:border-[1px] focus:border-bg10"
                    />
                  </FormControl>
                  <div className="w-[50%] mr-4">
                    {form.formState.errors.confirmPassword && (
                      <div className=" ">
                        <FormMessage className=" rounded-md ml-4 w-fit px-3 py-1 bg-red-500/10" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-[50%] pb-4">
                  {" "}
                  <InputDesc desc="Password atleast 6 characters" />
                </div>
              </FormItem>
            )}
          />{" "}
          <div className="w-[50%] flex justify-center ">
            <Button
              className="w-24 hover:cursor-pointer disabled:cursor-not-allowed"
              variant={"sneatgram"}
              type="submit"
              disabled={!form.formState.isValid}
            >
              {isPending ? "Uploading" : "Next"}

              {
                <div>
                  {" "}
                  <SpinnerLoading
                    variant={"ligh"}
                    size={"sm"}
                    isPending={isPending}
                  />{" "}
                </div>
              }
            </Button>
          </div>
          <div className="w-[50%]">
            <FormError message={error} />
          </div>
        </form>
      </Form>
    </div>
  );
};
