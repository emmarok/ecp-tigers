"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";

const Preferences = ({ initialData }) => {
  const [enableFeature, setEnableFeature] = useState(false);
  const [receiveNotification, setReceiveNotification] = useState(
    true
  );
  const [blockPayments, setBlockPayments] = useState(
   false
  );

  const [limits, setLimits] = useState(initialData);

  const [notificationMethods, setNotificationMethods] = useState({
    app: false,
    text: false,
    email: false,
});

  const handleLimitChange = (field, value) => {
    setLimits((prev) => ({ ...prev, [field]: value[0] }));
  };

  const handleNotificationChange = (method) => {
    setNotificationMethods((prev) => ({
      ...prev,
      [method]: !prev[method],
    }));
  };

  const handleSubmit = async () => {
    const formData = {
      enableFeature,
      receiveNotification,
      blockPayments,
      limits,
      notificationMethods,
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
    <Sheet>
      <SheetTrigger asChild>
        <Button>Analyze</Button>
      </SheetTrigger>

      <SheetContent className="bg-[#f1f1f1]" side="right">
        <SheetHeader>
          <SheetTitle>Distraction Free Mode Preferences</SheetTitle>
        </SheetHeader>

<<<<<<< HEAD
        <div className="p-4 space-y-6">
          {/* Switches */}
          <div className="space-y-2">
            {[
              { id: "enableFeature", label: "Enable Feature", state: enableFeature, setState: setEnableFeature },
              { id: "receiveNotification", label: "Receive Notifications", state: receiveNotification, setState: setReceiveNotification },
              { id: "blockPayments", label: "Block Payments", state: blockPayments, setState: setBlockPayments },
            ].map(({ id, label, state, setState }) => (
              <div key={id} className="flex items-center space-x-2">
                <Label htmlFor={id}>{label}</Label>
                <Switch
                  id={id}
                  checked={state}
                  onCheckedChange={setState}
                  className={`transition-colors duration-300 ${
                    state ? "bg-[#006A4D]" : "bg-[#adadad]"
                  }`}
                />
              </div>
            ))}
=======
        <div className="p-4">
          {/* Switch */}
          <div className="flex items-center justify-between mb-4 ">
            <label className="text-sm font-medium">Enable Feature</label>
            <Switch
              checked={switchValue}
              onCheckedChange={(checked) => setSwitchValue(checked)}
              className={`transition-colors duration-300 ${
                switchValue ? "bg-red-500" : "bg-green-300"
              }`}
            />
>>>>>>> 827be84e0f36a30cbfc1f9037c2e367467ca1559
          </div>

          {/* Sliders */}
          {[
            { field: "clothes", label: "Clothes Limit" },
            { field: "food", label: "Food Limit" },
            { field: "travel", label: "Travel Limit" },
            { field: "goingout", label: "Going Out Limit" },
            { field: "personalCare", label: "Personal Care Limit" },
          ].map(({ field, label }) => (
            <div key={field} className="mb-4">
              <Label htmlFor={field}>{label}</Label>
              <Slider
                id={field}
                value={[limits[field]]}
                onValueChange={(value) => handleLimitChange(field, value)}
                max={100}
                min={0}
                step={1}
              />
              <span className="text-sm text-gray-500 mt-1 block">
                Selected Value: {limits[field]}
              </span>
            </div>
          ))}

          {/* Notification Method Checkbox */}
          <div className="space-y-2">
            <Label>Notification Method</Label>
            {["app", "text", "email"].map((method) => (
              <div key={method} className="flex items-center space-x-2">
                <Checkbox
                  id={method}
                  checked={notificationMethods[method]}
                  onCheckedChange={() => handleNotificationChange(method)}
                />
                <Label htmlFor={method} className="capitalize">
                  {method}
                </Label>
              </div>
            ))}
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
