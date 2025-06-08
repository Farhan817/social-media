"use client";
import React, { useState } from "react";
import useLogin from "./hook/useLogin";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { Button } from "../ui/Button";

const Login = () => {
  const [{ isConnected }, { handleLogin }] = useLogin();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <div className="w-full max-w-sm flex flex-col items-center">
        <ConnectButton
          chainStatus="name"
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
        />
        <div className="my-4 text-center text-gray-500">or</div>
        <Button onClick={handleLogin}>Login to Platform</Button>
        <p className="mt-4 text-center text-sm">
          Don't have an account? {" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
             Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
