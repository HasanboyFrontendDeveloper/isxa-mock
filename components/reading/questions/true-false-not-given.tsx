import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const TrueFalseNotGiven = () => {
  return (
    <div>
      <div className="py-3">
        <h3>
          <span className="font-bold uppercase pr-[70px] ">True</span> if the
          statement agrees with the information
        </h3>
        <h3>
          <span className="font-bold uppercase pr-[62px] ">FALSE</span> if the
          statement agrees with the information
        </h3>
        <h3>
          <span className="font-bold uppercase pr-[25px] ">NOT GIVEN</span> if
          the statement agrees with the information
        </h3>
      </div>

      <div className="">
        <div className=" py-3 ">
          <h3>
            1 You will receive a card telling you if an item has been left with
            a neighbour.
          </h3>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default TrueFalseNotGiven;
