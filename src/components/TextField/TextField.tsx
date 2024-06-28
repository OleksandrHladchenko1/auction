import { forwardRef } from 'react';

// import { ReactComponent as ClearIcon } from '../../../assets/clear-icon.svg';

type TextFieldTypes = 'text' | 'email' | 'password';

interface TextFieldProps {
  id: string,
  errorMessage?: string,
  label: string,
  type?: TextFieldTypes,
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  id,
  errorMessage,
  label,
  type = 'text',
  ...rest
}, ref) => {
  /* const clearButton = (
    <button
      className='absolute right-3 top-[53%]'
      onClick={handleClear}
    >
      <ClearIcon />
    </button>
  ); */

  return (
    <div className='flex flex-col py-5 relative'>
      <label
        htmlFor={id}
        className='mb-1'
      >
        {label}
      </label>
      <input
        id={id}
        className={`p-2 outline-none border focus:border-green-500 ${errorMessage ? 'border-red-800' : 'border-gray-800'}`}
        ref={ref}
        type={type}
        {...rest}
      />
      {/* {clearButton} */}
      {errorMessage && <span className='absolute bottom-0 left-1 text-red-800 text-sm'>{errorMessage}</span>}
    </div>
  );
});

export default TextField;
