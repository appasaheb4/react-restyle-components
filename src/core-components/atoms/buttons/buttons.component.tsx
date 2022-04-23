import React from 'react';
interface ButtonProps {
  type?: 'solid' | 'outline' | 'submit';
  className?: any;
  disable?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({
  className,
  disable,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      data-testid="buttonElement"
      disabled={disable}
      className={`${className} rounded-100px px-3 py-1 text-text-base text-md pt-2 pb-2 font-nunitoSansRegular`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
