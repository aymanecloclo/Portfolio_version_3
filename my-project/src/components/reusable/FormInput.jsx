import React from 'react';

const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
}) => {
  return (
    <div className="font-general-regular mb-6">
      <label
        className="block text-lg text-primary-dark dark:text-primary-light mb-1"
        htmlFor={labelFor}
      >
        {inputLabel}
      </label>
      <input
className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#113264] dark:focus:ring-[#0588F0] transition-all ease-out duration-300"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required
      />
    </div>
  );
};

export default FormInput;
