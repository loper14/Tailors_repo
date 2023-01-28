import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedData } from "../../../../../Redux/CountWorkSlice";
import { Wrapper } from "../TextInput/style";

const NumberInput = ({ updateHandler, _id, currentDate }) => {
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
        fake: e.target.value,
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
    }).then((res) => console.log(res));
  };

  return (
    <Wrapper>
      <Wrapper.InputContainer>
        <Button
          onClick={() =>
            dispatch(
              setSelectedData({
                ...selectedData,
                fake: selectedData.fake - 1,
              })
            )
          }
          danger
        >
          -
        </Button>
        <Input onChange={onChange} value={selectedData.fake} type="number" />
        <Button
          onClick={() =>
            dispatch(
              setSelectedData({
                ...selectedData,
                fake: selectedData.fake + 1,
              })
            )
          }
        >
          +
        </Button>
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
