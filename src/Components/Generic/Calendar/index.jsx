import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { Title } from "../Style";
import { Wrapper } from "./style";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import axios, { Axios } from "axios";
import { useParams } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";

const Calendar = ({ date, onDayChange }) => {
  let auth = useAuthUser();
  let { flowID } = useParams();
  let [paramsDate, setParamsDate] = useState(date.getTime());
  let [showDate, setShowDate] = useState(false);
  let startDate = 1668970800000;
  let setUpDate = new Date();
  let visibleDate = new Date(
    `${setUpDate.getMonth() + 1}/${
      setUpDate.getDate() + 1
    }/${setUpDate.getFullYear()}`
  );
  let currentDate = new Date(paramsDate);

  let plusDay = () => {
    let plusDayTime = currentDate.setDate(currentDate.getDate() + 1);
    setParamsDate(plusDayTime);
    onDayChange(plusDayTime);
  };
  let minusDay = () => {
    let minusDayTime = currentDate.setDate(currentDate.getDate() - 1);
    setParamsDate(minusDayTime);
    onDayChange(minusDayTime);
  };

  // useEffect(() => {
  //   axios({
  //     method: "POST",
  //     url: `${process.env.REACT_APP_MAIN_URL}/merchants`,
  //     data: { flowType: flowID, createDate: currentDate },
  //     headers: {
  //       Authorization: `${
  //         auth()._auth_type
  //       } eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJfaWQiOiI2MzdiYTc3OTQ3MzY5ZDAxNjE1MmVmOTAiLCJwYXNzd29yZCI6ImZsb3cxIiwiZnVsbE5hbWUiOiJmbG93MSIsImZsb3dUeXBlIjoiMSJ9XSwiaWF0IjoxNjY5MDQ4NjA2fQ.zCoxl2EXfHNAn9Arzd5oWXAxiMwooYkIIkWjmwj7UU0`,
  //     },
  //   }).then((response) => console.log(response));
  // }, [currentDate]);

  return (
    <div>
      <Wrapper>
        <ArrowLeftOutlined
          onClick={minusDay}
          style={{ fontSize: "25px" }}
          cursor="pointer"
        />

        <Title
          onClick={() => setShowDate(true)}
          style={{ userSelect: "none", cursor: "pointer" }}
        >
          {showDate ? (
            <DatePicker
              onOpenChange={(e) => {
                setShowDate(false);
              }}
              onChange={(e) => {
                let selectedDayTime = new Date(e.$d).getTime();
                setParamsDate(selectedDayTime);
                onDayChange(selectedDayTime);
              }}
              open={true}
              disabledDate={(value) => {
                let antDate = new Date(value.$d);
                if (startDate < antDate && visibleDate.getTime() > antDate) {
                  return false;
                }
                return true;
              }}
            />
          ) : (
            currentDate.toLocaleDateString("ru-Ru", {
              month: "numeric",
              year: "numeric",
              day: "numeric",
            })
          )}
        </Title>

        {Number(
          `${setUpDate.getDate()}.${
            setUpDate.getMonth() + 1
          }${setUpDate.getFullYear()}`
        ) >
        Number(
          `${currentDate.getDate()}.${
            currentDate.getMonth() + 1
          }${currentDate.getFullYear()}`
        ) ? (
          <ArrowRightOutlined
            onClick={plusDay}
            style={{ fontSize: "25px" }}
            cursor="pointer"
          />
        ) : (
          ""
        )}
      </Wrapper>
    </div>
  );
};

export default Calendar;
