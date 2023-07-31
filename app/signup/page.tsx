"use client";
import React from "react";
import LoginForm from "@/components/SignUp/LoginForm";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <img className="rounded-[10%]" src="signuplogo.jpg" alt="signup" />
      <LoginForm />
    </div>
  );
};

export default SignUp;
