import React from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Style";
import CountWorkTable from "./CountWorkTable";

const CountWork = () => {
  let d = new Date();
  console.log(new Date(`1/1/${d.getFullYear()}`).getTime());
  let { flowDate } = useParams();
  let date = new Date(Number(flowDate));
  return (
    <div>
      <Title>Count Work</Title>
      <Calendar date={date} />
      <CountWorkTable />
    </div>
  );
};

export default CountWork;
