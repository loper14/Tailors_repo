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
    type === "fake"
      ? dispatch(
          setSelectedData({
            ...selectedData,
            fake: +e.target.value,
          })
        )
      : dispatch(
          setSelectedData({
            ...selectedData,
            price: +e.target.value,
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

  return (
    <Wrapper>
      <Wrapper.InputContainer>
        <Button
          onClick={() =>
            type === "fake"
              ? dispatch(
                  setSelectedData({
                    ...selectedData,
                    fake: selectedData.fake - 1,
                  })
                )
              : dispatch(
                  setSelectedData({
                    ...selectedData,
                    price: selectedData.price - 1,
                  })
                )
          }
          danger
        >
          -
        </Button>
        <Input
          onChange={onChange}
          value={type === "fake" ? selectedData.fake : selectedData.price}
          type="number"
        />
        <Button
          onClick={() =>
            type === "fake"
              ? dispatch(
                  setSelectedData({
                    ...selectedData,
                    fake: selectedData.fake + 1,
                  })
                )
              : dispatch(
                  setSelectedData({
                    ...selectedData,
                    price: selectedData.price + 1,
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
