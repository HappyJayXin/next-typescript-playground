import { forwardRef } from 'react';

type Props = {
  error: string;
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'password';
};

type RefType = HTMLInputElement;

const Input = forwardRef<RefType, Props>(
  ({ error, id, label, placeholder, type }, ref) => (
    <>
      <label
        className="block text-grey-500 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        ref={ref}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-500 mb-3"
        id={id}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </>
  )
);

export default Input;
