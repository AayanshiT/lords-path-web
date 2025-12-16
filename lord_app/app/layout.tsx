<<<<<<< HEAD
=======
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
>>>>>>> 13a2c7f082d70f0913d617f58258340e650489cc
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
