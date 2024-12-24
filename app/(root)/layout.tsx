import Auth from "@/components/auth";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session: any = await getServerSession(authOptions);

  if (!session) {
    return <Auth />;
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
