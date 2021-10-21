import React, { ReactElement } from "react";

interface AppBarProps {
  children: React.ReactNode;
}

export default function AppBar({ children }: AppBarProps): ReactElement {
  return (
    <div className="flex justify-between flex-shrink-0 px-8 py-4 border-gray-300">
      <img
        className="h-10"
        alt="Shyftplan Logo"
        src="https://shyftplan.com/resources/images/shyftplan-logo.svg"
      />

      {children}
    </div>
  );
}
