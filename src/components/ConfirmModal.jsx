import React from "react";

const ConfirmModal = ({ show, setShow }) => {
  return (
    <div
      className={`bg-gray-500  text-white rounded-lg md:max-w-md md:mx-auto p-4  mb-4 mx-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="">
        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <p className="font-bold">Delete your account</p>
          <p className="text-sm  mt-1">
            You will lose all of your data by deleting your account. This action
            cannot be undone.
          </p>
        </div>
      </div>
      <div className="text-center md:text-right mt-4 md:flex md:justify-end">
      <button
          onClick={() => setShow(false)}
          className="px-2 py-1 rounded-lg border font-semibold text-sm mt-4 mr-3
          "
        >
          Cancel
        </button>
        <button className="px-2 py-1 rounded-lg  font-semibold text-sm mt-4 bg-[#444]">
          Confirm
        </button>
        
      </div>
    </div>
  );
};

export default ConfirmModal;
