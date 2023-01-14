import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Style";
import React from "react";
import { useParams } from "react-router-dom";
import OTK_TABLE from "./OTK_Table";

const OTK = () => {
  let { flowDate } = useParams();
  let date = new Date(Number(flowDate));
  return (
    <div>
      <Title>OTK</Title>
      <Calendar date={date} />
      <OTK_TABLE />
    </div>
  );
};

export default OTK;
