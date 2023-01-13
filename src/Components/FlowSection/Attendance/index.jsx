import React from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Style";
import Calendar from "../../Generic/Calendar";
import { useParams } from "react-router-dom";
const Attendance = () => {
  let { flowDate } = useParams();
  let date = new Date(Number(flowDate));
  return (
    <Wrapper>
      <Title>Attendances</Title>
      <Calendar date={date} />
    </Wrapper>
  );
};

export default Attendance;
