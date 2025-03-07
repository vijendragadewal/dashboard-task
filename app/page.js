"use client";
import { useTheme } from "@/components/themeContext";
import { Bell, Headphones } from "lucide-react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import PaymentModal from "@/components/modal/paymentModal";
import AddCardModal from "@/components/modal/addCardModal";
import ReviewModal from "@/components/modal/ReviewModal";

const plans = [
  {
    id: 1,
    name: "Voice calls only",
    desc: "24/7 advice line for immediate support.",
    price: "---/yr",
  },
  {
    id: 2,
    name: "Voice & video calls",
    desc: "Both voice and video calling options for flexibility.",
    price: "---/yr",
  },
  {
    id: 3,
    name: "Face to face",
    desc: "With voice and video calls included.",
    price: "---/yr",
  },
];

const extras = [
  {
    id: 1,
    name: "Legal & financial advice",
    desc: "This add-on is available for all plans.",
    price: "£--",
  },
  {
    id: 2,
    name: "Doctor's advice",
    desc: "This add-on is available for all plans.",
    price: "£--",
  },
];

export default function Dashboard() {
  const [started, setStarted] = useState(false);
  const { darkMode } = useTheme();
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [upgrade, setUpdagrade] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [addCardModal, setAddCardModal] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) =>
      prev.includes(addon)
        ? prev.filter((item) => item !== addon)
        : [...prev, addon]
    );
  };
  const handlePaymentModal = () => {
    setOpenDialog(true);
  };
  const handlePaymentModalClose = () => {
    setOpenDialog(false);
  };

  const handleCardModalClose = () => {
    setAddCardModal(false);
  };
  const closeReviewModal = () => {
    setOpenReviewModal(false);
  };
  return (
    <div
      className={`flex h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <main className="flex-1 p-10 overflow-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">Instant Support</h2>
          <div className="flex items-center space-x-4">
            <Bell size={24} className="cursor-pointer" />
            <div className="flex items-center bg-white p-2 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-full w-10 h-10"
              />
              <div className="ml-3">
                <p className="font-semibold">Reuben Hale</p>
                <p className="text-gray-500 text-sm">Sub Admin</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mt-4 max-w-lg">
          Expert support, right when it's needed most. Give your team the
          backing they deserve, with instant access to professionals who can
          help today.
        </p>

        <div className="mt-6 bg-purple-600 text-white p-5 rounded-lg shadow-md max-w-3xl relative overflow-hidden">
          <h3 className="text-xl font-semibold">Instant Support</h3>
          <p className="text-sm mt-2 max-w-md">
            Get instant support for your team when they need it most. Connect
            with an expert and receive assistance today!
          </p>
          {!started ? (
            <>
              <button
                onClick={() => setStarted(true)}
                style={{ position: "relative", zIndex: 1 }}
                className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-md shadow"
              >
                Get Support
              </button>
              <div className="absolute top-0 right-0 w-full h-full flex justify-end items-center opacity-20">
                <Headphones size={100} />
              </div>
            </>
          ) : (
            <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
              {!upgrade ? (
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Select an add-on plan
                    </h2>
                    <button className="text-sm text-gray-500 hover:underline">
                      Speak to sales?
                    </button>
                  </div>

                  {/* Employee Selection */}
                  <div className="mt-4 p-4 bg-gray-100 rounded-md flex justify-between items-center">
                    <label className="font-medium text-gray-900">
                      How many employees do you wish to add to this plan?
                    </label>
                    <select className="border p-2 rounded text-gray-900">
                      <option>00 - 000</option>
                    </select>
                  </div>

                  {/* Plan Selection (Radio Buttons) */}
                  <div className="mt-4 space-y-3">
                    {[
                      {
                        id: "voice",
                        label: "Voice calls only",
                        desc: "24/7 advice line for immediate support.",
                      },
                      {
                        id: "video",
                        label: "Voice & video calls",
                        desc: "Both voice and video calling options for flexibility.",
                      },
                      {
                        id: "face",
                        label: "Face to face",
                        desc: "With voice and video calls included.",
                      },
                    ].map((plan) => (
                      <label
                        key={plan.id}
                        className={`block p-4 border rounded-lg cursor-pointer flex justify-between items-center ${
                          selectedPlan === plan.id
                            ? "border-purple-600 bg-purple-50"
                            : "border-gray-300"
                        }`}
                      >
                        <div>
                          <span className="font-medium text-gray-900">
                            {plan.label}
                          </span>
                          <p className="text-sm text-gray-600">{plan.desc}</p>
                        </div>
                        <input
                          type="radio"
                          name="plan"
                          value={plan.id}
                          checked={selectedPlan === plan.id}
                          onChange={() => setSelectedPlan(plan.id)}
                          className="form-radio h-5 w-5 text-purple-600"
                        />
                      </label>
                    ))}
                  </div>

                  {/* Extra Add-ons (Checkboxes) */}
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    Extra add-on
                  </h3>
                  <div className="mt-2 space-y-3">
                    {[
                      { id: "legal", label: "Legal & financial advice" },
                      { id: "doctor", label: "Doctor’s advice" },
                    ].map((addon) => (
                      <label
                        key={addon.id}
                        className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer ${
                          selectedAddons.includes(addon.id)
                            ? "border-purple-600 bg-purple-50"
                            : "border-gray-300"
                        }`}
                      >
                        <div>
                          <span className="font-medium text-gray-900">
                            {addon.label}
                          </span>
                          <p className="text-sm text-gray-600">
                            This add-on is available for all plans.
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          checked={selectedAddons.includes(addon.id)}
                          onChange={() => toggleAddon(addon.id)}
                          className="form-checkbox h-5 w-5 text-purple-600"
                        />
                      </label>
                    ))}
                  </div>

                  {/* Upgrade Button */}
                  <button
                    className={`mt-6 w-full px-6 py-2 rounded-md ${
                      selectedPlan
                        ? "bg-purple-600 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={() => setUpdagrade(true)}
                    disabled={!selectedPlan}
                  >
                    Upgrade Plan
                  </button>
                </div>
              ) : (
                <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                    {/* Header */}
                    <h2 className="text-lg font-semibold text-gray-900">
                      Select an add-on plan
                    </h2>
                    <p className="mt-2 p-3 bg-gray-300 text-sm rounded-md">
                      🛈 This payment is an add-on and does not affect your
                      existing subscription. Regular subscription payments, such
                      as monthly charges, will continue as usual.
                    </p>

                    {/* Employee Selection */}
                    <div className="mt-4 rounded-md  items-center border border-gray-300">
                      <div className="flex justify-between bg-gray-100 p-3">
                        <label className="font-medium text-gray-900">
                          How many employees do you wish to add to this plan?
                        </label>
                        <select className="border p-2 rounded text-gray-900">
                          <option>10 - 20</option>
                          <option>20 - 30</option>
                          <option>30 - 40</option>
                        </select>
                      </div>

                      {/* Plan Selection */}
                      <div className="mt-4 p-4 border rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">
                            Voice call add-on
                          </span>
                          <span className="font-semibold text-lg text-gray-900">
                            £60/yr
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          This accommodates 10-40 employees, with voice calls
                          only.
                        </p>
                      </div>
                    </div>

                    {/* Total Payment */}
                    <div className="mt-4 p-4 border rounded-md flex justify-between items-center">
                      <span className="font-medium text-gray-900">
                        Total Payment:
                      </span>
                      <span className="font-semibold text-lg">£14</span>
                    </div>
                    <label className="flex items-center mt-2 text-sm">
                      <input type="checkbox" className="mr-2" />
                      Auto Renew your plan
                    </label>

                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-start">
                      <button
                        className="px-6 py-2 bg-purple-600 text-white rounded-md font-semibold"
                        onClick={handlePaymentModal}
                      >
                        Pay £250
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      {openDialog && (
        <PaymentModal
          open={openDialog}
          closeModal={handlePaymentModalClose}
          setAddCardModal={setAddCardModal}
          setOpenReviewModal={setOpenReviewModal}
        />
      )}
      {addCardModal && (
        <AddCardModal open={addCardModal} close={handleCardModalClose} />
      )}
      {openReviewModal && (
        <ReviewModal
          open={openReviewModal}
          closeReviewModal={closeReviewModal}
        />
      )}
    </div>
  );
}
