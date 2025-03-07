import React from "react";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";

const ReviewModal = ({ open, closeReviewModal }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={() => closeReviewModal()}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <DialogPanel className="relative p-6 rounded-2xl bg-white w-[600px] shadow-xl z-50">
          <div className="flex justify-center mt-5">
            <img src={"/image.png"} alt="logo" />
          </div>
          <p className="text-gray-600 mt-2 text-center">
            Your payment is currently under review.This process typically{" "}
            <br></br>
            takes 24-48 hours.We'll notifyyou as soon as it's completed
          </p>
          <div className="flex justify-center">
            <button
              className=" mt-6 px-6 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
              onClick={() => closeReviewModal()}
            >
              Got it!
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default ReviewModal;
