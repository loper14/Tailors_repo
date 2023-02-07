import { Button, Input, Modal, notification } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Wrapper } from "../style";

const AddStoreProduct = ({ open, onOk, onCancel, currentDate, onAdd }) => {
  let [productInfo, setProductInfo] = useState({ title: "" });
  let [addLoading, setAddLoading] = useState(false);

  const openNotification = (
    type,
    title,
    description,
    placement = "topRight"
  ) => {
    notification[type]({
      message: title || "No title",
      description: description,
      placement,
      duration: 5,
    });
  };

  let addProduct = async () => {
    setAddLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store/create`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        productName: productInfo.title,
      },
    }).then((res) => {
      setAddLoading(false);
      onOk();
      let addData = res.data.data;
      onAdd(addData[addData.length - 1]);
      setProductInfo({ title: "" });
    });
  };

  return (
    <Modal
      title="Add product"
      open={open}
      maskClosable={!addLoading && true}
      closable={!addLoading && true}
      onOk={() => {
        addProduct();
      }}
      onCancel={onCancel}
      footer={
        <div>
          <Button disabled={addLoading && true}>Cancel</Button>
          <Button
            disabled={addLoading && true}
            type="primary"
            onClick={() => {
              productInfo.title.length > 0
                ? addProduct()
                : openNotification(
                    "warning",
                    "Field is  empty",
                    "Please fill the field"
                  );
            }}
          >
            {addLoading ? "Loading..." : "Ok"}
          </Button>
        </div>
      }
    >
      <Wrapper.Label>Product name</Wrapper.Label>
      <Input
        value={productInfo.title}
        onChange={(e) => setProductInfo({ title: e.target.value })}
        onKeyDown={(e) =>
          e.key === "Enter" || e.key === 13
            ? productInfo.title.length > 0
              ? addProduct()
              : openNotification(
                  "warning",
                  "Field is  empty",
                  "Please fill the field"
                )
            : ""
        }
      />
    </Modal>
  );
};

export default AddStoreProduct;
