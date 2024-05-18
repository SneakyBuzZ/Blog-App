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
import { useNavigate } from "react-router-dom";
import useUserStore from "@/lib/store/userStore";
import { IUser } from "@/lib/types";
import { useRegisterUserQuery } from "@/lib/react-query/queriesAndMutation";

function RegisterForm() {
  const userStore = useUserStore();
  const {
    mutateAsync: registerUser,
    isPending: isLoading,
    error,
  } = useRegisterUserQuery();
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
    const newUser = await registerUser(values);
    if (!newUser || error) {
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
    userStore.addUser(newUser as IUser);
    navigate("/login");
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
                        className="bg-neutral-600 text-white"
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
                        className="bg-neutral-600 text-white"
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
                        className="bg-neutral-600 text-white"
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
                        className="bg-neutral-600 text-white"
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
                  "Register"
                )}
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
