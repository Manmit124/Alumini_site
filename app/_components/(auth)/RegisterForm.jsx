"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [creatingUser, setcreatingUser] = useState(false);
  const [error, seterror] = useState("");
  const {data:session,status:sessionStatus}=useSession();
  const router=useRouter();
useEffect(()=>{
if(sessionStatus==='authenticated'){
  router.replace("/")
}
},[sessionStatus,router])
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      seterror("Email is invalid");
      return;
    }
    if (!password || password.length < 4) {
      seterror("Password must be at least 5 characters ");
      return;
    }
  
    try {
      setcreatingUser(true)
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 400) {
        setcreatingUser(false);
        seterror("This email is already registered");
      }
      if (response.status === 200) {
        seterror("");
        setemail("");
        setpassword("");
        setcreatingUser(false);
        router.push("/login");
      }

     
    } catch (error) {
      seterror("Error, try again");
      setcreatingUser(false);
      console.log(error);
    }
  };


  return (
    <>
      <div>
        <div className="right-3 ">
          <Link href={"/"} className=" mt-2 relative ">
            <Button
              className={cn(
                buttonVariants({ variant: "outline" }),
                "absolute left-4 top-4 md:left-8 md:top-8 text-slate-500"
              )}
            >
              Back
            </Button>
          </Link>
        </div>
      </div>
      <div className="container flex h-screen w-screen flex-col items-center justify-center ">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            hellow
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome Man
            </h1>
            {error ? (
              <div className="text-red-900">Error hai bhai: {error}</div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Enter your email to register
              </p>
            )}
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label htmlFor="email" className="mt-2  mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <Label htmlFor="email" className="mt-2  mb-2">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <Button disabled={creatingUser} type="submit" className="mt-2">
                  Register
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              type="button"
            >
              Google
            </Button>
          </div>
          <Link
            href="/login"
            className="hover:text-brand underline underline-offset-4"
          >
            <p className="px-8 text-center text-sm text-muted-foreground">
              have an account? Login
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
