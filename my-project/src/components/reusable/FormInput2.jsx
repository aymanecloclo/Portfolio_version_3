const FormInput2 = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
  value,
  handleChange,
  handleBlur,
  errorMessage,
}) => {
  return (
    <div className="mt-4">
      <label
        htmlFor={labelFor}
        className="block text-lg text-gray-800 dark:text-gray-100 mb-2"
      >
        {inputLabel}
      </label>
      <input
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`w-full px-5 py-2 border ${
          errorMessage ? "border-red-500" : "border-gray-300"
        } dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md shadow-sm focus:ring-[#113264] dark:focus:ring-[#0588F0] transition-all ease-out duration-300`}
      />
      {errorMessage && (
        <p className="mt-1 text-red-500 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput2;
