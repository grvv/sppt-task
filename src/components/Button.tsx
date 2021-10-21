import React, { ReactElement } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

export default function Button({
  children,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-2 pl-5 pr-5 bg-transparent border-2 border-purple-500 text-purple-500 text-lg rounded-lg hover:bg-purple-500 hover:text-gray-100 focus:border-4 focus:border-purple-300"
    >
      {children}
    </button>
  );
}
