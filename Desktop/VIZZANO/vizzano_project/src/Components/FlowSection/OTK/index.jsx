import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Style";
import React from "react";
import { useParams } from "react-router-dom";

const OTK = () => {
  let { flowDate } = useParams();
  let date = new Date(Number(flowDate));
  return (
    <div>
      <Title>OTK</Title>
      <Calendar date={date} />
    </div>
  );
};

export default OTK;
