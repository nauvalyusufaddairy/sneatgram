"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  CredentialSignupContext,
  CredentialSignupProvider,
} from "@/context/credential-signup-context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CredentialValidationSchema,
  EmailConfirmationSchema,
  PersonalInformationsSchema,
} from "@/lib/schemas";
import * as zod from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  SignupForm,
  SignupFormContents,
  SignupFormDot,
  SignupFormField,
  SignupFormLabel,
} from "./ui/signup-form-ui";
import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { InputDesc } from "./ui/input-desc";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SpinnerLoading } from "./spinner";
import { FormError } from "./form-error";
import {
  cvUpload,
  personalInformationUpload,
} from "@/actions/credentialValidationUpload";

import { generateVeficationToken } from "@/lib/token";
import { useTimer } from "react-timer-hook";

import { cn } from "@/lib/utils";
import { FormSuccess } from "./form-success";
import { verifyToken } from "@/actions/verification-token";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { redirect, useRouter } from "next/navigation";

export function SignupForms() {
  return (
    <CredentialSignupProvider>
      <CredentialValidation />
      <EmailConfirmation />
      <PersonalInformations />
    </CredentialSignupProvider>
  );
}

const CredentialValidation = () => {
  const {
    CVFData,
    setCVFData,
    labelPointer,
    setLabelPointer,
    setSteps,
    steps,
    setUserRecordId,
  } = React.useContext(CredentialSignupContext);
  const [isPending, setTransition] = React.useTransition();
  const [error, setError] = React.useState("");

  const buttonNaming = () => {
    if (
      CVFData.confirmPassword !== "" &&
      CVFData.password !== "" &&
      CVFData.email !== "" &&
      CVFData.username !== ""
    ) {
      return "Update";
    }
    return "Next";
  };

  const form = useForm<zod.infer<typeof CredentialValidationSchema>>({
    resolver: zodResolver(CredentialValidationSchema),
    defaultValues: {
      confirmPassword: CVFData.confirmPassword,
      email: CVFData.email,
      password: CVFData.password,
      username: CVFData.username,
    },
    mode: "all",
  });
  const onSubmit = (e: zod.infer<typeof CredentialValidationSchema>) => {
    setTransition(() => {
      setError("");
      cvUpload(e).then((v) => {
        if (v) {
          setSteps((prevs) => ["Email confirmation"]);
          setLabelPointer("Email confirmation");
          setUserRecordId(v.id);
          generateVeficationToken(e.email);
          setCVFData(e);
        } else {
          setError("something went wrong");
        }
      });
    });
  };
  return (
    <SignupForm name="Credential validations">
      <SignupFormDot />
      <SignupFormField>
        <SignupFormLabel />
        <SignupFormContents className="h-fit">
          {" "}
          {/* Email */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-label flex items-center ">
                      <p>Email</p>
                      {form.formState.errors.email && (
                        <div className=" ">
                          <FormMessage className=" rounded-md ml-4 w-fit px-3 py-1 bg-red-500/10 mr-4" />
                        </div>
                      )}
                    </FormLabel>
                    <div className="w-full flex">
                      <FormControl className="w-full flex flex-col gap-1">
                        <Input
                          placeholder={
                            CVFData.email
                              ? CVFData.email
                              : "john.doe@example.com"
                          }
                          {...field}
                          className=" bg-inputBg text-inputTextColor border-[1px] border-inputBorder focus:border-[1px] focus:border-bg10/40 "
                        />
                      </FormControl>
                    </div>

                    <InputDesc
                      desc=" You can sign in with an email or username, but all
                  notifications will be sent to your email"
                    />
                  </FormItem>
                )}
              />
              {/* Username */}
              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-label flex items-center">
                      <p>Username</p>{" "}
                      {form.formState.errors.username && (
                        <div className=" ">
                          <FormMessage className=" rounded-md ml-4 w-fit px-3 py-1 bg-red-500/10 mr-4" />
                        </div>
                      )}
                    </FormLabel>
                    <div className="w-full flex">
                      <FormControl className="w-full flex flex-col gap-1">
                        <Input
                          placeholder={
                            CVFData.username ? CVFData.username : "johndoe123"
                          }
                          {...field}
                          className=" bg-inputBg text-inputTextColor border-[1px] border-inputBorder focus:border-[1px] focus:border-bg10/40 "
                        />
                      </FormControl>
                    </div>

                    <InputDesc desc="Usernames are only allowed to contain alphanumeric characters and underscores but must not contain whitespace" />
                  </FormItem>
                )}
              />
              {/* password  */}
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-label flex items-center">
                      <p>Password</p>{" "}
                      {form.formState.errors.password && (
                        <div className=" ">
                          <FormMessage className=" rounded-md ml-4 w-fit px-3 py-1 bg-red-500/10 mr-4" />
                        </div>
                      )}
                    </FormLabel>
                    <div className="w-full flex">
                      <FormControl
                        className="w-full
                         flex flex-col gap-1"
                      >
                        <Input
                          placeholder="******"
                          {...field}
                          type="password"
                          className=" bg-inputBg text-inputTextColor border-[1px] border-inputBorder  focus:border-[1px] focus:border-bg10/40 "
                        />
                      </FormControl>
                    </div>

                    <InputDesc desc="Password atleast 6 characters" />
                  </FormItem>
                )}
              />
              {/* confirm password */}
              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-label flex items-center">
                      <p>Confirm password</p>{" "}
                      {form.formState.errors.confirmPassword && (
                        <div className=" ">
                          <FormMessage className=" rounded-md ml-4 w-fit px-3 py-1 bg-red-500/10 mr-4" />
                        </div>
                      )}
                    </FormLabel>
                    <div className="w-full flex gap-2">
                      <FormControl className="w-full flex flex-col gap-1">
                        <Input
                          placeholder="******"
                          {...field}
                          type="password"
                          className=" bg-inputBg text-inputTextColor border-[1px] border-inputBorder  focus:border-[1px] focus:border-bg10/40"
                        />
                      </FormControl>
                    </div>

                    <InputDesc desc="Password atleast 6 characters" />
                  </FormItem>
                )}
              />{" "}
              <div className="w-full flex justify-center ">
                <Button
                  className="w-24 hover:cursor-pointer disabled:cursor-not-allowed"
                  variant={"sneatgram"}
                  type="submit"
                  disabled={
                    !form.formState.isValid ||
                    labelPointer !== "Credential validations"
                  }
                >
                  {isPending ? "Uploading" : buttonNaming()}

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
        </SignupFormContents>
      </SignupFormField>
    </SignupForm>
  );
};
const EmailConfirmation = () => {
  const form = useForm<zod.infer<typeof EmailConfirmationSchema>>({
    defaultValues: {
      token: "",
    },
    mode: "all",
    resolver: zodResolver(EmailConfirmationSchema),
  });
  const ti = new Date();
  const t = ti.setSeconds(ti.getSeconds() + 300);
  const [shouldResend, setShouldResend] = useState(false);
  const [succes, setSucces] = useState("");
  const [error, setError] = useState("");
  const { minutes, seconds, pause, start, restart } = useTimer({
    expiryTimestamp: t,
    autoStart: false,
    onExpire: () => setShouldResend(true),
  });
  const { labelPointer } = useContext(CredentialSignupContext);
  const [isPending, startTransition] = useTransition();
  const { CVFData, setLabelPointer, setSteps } = useContext(
    CredentialSignupContext
  );

  useEffect(() => {
    if (labelPointer === "Email confirmation") {
      return start();
    }
  }, [labelPointer]);
  const currentState = labelPointer === "Email confirmation" ? true : false;
  const handleSubmit = (e: zod.infer<typeof EmailConfirmationSchema>) => {
    setSucces("");
    setError("");
    pause();

    startTransition(() => {
      verifyToken(CVFData.email, e.token).then((v) => {
        if (v.error) {
          setError(v.error);
        } else {
          setSucces(v.succes as string);
          setSteps((prev) => ["Personal informations"]);
          setLabelPointer("Personal informations");
        }
      });
    });
  };
  return (
    <SignupForm name="Email confirmation">
      <SignupFormDot />
      <SignupFormField>
        <SignupFormLabel />
        <SignupFormContents className="h-fit">
          <Form {...form}>
            <form onSubmit={form.handleSubmit((e) => handleSubmit(e))}>
              <FormField
                name="token"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl className=" select-none">
                      {/* <Input
                        {...field}
                        placeholder="verification code"
                        className=" bg-inputBg text-inputTextColor border-[1px] border-inputBorder  focus:border-[1px] focus:border-bg10/40"
                      /> */}

                      <div className="w-full flex justify-center">
                        {" "}
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </FormControl>
                    <InputDesc desc="Enter the code sent to your registered email to ensure secure access to your account. Code expires in 5 minutes. Resend button available when time is up." />
                  </FormItem>
                )}
              />
              <div className="w-full flex justify-center  items-center  ">
                <p className="text-xl">
                  {minutes.toString().padStart(2, "0")}:
                  {seconds.toString().padStart(2, "0")}
                </p>
              </div>
              <div className="mt-6 mb-6 w-full flex justify-center items-center space-x-4">
                <Button
                  disabled={shouldResend || !currentState}
                  type="submit"
                  onClick={() => restart(ti.setSeconds(ti.getSeconds() + 300))}
                  className={cn(
                    "bg-bg10 text-bg60 hover:text-white hover:cursor-pointer",
                    shouldResend ? "hover:cursor-not-allowed" : ""
                  )}
                >
                  Submit
                </Button>{" "}
                <Button
                  variant={"link"}
                  onClick={() => start()}
                  className={"text-blue-500 hover:cursor-pointer "}
                  disabled={!shouldResend}
                >
                  resend code
                </Button>
              </div>

              <FormSuccess message={succes} />
              <FormError message={error} />
            </form>
          </Form>
        </SignupFormContents>
      </SignupFormField>
    </SignupForm>
  );
};

