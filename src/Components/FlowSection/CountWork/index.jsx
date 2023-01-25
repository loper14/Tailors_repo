import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Style";
import TableLoading from "../../Generic/TableLoading";
import CountWorkTable from "./CountWorkTable";
import { Wrapper } from "./style";

const CountWork = () => {
  let { flowDate, flowID } = useParams();
  let navigate = useNavigate();
  let [currentDate, setCurrentDate] = useState(Number(flowDate));
  let [loading, setLoading] = useState(false);
  let date = new Date(Number(currentDate));
  let [data, setData] = useState({});
  let onDayChangeHandler = (prefixTime) => {
    setCurrentDate(prefixTime);
  };

  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        flowType: flowID,
        createDate: currentDate,
      },
    }).then((res) => {
      setData(res.data.data[0]);
      setLoading(false);
    });
  }, [currentDate]);

  return (
    <Wrapper>
      <Title>Count Work</Title>
      <Calendar date={date} onDayChange={onDayChangeHandler} />
      {loading ? <TableLoading count={10} /> : <CountWorkTable data={data} />}
      <Button
        onClick={() => navigate(`/flow/${flowID}/attendance/${flowDate}`)}
        style={{ margin: "25px 0" }}
      >
        Go to Attendance
      </Button>
    </Wrapper>
  );
};

export default CountWork;
