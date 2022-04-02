import { RouteProps } from "react-router-dom";
import Home from "../containers/home";

interface EndpointProps extends RouteProps {
  name?: string;
}

export const endpoints: EndpointProps[] = [
  { path: "/home", component: Home },
  { path: "/home2" },
];
