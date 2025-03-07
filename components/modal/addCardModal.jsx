import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

const AddCardModal = ({ open, close }) => {
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.cardholderName ||
      !formData.cardNumber ||
      !formData.expMonth ||
      !formData.expYear ||
      !formData.cvc
    ) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Submitting card details:", formData);
    close();
  };
  return (
    <Dialog
      open={open}
      onClose={() => close()}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <DialogPanel className=" relative p-6 rounded-2xl bg-white w-[500px] shadow-xl z-50">
        <DialogTitle className="text-xl font-semibold text-center">
          Add a new card
        </DialogTitle>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <label className="block text-gray-700 font-medium">
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg bg-gray-100"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg bg-gray-100"
              placeholder="0000-0000-0000-0000"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium">
                Exp Month
              </label>
              <input
                type="text"
                name="expMonth"
                value={formData.expMonth}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-gray-100"
                placeholder="MM"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium">
                Exp Year
              </label>
              <input
                type="text"
                name="expYear"
                value={formData.expYear}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-gray-100"
                placeholder="YYYY"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              CVC Number
            </label>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg bg-gray-100"
              placeholder="000"
            />
          </div>

          <div className="flex justify-start mt-6 gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Add your card
            </button>
          </div>
        </form>
      </DialogPanel>
    </Dialog>
  );
};

export default AddCardModal;
