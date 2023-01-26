import React from "react";
import { useState } from "react";
import { Wrapper } from "./style";
import Table from "./Table";

const FlowReport = ({ date }) => {
  let [data, setData] = useState([
    { id: 0, name: "Flow 1", data: { fake: 0, totalPrice: 0 } },
    { id: 1, name: "Flow 2", data: { fake: 0, totalPrice: 0 } },
    { id: 2, name: "Flow 3", data: { fake: 0, totalPrice: 0 } },
    { id: 3, name: "Flow 4", data: { fake: 0, totalPrice: 0 } },
    { id: 4, name: "Flow 5", data: { fake: 0, totalPrice: 0 } },
  ]);

  return (
    <Wrapper>
      <Table date={date} data={data} />
    </Wrapper>
  );
};

export default FlowReport;
