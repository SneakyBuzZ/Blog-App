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
import { LoginSchema } from "@/lib/validation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useToast } from "@/components/ui/use-toast";
import useUserStore from "@/lib/store/userStore";

function LoginForm() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const useStore = useUserStore();
  // 1. Define your form.
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: useStore?.user?.email || "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    try {
      const response = await axios.post("/expresswave/api/users/login", values);
      const loggedInUser = {
        username: response.data.data.user.username,
        fullName: response.data.data.user.fullName,
        email: response.data.data.user.email,
        avatar: response.data.data.user.avatar,
      };
      useStore.addUser(loggedInUser);
      navigate("/");
      toast({
        description: "Login was successful",
        className: "text-green-400",
      });
    } catch (error) {
      console.error("Error posting data:", error);
      toast({
        title: "Failed to login",
        className: "text-red-400",
      });
    }
  }
  return (
    <>
      <div className="lg:w-2/6 md:w-1/2 ex-bg-gray rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h1 className="ex-text-white text-3xl mb-1 font-freeman pl-1">Login</h1>
        <h2 className="ex-text-gray text-sm font-medium title-font mb-8 pl-1">
          Welcome back!! Were where were you?
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <p className="ex-text-gray text-sm font-medium title-font mb-8 mt-3 pl-1">
          You are agreeing to our Data ,Privacy and Cookie Policy.
        </p>
      </div>
    </>
  );
}

export default LoginForm;
