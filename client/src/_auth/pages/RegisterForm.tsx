import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/lib/validation";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/lib/store/userStore";
import { IUser } from "@/lib/types";

function RegisterForm() {
  const userStore = useUserStore();
  const { toast } = useToast();
  const navigate = useNavigate();
  // 1. Define your form.
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      fullName: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    try {
      const response = await axios.post(
        "/expresswave/api/users/register",
        values
      );
      const user: IUser = {
        username: response?.data?.data?.username,
        fullName: response?.data?.data?.fullName,
        email: response?.data?.data?.email,
        avatar: response?.data?.data?.avatar,
      };
      userStore?.addUser?.(user);
      navigate("/");
      navigate("/login");
      toast({
        description: "Registeration was successful",
        className: "text-green-400",
      });
    } catch (error) {
      console.error("Failed to register: ", error);
      toast({
        title: "Failed to register",
        className: "text-red-400",
      });
    }
  }
  return (
    <>
      <Form {...form}>
        <div className="lg:w-2/6 md:w-1/2 ex-bg-gray rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h1 className="ex-text-white text-3xl mb-1 font-freeman">Register</h1>
          <h2 className="ex-text-gray text-sm font-medium title-font mb-8">
            Unlock the full experience! Register for all features.
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="ex-bg-lightgray ex-text-white"
                        placeholder="full name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="ex-bg-lightgray ex-text-white"
                        placeholder="username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="ex-bg-lightgray ex-text-white"
                        placeholder="email"
                        {...field}
                      />
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
                    <FormControl>
                      <Input
                        type="password"
                        className="ex-bg-lightgray ex-text-white"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="yellow">
                Submit
              </Button>
            </form>
          </Form>
          <p className="ex-text-gray text-sm font-medium title-font mb-8 mt-3">
            You are agreeing to our Data ,Privacy and Cookie Policy.
          </p>
        </div>
      </Form>
    </>
  );
}

export default RegisterForm;
