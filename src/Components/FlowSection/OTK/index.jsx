import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import OTK_TABLE from "./OTK_Table";
import { useState } from "react";
import axios from "axios";
import TableLoading from "../../Generic/TableLoading";
import { Button } from "antd";
import { Wrapper } from "./style";
import AddProductModal from "./AddProductModal";
import { useSelector } from "react-redux";
const OTK = () => {
  let { flowDate, flowID } = useParams();
  let [currentDate, setCurrentDate] = useState(Number(flowDate));
  let date = new Date(Number(currentDate));
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(false);
  let [isOpen, setOpen] = useState(false);
  let onDayChangeHandler = (prefixTime) => {
    setCurrentDate(prefixTime);
  };
  let { otkSelectedData } = useSelector((state) => state.countWork);
  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/otks`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: currentDate,
        flowType: flowID,
      },
    }).then((res) => {
      setLoading(false);
      // setData(res.data.data[0].data);
      const { data } = res;
      setData(data?.data[0]);
    });
  }, [currentDate]);
  let updateHandler = () => {
    setData({
      ...data,
      data: data?.data?.map((value) =>
        value._id === otkSelectedData._id ? otkSelectedData : value
      ),
    });
  };
  let deleteHandler = (id) => {
    setData({ ...data, data: data.data.filter((value) => value._id !== id) });
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/otk/remove`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: currentDate,
        idProducts: [id],
        flowType: flowID,
      },
    });
  };
  let onAdd = (value) => {
    console.log(value);
    setData({ ...data, data: [...data.data, value] });
  };
  return (
    <Wrapper>
      <AddProductModal
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        currentDate={currentDate}
        onAdd={onAdd}
      />
      <Title>OTK</Title>
      <Calendar date={date} onDayChange={onDayChangeHandler} />
      {loading ? (
        <TableLoading count={10} />
      ) : (
        <OTK_TABLE
          deleteHandler={deleteHandler}
          updateHandler={updateHandler}
          data={data}
          currentDate={currentDate}
        />
      )}
      <Button
        onClick={() => setOpen(true)}
        type="primary"
        style={{ margin: "25px 0" }}
      >
        + Add product
      </Button>
    </Wrapper>
  );
};

export default OTK;
