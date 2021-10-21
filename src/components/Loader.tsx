import clsx from "clsx";
import { ReactElement } from "react";

interface LoaderProps {
  className?: string | undefined;
}

export default function Loader({ className }: LoaderProps): ReactElement {
  return (
    <div
      style={{ borderTopColor: "transparent" }}
      className={clsx(
        "w-12 h-12 border-4 border-purple-400 border-solid rounded-full animate-spin",
        className
      )}
    />
  );
}

Loader.defaultProps = {
  className: "",
};
