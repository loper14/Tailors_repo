import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Style";
import Calendar from "../../Generic/Calendar";
import { useParams } from "react-router-dom";
import Table from "./Table";
const Attendance = () => {
  let { flowDate } = useParams();
  let [changeDate, setChangeDate] = useState(Number(flowDate));
  let date = new Date(Number(flowDate));
  let onDayChangeHandler = (time) => {
    console.log(time);
  };
  return (
    <Wrapper>
      <Title>Attendances</Title>
      <Calendar date={date} onDayChange={onDayChangeHandler} />
      <Table />
    </Wrapper>
  );
};

export default Attendance;
