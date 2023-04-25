import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setOtkSelectedData } from "../../../../../Redux/CountWorkSlice";
import { Wrapper } from "./style";

const TextInput = ({ updateHandler, currentDate, _id, oldData }) => {
  let { flowID } = useParams();
  let dispatch = useDispatch();
  let { otkSelectedData } = useSelector((state) => state.countWork);
  let onCancel = () => {
    dispatch(setOtkSelectedData({}));
  };
  let onSave = () => {
    if (oldData.productName !== otkSelectedData.productName) {
      onCancel();
      updateHandler();
      axios({
        url: `${process.env.REACT_APP_MAIN_URL}/otk/update`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          flowType: flowID,
          createDate: currentDate,
          shoudUpdateData: otkSelectedData,
          _id,
        },
      });
    }
  };
  let onChange = (e) => {
    dispatch(
      setOtkSelectedData({ ...otkSelectedData, productName: e.target.value })
    );
  };
  return (
    <Wrapper>
      <Input
        value={otkSelectedData.productName}
        onChange={onChange}
        onKeyDown={(e) => (e.key === "Enter" || e.key === 13) && onSave()}
      />
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

export default TextInput;
