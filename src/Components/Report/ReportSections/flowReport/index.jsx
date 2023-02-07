import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TableLoading from "../../../Generic/TableLoading";
import { Wrapper } from "./style";
import Table from "./Table";

const FlowReport = ({ date }) => {
  let [data, setData] = useState();
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    axios({
      url: `${
        process.env.REACT_APP_MAIN_URL
      }/merchants/report/${new Date().getTime()}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setData(res.data.data);
      setLoading(true);
    });
  }, []);

  return (
    <Wrapper>
      {loading ? <Table date={date} data={data} /> : <TableLoading count={5} />}
    </Wrapper>
  );
};

export default FlowReport;
