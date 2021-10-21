import { ReactElement } from "react";

function NotFound(): ReactElement {
  return (
    <div className="border-t border-gray-200 text-center pt-8">
      <h1 className="text-9xl font-bold text-purple-400">404</h1>
      <h1 className="text-6xl font-medium py-8">Oops! Page not found</h1>
    </div>
  );
}

export default NotFound;
