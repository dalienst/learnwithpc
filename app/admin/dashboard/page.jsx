'use client'
import React from "react";
import { signOut } from "next-auth/react"

async function AdminDashboard() {
  return <div><button onClick={() => signOut()}>Sign out</button></div>;
}

export default AdminDashboard;
