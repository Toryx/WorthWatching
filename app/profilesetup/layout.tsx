'use client'
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";


export default function LoadingLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <SessionProvider>
        <div className="absolute [background:radial-gradient(125%_125%_at_50%_10%,#0C061C_40%,#180c39_100%)] w-screen h-screen  z-30 ">
        {children}
        </div>
        </SessionProvider>
    )
  }