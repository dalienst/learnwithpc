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
      router.push("/admin/dashboard");
    }
    setLoading(false);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4"
      >
        <h1 className="text-3xl font-semibold text-center ">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded-md w-80"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded-md w-80"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-white font-semibold rounded-md shadow ${
            loading
              ? "bg-green-300"
              : "bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="mt-4">
        Don&apos;t have an account?{" "}
        <Link href="/auth/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
