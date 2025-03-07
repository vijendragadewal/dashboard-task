"use client";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  { name: "Voice calls only", description: "24/7 advice line for immediate support.", price: "---/yr" },
  { name: "Voice & video calls", description: "Both voice and video calling options for flexibility.", price: "---/yr" },
  { name: "Face to face", description: "With voice and video calls included.", price: "---/yr" },
];

const addOns = [
  { name: "Legal & financial advice", description: "This add-on is available for all plans.", price: "£--" },
  { name: "Doctor's advice", description: "This add-on is available for all plans.", price: "£--" },
];

export default function AddonPlanPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Select an add-on plan</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">How many employees do you wish to add to this plan?</label>
        <select className="w-full border rounded-md p-2">
          <option>00 - 000</option>
        </select>
      </div>
      
      <RadioGroup value={selectedPlan} onChange={setSelectedPlan} className="space-y-3">
        {plans.map((plan) => (
          <RadioGroup.Option key={plan.name} value={plan} className={({ checked }) => `
            flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all
            ${checked ? 'border-purple-500 bg-purple-100' : 'border-gray-300 hover:border-gray-500'}`}
          >
            <div>
              <p className="font-medium">{plan.name}</p>
              <p className="text-sm text-gray-500">{plan.description}</p>
            </div>
            <span className="font-semibold">{plan.price}</span>
          </RadioGroup.Option>
        ))}
      </RadioGroup>

      <h3 className="mt-6 text-lg font-semibold">Extra add-on</h3>
      <div className="space-y-3 mt-2">
        {addOns.map((addOn) => (
          <label key={addOn.name} className="flex items-center justify-between p-3 border rounded-lg cursor-pointer">
            <div>
              <p className="font-medium">{addOn.name}</p>
              <p className="text-sm text-gray-500">{addOn.description}</p>
            </div>
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedAddOns([...selectedAddOns, addOn]);
                } else {
                  setSelectedAddOns(selectedAddOns.filter(a => a.name !== addOn.name));
                }
              }}
            />
          </label>
        ))}
      </div>
      
      <button className="mt-6 w-full bg-gray-300 text-gray-600 p-2 rounded-md cursor-not-allowed" disabled>
        Upgrade plan
      </button>
    </div>
  );
}
