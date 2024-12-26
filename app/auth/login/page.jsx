"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response?.error === "CredentialsSignin") {
      toast.error("Invalid email or password");
    } else {
      toast.success("Login successful");
      router.push("/tutor");
    }
    setLoading(false);
  };
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
       <h1 className="text-3xl font-semibold text-navy">
        Sign in
      </h1>
      <form
        onSubmit={handleSubmit}
        className="h-fit w-1/2 lg:w-1/3 space-y-6 rounded-xl border p-6"
      >
       <div>
        <label htmlFor="email" className="font-semibold">Email</label>
        <input
          type="email"
          id='email'
          required
          placeholder="e.g, johndoe@gmail.com"
          className="p-2 border border-gray-300 rounded-md w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       </div>
        <div>
        <label htmlFor="password" className="font-semibold">Password</label>
        <input
          type="password"
          id='password'
          required
          placeholder="********"
          className="p-2 border border-gray-300 rounded-md w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-white font-semibold rounded-md shadow ${
            loading
              ? "bg-[rgba(39,51,75,0.9)]"
              : "bg-navy hover:bg-[rgb(33,43,62)] focus:ring-2 focus:ring-navy focus:ring-offset-2"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="mt-4">
        Don&apos;t have an account?{" "}
        <Link href="/auth/signup" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
