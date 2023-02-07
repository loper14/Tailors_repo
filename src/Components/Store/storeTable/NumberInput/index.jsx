import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStoreSelectedData } from "../../../../Redux/CountWorkSlice";
import { Wrapper } from "../TextInput/style";

const NumberInput = ({ type, updateHandler, clearType, oldData }) => {
  let dispatch = useDispatch();
  let { storeSelectedData } = useSelector((state) => state.countWork);
  let onCancel = () => {
    dispatch(setStoreSelectedData({}));
    clearType();
  };

  let onChange = (e) => {
    dispatch(
      setStoreSelectedData({
        ...storeSelectedData,
        [type]: +e.target.value > 0 ? +e.target.value : 0,
      })
    );
  };

  let onSave = () => {
    if (oldData[type] !== storeSelectedData[type]) {
      onCancel();
      updateHandler();
      axios({
        url: `${process.env.REACT_APP_MAIN_URL}/store/update`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          productName: storeSelectedData.productName,
          things: storeSelectedData.things,
          sendedThings: storeSelectedData.sendedThings,
          _id: storeSelectedData._id,
        },
      });
    } else onCancel();
  };

  let changeNumInput = (funcType) => {
    if (funcType === "inc") {
      dispatch(
        setStoreSelectedData({
          ...storeSelectedData,
          [type]: +storeSelectedData[type] + 1,
        })
      );
    } else if (funcType === "dec" && storeSelectedData[type] > 0) {
      dispatch(
        setStoreSelectedData({
          ...storeSelectedData,
          [type]: +storeSelectedData[type] - 1,
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
          value={storeSelectedData[type]}
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
