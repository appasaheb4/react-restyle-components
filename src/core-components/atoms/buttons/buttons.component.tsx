import React from 'react';
import '../../../../tc.css';
interface ButtonProps {
  type?: 'solid' | 'outline';
  className?: any;
  disable?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({
  type = 'solid',
  className = 'w-40',
  disable = false,
  onClick,
  children,
}: ButtonProps) => {
  const buttonColorClass =
    type === 'solid'
      ? 'text-white bg-[#007BFF] hover:bg-[#007BFF] hover:shadow-lg text-white'
      : 'dark:text-white  text-black border border-gray-400 hover:shadow-lg';
  return (
    <button
      data-testid="buttonElement"
      disabled={disable}
      className={`${className} rounded-100px px-3 py-1  text-md ${buttonColorClass} pt-2 pb-2 font-nunitoSansRegular ${
        disable ? 'opacity-50' : 'opacity-100'
      }`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