const PersonalInformations = () => {
  const {
    labelPointer,

    userRecordId,
  } = React.useContext(CredentialSignupContext);
  const router = useRouter();

  const [isPending, setTransition] = React.useTransition();
  const [error, setError] = React.useState("");

  const form = useForm<zod.infer<typeof PersonalInformationsSchema>>({
    resolver: zodResolver(PersonalInformationsSchema),
    defaultValues: {
      name: "",
      gender: undefined,

      birthDate: undefined,
    },
    mode: "all",
  });
  const onSubmit = (e: zod.infer<typeof PersonalInformationsSchema>) => {
    setError("");
    setTransition(() => {
      personalInformationUpload(e, userRecordId).then((v) => {
        if (v) {
          router.push("/");
        }
      });
    });
  };
  return (
    <SignupForm name="Personal informations">
      <SignupFormDot />
      <SignupFormField>
        <SignupFormLabel />
        <SignupFormContents className="h-fit">
          {" "}
          {/* Email */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel className=" text-label flex items-center ">
                      <p>Name</p>
                      {form.formState.errors.name && (
                        <div className=" ">
                          <FormMessage className=" rounded-md ml-4 w-fit px-3 py-1 bg-red-500/10 mr-4" />
                        </div>
                      )}
                    </FormLabel>
                    <div className="w-full flex">
                      <FormControl className="w-full flex flex-col gap-1">
                        <Input
                          placeholder="your full name"
                          {...field}
                          className=" bg-inputBg text-inputTextColor border-[1px] border-inputBorder focus:border-[1px] focus:border-bg10/40 "
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                name="birthDate"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="w-full flex flex-col gap-2 ">
                      <FormLabel className="text-label">
                        Date of birth
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal bg-inputBg text-inputTextColor border-[1px] border-inputBorder focus:border-[1px] focus:border-bg10/40",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            className="bg-inputBg text-inputTextColor border-[1px] border-inputBorder focus:border-[1px] focus:border-bg10/40"
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                            captionLayout="dropdown-buttons"
                            fromYear={1900}
                            toYear={new Date().getFullYear()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                name="gender"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-label ">Gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[32px] w-fit bg-inputBg text-inputTextColor border-[1px] border-inputBorder focus:border-[1px] focus:border-bg10/40">
                          <SelectValue placeholder={"select your gender"} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="MALE">male</SelectItem>
                        <SelectItem value="FEMALE">female</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {/* password  */}

              <div className="w-full flex justify-center ">
                <Button
                  className="w-24 hover:cursor-pointer disabled:cursor-not-allowed"
                  variant={"sneatgram"}
                  type="submit"
                  disabled={
                    !form.formState.isValid ||
                    labelPointer !== "Personal informations"
                  }
                >
                  {isPending ? "Uploading" : "Submit"}

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
        </SignupFormContents>
      </SignupFormField>
    </SignupForm>
  );
};
