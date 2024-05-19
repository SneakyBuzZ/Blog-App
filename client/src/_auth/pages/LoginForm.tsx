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

import { useToast } from "@/components/ui/use-toast";
import useUserStore from "@/lib/store/userStore";
import { useLoginUserQuery } from "@/lib/react-query/queriesAndMutation";
import { IUser } from "@/lib/types";

function LoginForm() {
  const navigate = useNavigate();
  const {
    mutateAsync: loginUser,
    isPending: isLoading,
    error,
  } = useLoginUserQuery();
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
    const loggedinUser = await loginUser(values);
    if (!loggedinUser || error) {
      toast({
        description: error?.message,
        className: "text-red-400",
      });
      return;
    }

    toast({
      description: "Registeration was successful",
      className: "text-green-400",
    });
    useStore.addUser(loggedinUser as IUser);
    navigate("/");
  }
  return (
    <>
      <div className="lg:w-2/6 md:w-1/2 ex-box rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h1 className="text-heading text-3xl mb-1 font-freeman pl-1">Login</h1>
        <h2 className="text-content text-sm font-medium title-font mb-8 pl-1">
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
                      className="ex-input"
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
                      className="ex-input"
                      placeholder="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" variant="yellow">
              {isLoading ? (
                <>
                  <span className="loading loading-spinner text-warning"></span>
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>
        <p className="text-content text-sm font-medium title-font mb-8 mt-3 pl-1">
          You are agreeing to our Data ,Privacy and Cookie Policy.
        </p>
      </div>
    </>
  );
}

export default LoginForm;
