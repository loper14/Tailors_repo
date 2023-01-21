import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Style";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import OTK_TABLE from "./OTK_Table";

const OTK = () => {
  let { flowDate } = useParams();
  let [changeDate, setChangeDate] = useState(Number(flowDate));
  let date = new Date(Number(flowDate));
  let onDayChangeHandler = (time) => {
    console.log(time);
  };
  return (
    <div>
      <Title>OTK</Title>
      <Calendar date={date} onDayChange={onDayChangeHandler} />
      <OTK_TABLE />
    </div>
  );
};

export default OTK;
