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
      >
        {({ touched }) => (
            <div className="grid place-content-center h-screen">
              <h3 className="text-2xl font-semibold text-center text-navy">Sign up</h3>
              <Form className="border w-[90vw] md:w-[460px] p-4 rounded-lg mt-3">
                <div className="flex flex-col gap-3 mb-3">
                  <label htmlFor="name">
                    Name
                  </label>
                  <Field
                    type="text"
                    className="border py-2 px-4 rounded-md"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <label htmlFor="business_name">
                    Business name
                  </label>
                  <Field
                    type="text"
                    className="border py-2 px-4 rounded-md"
                    id="business_name"
                    name="business_name"
                    placeholder="Enter your business name"
                  />
                  <ErrorMessage
                    name="business_name"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <label htmlFor="email">
                    Email
                  </label>
                  <Field
                    type="email"
                    className="border py-2 px-4 rounded-md"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <label htmlFor="password">
                    Password
                  </label>
                  <Field
                    type="password"
                    className="border py-2 px-4 rounded-md"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <label
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    className="border py-2 px-4 rounded-md"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full px-4 py-2 text-white font-semibold rounded-md shadow ${
                    isLoading
                      ? "bg-[rgba(39,51,75,0.9)]"
                      : "bg-navy hover:bg-[rgb(33,43,62)] focus:ring-2 focus:ring-navy focus:ring-offset-2"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing up...' : 'Signup'}
                </button>

                <p className="mt-1">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="text-blue-800"
                  >
                    Login
                  </Link>
                </p>
              </Form>
            </div>
          )}
      </Formik>
  );
}

export default SignUp;
