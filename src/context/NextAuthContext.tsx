"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function NextAuthContext({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
