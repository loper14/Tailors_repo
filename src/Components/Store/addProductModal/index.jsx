import { Input, Modal } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Wrapper } from "../style";

const AddProductModal = ({ open, onOk, onCancel }) => {
  let [productInfo, setProductInfo] = useState({ title: "" });

  let addPr = () => {
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store/create`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        productName: productInfo.title,
      },
    });
  };

  return (
    <Modal
      title="Add Product"
      open={open}
      onOk={() => {
        addPr();
        onOk();
      }}
      onCancel={onCancel}
    >
      <Wrapper.Label>Product name</Wrapper.Label>
      <Input
        value={productInfo.title}
        onChange={(e) => setProductInfo({ title: e.target.value })}
      />
    </Modal>
  );
};

export default AddProductModal;
