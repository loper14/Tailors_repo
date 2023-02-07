import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedData } from "../../../../../Redux/CountWorkSlice";
import { Wrapper } from "../TextInput/style";

const NumberInput = ({ type, updateHandler, _id, currentDate }) => {
  let { flowID } = useParams();
  let dispatch = useDispatch();
  let { selectedData } = useSelector((state) => state.countWork);
  let onCancel = () => {
    dispatch(setSelectedData({}));
  };

  let onChange = (e) => {
    dispatch(
      setSelectedData({
        ...selectedData,
        [type]: +e.target.value,
      })
    );
  };

  let onSave = () => {
    onCancel();
    updateHandler();
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/update`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        flowType: flowID,
        createDate: currentDate,
        shoudUpdateData: selectedData,
        _id,
      },
    });
  };

  let changeNumInput = (funcType) => {
    if (funcType === "inc") {
      dispatch(
        setSelectedData({
          ...selectedData,
          [type]: selectedData[type] + 1,
        })
      );
    } else if (funcType === "dec" && selectedData[type] > 0) {
      dispatch(
        setSelectedData({
          ...selectedData,
          [type]: selectedData[type] - 1,
        })
      );
    }
  };

  return (
    <Wrapper>
      <Wrapper.InputContainer>
        <Button onClick={() => changeNumInput("dec")} danger>
          -
        </Button>
        <Input
          onChange={onChange}
          onKeyDown={(e) => (e.key === "Enter" || e.key === 13) && onSave()}
          value={selectedData[type]}
          type="number"
          min={0}
        />
        <Button onClick={() => changeNumInput("inc")}>+</Button>
      </Wrapper.InputContainer>
      <Wrapper.ButtonsContainer>
        <Button type="primary" onClick={onSave}>
          Save
        </Button>
        <Button danger type="primary" onClick={onCancel}>
          Cancel
        </Button>
      </Wrapper.ButtonsContainer>
    </Wrapper>
  );
};

export default NumberInput;
