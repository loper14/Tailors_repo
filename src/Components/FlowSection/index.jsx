import React from "react";
import { useParams } from "react-router-dom";
import Attendance from "./Attendance";
import CountWork from "./CountWork";
import OTK from "./OTK";
const FlowSection = () => {
  let { flowSection } = useParams();
  let flowSectionData = [
    { name: "attendance", Component: Attendance, id: 0 },
    { name: "countWork", Component: CountWork, id: 1 },
    { name: "OTK", Component: OTK, id: 2 },
  ];
  return (
    <div>
      {flowSectionData.map(({ id, name, Component }) =>
        name === flowSection ? <Component key={id} /> : ""
      )}
    </div>
  );
};

export default FlowSection;
