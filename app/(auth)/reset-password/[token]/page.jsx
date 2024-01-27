
"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const ResetPassword = (params) => {
console.log(params?.token)
  const [creatingUser, setcreatingUser] = useState(false);
  const [error, seterror] = useState("");
  const [verified, setverified] = useState(false);
  const [user, setuser] = useState(null);
  const [password, setpassword] = useState();
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  useEffect(()=>{
const verifyToken=async()=>{
    
    try {
        setcreatingUser(true);
        const response = await fetch("/api/verify-token", {
          method: "POST",
          body: JSON.stringify({ 
            token:params?.token,
           }),
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 400) {
          setcreatingUser(false);
          seterror("Invalid token or has expired");
          setverified(true)

        }
        if (response.status === 200) {
          seterror("");
        setverified(true)
          setcreatingUser(false);
          
          
        }
       
      } catch (error) {
        seterror("Error, try again");
        setcreatingUser(false);
        console.log(error);
      }
}
verifyToken();
  },[params?.token])
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);


  const handleSubmit = async (e) => {
    e.preventDefault();

  
   

    try {
      setcreatingUser(true);
      const response = await fetch("/api/forgetpassword", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 400) {
        setcreatingUser(false);
        seterror("User with this email is not registered");
      }
      if (response.status === 200) {
        seterror("");
        setemail("");
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
    <div className=" bg-white">


      <div className="  ">
        <div className="right-3 bg-white  ">
          <Link href={"/login"} className=" mt-2 relative ">
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
          
            <h1 className="text-2xl font-semibold tracking-tight">
             Reset Your Password
            </h1>
            {error ? (
              <div className="text-red-900">Error hai bhai: {error}</div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Enter your email for reset the password
              </p>
            )}
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label htmlFor="email" className="mt-2  mb-2">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="password"
                    type="password"
                    value={password}
                    disabled={error.length>0}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <Button
                  disabled={error.length>0}
                  type="submit" className="mt-2">
                  Reset Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ResetPassword;
