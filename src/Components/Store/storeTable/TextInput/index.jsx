import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStoreSelectedData } from "../../../../Redux/CountWorkSlice";
import { Wrapper } from "./style";

const TextInput = ({ updateHandler, clearType, oldData }) => {
  let dispatch = useDispatch();
  let { storeSelectedData } = useSelector((state) => state.countWork);

  let onCancel = () => {
    dispatch(setStoreSelectedData({}));
    clearType();
  };
  let onSave = () => {
    if (oldData.productName !== storeSelectedData.productName) {
      updateHandler();
      onCancel();
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
  let onChange = (e) => {
    dispatch(
      setStoreSelectedData({
        ...storeSelectedData,
        productName: e.target.value,
      })
    );
  };
  return (
    <Wrapper>
      <Input
        value={storeSelectedData.productName}
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
