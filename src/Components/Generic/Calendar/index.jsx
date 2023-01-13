import { DatePicker } from "antd";
import React, { useState } from "react";
import { Title } from "../Style";
import { Wrapper } from "./style";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const Calendar = ({ date }) => {
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
    setParamsDate(currentDate.setDate(currentDate.getDate() + 1));
  };
  let minusDay = () => {
    setParamsDate(currentDate.setDate(currentDate.getDate() - 1));
  };
  return (
    <div>
      <Wrapper>
        <BsFillCaretLeftFill
          onClick={minusDay}
          size={"25px"}
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
                setParamsDate(new Date(e.$d).getTime());
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
          <BsFillCaretRightFill
            onClick={plusDay}
            size={"25px"}
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
