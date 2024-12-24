"use client"

import { signUp } from "@/tools/api";
import { RegistrationSchema } from "@/validation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          business_name: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegistrationSchema}
        onSubmit={async (values) => {
          setIsLoading(true);
          try {
            await signUp(values);
            toast.success("Account created successfully");
            router.push("/auth/login");
          } catch (error) {
            if (
              error?.response?.data?.email[0] ||
              error?.response?.data?.username[0]
            ) {
              toast.error("User already exists");
            } else {
              toast.error("Registration Failed");
            }
          } finally {
            setIsLoading(false);
          }
        }}
      ></Formik>
    </>
  );
}

export default SignUp;
