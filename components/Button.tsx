import { ReactNode } from "react";

interface IMyButton {
  children: React.ReactNode;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function MyButton({
  children,
  rightIcon,
  leftIcon,
  className = "none",
  onClick,
  disabled,
}: IMyButton) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center cursor-pointer rounded-full border-2 py-1 px-6
      } ${className}`}
    >
      {leftIcon && <span className="mr-3">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-3">{rightIcon}</span>}
    </button>
  );
}
