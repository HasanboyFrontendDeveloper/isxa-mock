"use client";

import { Input } from "@/components/ui/input";
import { registerSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import axios, { AxiosError } from "axios";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ErrorResponse } from "@/types";

export default function Auth() {
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      console.log(values);

      const { data } = await axios.post("/api/auth/login", values);

      if (data.success) {
        signIn("credentials", values);
        router.push("/");
      }

      console.log(data);

      toast({
        title: "Success",
        description: "Login in Successfully",
        color: "green",
      });
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      if (err.response?.data?.error) {
        toast({
          title: "Error",
          description: err.response?.data?.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong, Please try again later",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center px-2 ">
        <div className="bg-gray-900 w-80 px-4 py-3 rounded-lg ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <h4 className="text-3xl text-center ">Login</h4>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Username </FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Password </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant={"outline"} className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
