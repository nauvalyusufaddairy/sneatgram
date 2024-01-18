"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as zod from "zod";

import { StepHijiSchema } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormCard = ({ steps }: { steps: Pick<Steps, "step"> }) => {
  return (
    <div className="w-screen flex justify-center mt-20">
      {" "}
      {steps.step === "1" && (
        <StepHiji onSubmit={(s: any) => console.log("data step hiji : ", s)} />
      )}
    </div>
  );
};

const StepHiji = ({ onSubmit }: { onSubmit: any }) => {
  const form = useForm<zod.infer<typeof StepHijiSchema>>({
    resolver: zodResolver(StepHijiSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
    mode: "all",
  });
  return (
    <div
      className=" hidden md:flex lg:flex xl:flex 2xl:flex flex-col  
    _md:w-[320px] _md:h-[420px] 
    _lg:w-[380px] _lg:h-[480px]
     bg-bg30 rounded-md shadow-md shadow-gray-100/5"
    >
      <div className="w-full mt-8 flex flex-col _md:gap-4 _lg:gap-6 ">
        <Form {...form}>
          <form onSubmit={() => form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-50/80">username</FormLabel>
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
      </div>
    </div>
  );
};
