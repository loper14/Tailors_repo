import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Style";
import CountWorkTable from "./CountWorkTable";

const CountWork = () => {
  let { flowDate } = useParams();
  let [changeDate, setChangeDate] = useState(Number(flowDate));
  let date = new Date(Number(flowDate));
  let onDayChangeHandler = (time) => {
    console.log(time);
  };
  return (
    <div>
      <Title>Count Work</Title>
      <Calendar date={date} onDayChange={onDayChangeHandler} />
      <CountWorkTable />
    </div>
  );
};

export default CountWork;
