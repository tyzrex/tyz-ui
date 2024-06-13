"use client";

import RHFInput from "../rhf-components/rhf-input";
import z from "zod";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type SchemaType = z.infer<typeof schema>;

function InputDemo() {
  const form = useForm<SchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  return (
    <div className="border my-10">
      <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center">
        <Form {...form}>
          <form className="flex flex-col space-y-5 p-5 border border-gray-300 dark:border-gray-700 rounded-xl w-[60%]">
            <RHFInput<SchemaType>
              name="email"
              formLabel="Email"
              type="email"
              placeHolder="Enter your email"
            />
            <RHFInput<SchemaType>
              name="password"
              formLabel="Password"
              type="password"
              placeHolder="Enter your password"
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default InputDemo;
