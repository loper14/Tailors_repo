import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Style";
import Calendar from "../../Generic/Calendar";
import { useParams } from "react-router-dom";
import Table from "./Table";
import axios from "axios";
const Attendance = () => {
  let { flowDate, flowID } = useParams();
  let [currentDate, setCurrentDate] = useState(Number(flowDate));
  let [loading, setLoading] = useState(false);
  let [data, setData] = useState({});
  let date = new Date(Number(flowDate));
  let onDayChangeHandler = (time) => {
    setCurrentDate(time);
  };

  useEffect(() => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/merchants`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        flowType: flowID,
        createDate: currentDate,
      },
    }).then(({ data }) => {
      setData(data.data[0]);
      setLoading(true);
    });
  }, [currentDate]);

  return (
    <Wrapper>
      <Title>Attendances@</Title>
      <Calendar date={date} onDayChange={onDayChangeHandler} />
      {loading ? (
        <Table data={data} createDate={currentDate} flowType={flowID} />
      ) : (
        "Loading..."
      )}
    </Wrapper>
  );
};

export default Attendance;
