import { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./styles/output.css";
import ROUTES from "./routes";
import AppBar from "./components/AppBar";
import Button from "./components/Button";
import ModalWithDateFilters from "./components/ModalWithDateFilters";

const ROOT_ROUTE = "/";

const App: React.VoidFunctionComponent = () => {
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col w-screen h-screen px-4">
      <AppBar>
        {location.pathname === ROOT_ROUTE && (
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>
            Select Date Filters
          </Button>
        )}
      </AppBar>
      <Switch>
        {ROUTES.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
      <ModalWithDateFilters
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(!isModalOpen)}
      />
    </div>
  );
};

export default App;
