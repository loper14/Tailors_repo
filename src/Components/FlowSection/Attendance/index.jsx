import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Style";
import Calendar from "../../Generic/Calendar";
import { useNavigate, useParams } from "react-router-dom";
import Table from "./Table";
import axios from "axios";
import AddModal from "./userModal";
import { Button } from "antd";

const Attendance = () => {
  let { flowDate, flowID } = useParams();
  let navigate = useNavigate();
  let [currentDate, setCurrentDate] = useState(Number(flowDate));
  let [loading, setLoading] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [data, setData] = useState({});
  let date = new Date(Number(currentDate));
  const dayChangeHandler = (time) => {
    setCurrentDate(time);
  };

  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants`,
      method: "POST",
      data: { flowType: flowID, createDate: currentDate },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setLoading(false);
      setData(res?.data?.data[0]);
    });
  }, [currentDate]);

  return (
    <Wrapper>
      <AddModal
        open={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      />
      <Title>Attendances</Title>
      <Calendar date={date} onDayChange={dayChangeHandler} />
      <Button
        onClick={() => setIsOpen(true)}
        type="primary"
        style={{ margin: "25px 0" }}
      >
        + Add worker
      </Button>
      {loading ? (
        "Loading..."
      ) : (
        <Table data={data} createDate={currentDate} flowType={flowID} />
      )}
      <Button
        onClick={() => navigate(`/flow/${flowID}/countWork/${flowDate}`)}
        style={{ margin: "25px 0" }}
      >
        Go to Count work
      </Button>
    </Wrapper>
  );
};

export default Attendance;
