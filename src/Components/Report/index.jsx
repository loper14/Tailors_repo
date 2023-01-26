import React, { useState } from "react";
import { Title } from "../Generic/Styles";
import Calendar from "../Generic/Calendar";
import FlowReport from "./ReportSections/flowReport";
import OTKReport from "../Report/ReportSections/OTKReport";
import Store from "../Store";
import { Button } from "antd";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";

const Report = () => {
  let navigate = useNavigate();
  let [date, setDate] = useState(new Date().getTime());
  return (
    <Wrapper>
      <Title>Reports</Title>
      <Calendar
        date={new Date(date)}
        onDayChange={(prefixTime) => setDate(prefixTime)}
      />
      <FlowReport date={date} />
      <OTKReport date={date} />
      <Store disableFunction={true} />
      <Button
        onClick={() => navigate("/")}
        style={{ margin: "30px" }}
        type="primary"
      >
        See details
      </Button>
    </Wrapper>
  );
};

export default Report;
