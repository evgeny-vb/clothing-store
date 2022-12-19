import React, {forwardRef} from "react";

type Props = {
  id: string,
  type:  React.HTMLInputTypeAttribute,
  label: string,
  classes: string,
  isValid: boolean
}

const Input = forwardRef<HTMLInputElement, Props>(({id, type, label, classes, isValid}, ref) => {
  return (
    <div className={classes}>
      <label htmlFor={id} className="block tracking-wide text-gray-700 text-md font-bold mb-2">
        {label}
      </label>
      <input type={type} id={id} ref={ref}
             className={`appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight
                 focus:outline-none focus:bg-white focus:border-gray-500 ${!isValid && "border-red-500 "}`}
      />
      {!isValid && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
    </div>
  );
});

export default Input;