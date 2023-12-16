"use client"
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type ProviderProps = {
  session: Session | null;
  children: React.ReactNode;
}

export default function Provider({children, session}: ProviderProps) {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}