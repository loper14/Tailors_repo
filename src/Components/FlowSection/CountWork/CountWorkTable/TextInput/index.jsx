import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedData } from "../../../../../Redux/CountWorkSlice";
import { Wrapper } from "./style";

const TextInput = ({ updateHandler, currentDate, _id }) => {
  let { flowID } = useParams();
  let dispatch = useDispatch();
  let { selectedData } = useSelector((state) => state.countWork);
  let onCancel = () => {
    dispatch(setSelectedData({}));
  };
  let onSave = () => {
    updateHandler();
    onCancel();
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
    }).then((res) => console.log(res));
  };
  let onChange = (e) => {
    dispatch(setSelectedData({ ...selectedData, fullName: e.target.value }));
  };
  return (
    <Wrapper>
      <Input
        value={selectedData.fullName}
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
