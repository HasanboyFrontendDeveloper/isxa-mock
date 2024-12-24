import React from "react";
import TrueFalseNotGiven from "./questions/true-false-not-given";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { ScrollArea } from "../ui/scroll-area";

const ReadingPage = ({}) => {
  return (
    <div className="w-full flex ">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div className="">
            <p>Hello my name is hiii </p>
          </div>
        </ResizablePanel>
        <ResizableHandle className="border-2" />
        <ResizablePanel className="px-4">
          <ScrollArea className="" >
            <h1>
              Read the following text and attempt Consumer advice reading
              answers.
            </h1>
            <h2>Questions 1-6</h2>

            <TrueFalseNotGiven />
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ReadingPage;
