import React from "react";

const DropDown = ({ text }) => {
  return (
    <div>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
        <option selected>{text}</option>
        <option>United States</option>
        <option>Canada</option>
      </select>
    </div>
  );
};

export default DropDown;
