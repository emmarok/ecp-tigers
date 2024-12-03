"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";

const Preferences = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  const handleSubmit = async () => {
    const formData = {
      switchValue,
      sliderValue,
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Form submitted successfully!");
        console.log("Response:", result);
      } else {
        const errorMessage = await response.text();
        alert(`Failed to submit the form: ${errorMessage}`);
        console.error("Error response:", errorMessage);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
   
    <Sheet >
      {/* Trigger Button to Open Sheet */}
      <SheetTrigger asChild>
        <Button>Open Form</Button>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent className="white_container" side="right">
        <SheetHeader>
          <SheetTitle>Form with Switch and Slider</SheetTitle>
        </SheetHeader>

        <div className="p-4">
          {/* Switch */}
          <div className="flex items-center justify-between mb-4 ">
            <label className="text-sm font-medium">Enable Feature</label>
            <Switch
              checked={switchValue}
              onCheckedChange={(checked) => setSwitchValue(checked)}
              className={`transition-colors duration-300 ${
                switchValue ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          </div>

          {/* Slider */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Adjust Value
            </label>
            <Slider
              value={[sliderValue]}
              onValueChange={(value) => setSliderValue(value[0])}
              max={100}
              min={0}
              step={1}
              className="mt-2"
            />
            <span className="text-sm text-gray-500 mt-1 block">
              Selected Value: {sliderValue}
            </span>
          </div>
        </div>

        <SheetFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Preferences;
