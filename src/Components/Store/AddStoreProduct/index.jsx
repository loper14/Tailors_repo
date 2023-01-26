import { Input, Modal } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../style";

const AddStoreProduct = ({ open, onOk, onCancel, currentDate }) => {
  let { flowID } = useParams();
  let [productInfo, setProductInfo] = useState({ title: "" });

  let addProduct = async () => {
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store/create`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        productName: productInfo.title,
      },
    }).then((res) => console.log(res));
  };

  return (
    <Modal
      title="Add product"
      open={open}
      onOk={() => {
        onOk();
        addProduct();
      }}
      onCancel={onCancel}
    >
      <Wrapper.Label>Product name</Wrapper.Label>
      <Input
        value={productInfo.name}
        onChange={(e) => setProductInfo({ title: e.target.value })}
      />
    </Modal>
  );
};

export default AddStoreProduct;
