import React from "react";
import { useParams } from "react-router-dom";
import Attendance from "./Attendance";
import CountWork from "./CountWork";
import OTK from "./OTK";
const FlowSection = () => {
  let { flowSection } = useParams();
  // let data = [
  //   { id: 1, component: "Attendances" },
  //   { id: 2, component: "countWork" },
  //   { id: 3, component: "OTK" },
  // ];
  return (
    <div>
      {flowSection === "attendance" ? (
        <Attendance />
      ) : flowSection === "countWork" ? (
        <CountWork />
      ) : (
        <OTK />
      )}
    </div>
  );
};

export default FlowSection;
