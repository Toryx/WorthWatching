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
        {children}
        </SessionProvider>
    )
  }