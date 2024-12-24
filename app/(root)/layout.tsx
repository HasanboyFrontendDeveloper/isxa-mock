import Auth from "@/components/auth";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <Auth />;
  }

  return <div>{children}</div>;
};

export default Layout;
