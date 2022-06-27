import React from "react";
import { FiCheckCircle } from "react-icons/fi";
const SupplyModal = ({ modal }) => {
  
  return (
    <div
      className={`bg-gray-500  text-white rounded-lg w-[400px] md:max-w-md md:mx-auto p-4  mb-4 mx-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        modal ? "block" : "hidden"
      }`}
    >
      <div className="mt-4 md:mt-0 md:ml-6 text-center">
        <div>
          <FiCheckCircle className="font-bold text-5xl ml-36 mb-4" />
          <p>Supply request confirm</p>
        </div>
      </div>
    </div>
  );
};

export default SupplyModal;
