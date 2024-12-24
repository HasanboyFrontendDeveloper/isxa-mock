import ReadingPage from "@/components/reading/reading-page";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Page() {
  return (
    <div className="w-full h-screen px-5 py-4 " >
        <Button className="" variant={'destructive'} >EXIT</Button>

      <ReadingPage />
    </div>
  );
}
