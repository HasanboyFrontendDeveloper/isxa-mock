"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();

  console.log(session);

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="">
        <div className="flex flex-col gap-3 ">
          <h2>Start Reading Test</h2>
          <Button
            className="font-bold text-xl"
            onClick={() => router.push("/reading")}
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}
