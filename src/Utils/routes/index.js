import Flow from "../../Components/Flow";
import FlowSection from "../../Components/FlowSection";
import Store from "../../Components/Store";
import Home from "../../Pages/Home";

let routeData = [
  { id: 0, path: "/", Element: Home },
  { id: 1, path: "/flow/:flowID", Element: Flow },
  { id: 2, path: "flow/:flowID/:flowSection/:flowDate", Element: FlowSection },
  { id: 2, path: "/store", Element: Store },
];
export { routeData };
