import React, { useState } from "react";
import { Wrapper } from "./style";
import Table from "./Table";
import { Title } from "../../../Generic/Styles";

const OTKReport = ({ date }) => {
  let [data, setData] = useState([
    { id: 0, name: "Flow 1", data: { fake: 0, things: 0 } },
    { id: 1, name: "Flow 2", data: { fake: 0, things: 0 } },
    { id: 2, name: "Flow 3", data: { fake: 0, things: 0 } },
    { id: 3, name: "Flow 4", data: { fake: 0, things: 0 } },
    { id: 4, name: "Flow 5", data: { fake: 0, things: 0 } },
  ]);
  return (
    <Wrapper>
      <Title>OTK Report</Title>
      <Table date={date} data={data} />
    </Wrapper>
  );
};

export default OTKReport;
