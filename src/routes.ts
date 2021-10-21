import Dashboard from "./pages/Dashboard";
import EventDetail from "./pages/EventDetail";
import NotFound from "./pages/NotFound";

export interface Route {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}

const ROUTES: Route[] = [
  { path: "/", exact: true, component: Dashboard },
  { path: "/event/:id", exact: true, component: EventDetail },
  { path: "*", exact: true, component: NotFound },
];

export default ROUTES;
