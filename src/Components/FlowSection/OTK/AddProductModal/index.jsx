import { Input, Modal } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../style";

const AddProductModal = ({ open, onOk, onCancel, currentDate, onAdd }) => {
  let { flowID } = useParams();
  let [productInfo, setProductInfo] = useState({ title: "" });

  let addPr = () => {
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/otk/add_otk_product`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: currentDate,
        flowType: flowID,
        productName: productInfo.title,
      },
    }).then((res) => {
      onOk();
      let addData = res.data.data;
      onAdd(addData[0].data[addData.length - 1]);
      setProductInfo({ title: "" });
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
      <Wrapper.Label>Product name:</Wrapper.Label>
      <Input
        onChange={(e) => setProductInfo({ title: e.target.value })}
        value={productInfo.title}
      />
    </Modal>
  );
};

export default AddProductModal;
