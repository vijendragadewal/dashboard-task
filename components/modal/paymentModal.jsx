import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import { Bell, Headphones } from "lucide-react";
const paymentMethods = [
  {
    id: "apple_pay",
    name: "Apple Pay",
    icon: <Bell className="text-black" />,
    details: "Reuben Hale - Applepay... 8473",
  },
  {
    id: "google_pay",
    name: "Google Pay",
    icon: <Headphones className="text-black" />,
    details: "",
  },
  {
    id: "bank_transfer",
    name: "Bank Transfer",
    icon: <span className="text-black text-lg">🏦</span>,
    details: "",
  },
];

const PaymentModal = ({
  open,
  closeModal,
  setAddCardModal,
  setOpenReviewModal,
}) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const handleAddNewCard = () => {
    setAddCardModal(true);
    closeModal();
  };
  const handleSurvey = () => {
    setOpenReviewModal(true);
    closeModal();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => closeModal()}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <DialogPanel className="relative p-6 rounded-2xl bg-white w-[600px] shadow-xl z-50">
          <DialogTitle className="text-xl font-semibold">
            Payment Methods
          </DialogTitle>
          <RadioGroup
            value={selectedMethod}
            onChange={setSelectedMethod}
            className="space-y-4 mt-6"
          >
            {paymentMethods.map((method) => (
              <RadioGroup.Option key={method.id} value={method.id}>
                {({ checked }) => (
                  <div
                    className={`flex items-center space-x-3 border p-3 rounded-lg cursor-pointer transition ${
                      checked
                        ? "bg-purple-100 border-purple-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="w-5 h-5">
                      <input
                        type="radio"
                        className="hidden"
                        checked={checked}
                        readOnly
                      />
                      <div
                        className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                          checked
                            ? "border-purple-600 bg-purple-600"
                            : "border-gray-400"
                        }`}
                      >
                        {checked && (
                          <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                        )}
                      </div>
                    </div>
                    {method.icon}
                    <div>
                      <p className="font-medium">{method.name}</p>
                      {method.details && (
                        <p className="text-sm text-gray-500">
                          {method.details}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </RadioGroup>

          <div className="flex justify-start gap-4 mt-6">
            <button
              className="px-4 py-2 border rounded-lg hover:bg-gray-200 transition"
              onClick={handleAddNewCard}
            >
              Add a new card
            </button>
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              disabled={!selectedMethod}
              onClick={handleSurvey}
            >
              My Surveys
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default PaymentModal;
