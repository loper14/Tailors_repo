import Flow from "../../Components/Flow";
import FlowSection from "../../Components/FlowSection";
import Store from "../../Components/Store";
import Home from "../../Pages/Home";
import Report from "../../Components/Report";

let routeData = [
  { id: 0, path: "/", Element: Home },
  { id: 1, path: "/flow/:flowID", Element: Flow },
  { id: 2, path: "flow/:flowID/:flowSection/:flowDate", Element: FlowSection },
  { id: 3, path: "/store", Element: Store },
  { id: 4, path: "/report", Element: Report },
];
export { routeData };
