import { Button } from "antd";
import React, { useState } from "react";
import { Title } from "../Generic/Style";
import StoreTable from "./storeTable";
import { Wrapper } from "./style";
import TableLoading from "../Generic/TableLoading";
import { useEffect } from "react";
import axios from "axios";
import AddProductModal from "./addProductModal";

const Store = () => {
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(({ data }) => {
      setLoading(false);
      setData(data);
    });
  }, []);

  return (
    <Wrapper>
      <AddProductModal
        open={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      />
      <Title>Store</Title>
      {loading ? <TableLoading count={10} /> : <StoreTable data={data} />}
      <Button
        onClick={() => setIsOpen(true)}
        type="primary"
        style={{ margin: "30px 0" }}
      >
        {" "}
        + Add product
      </Button>
    </Wrapper>
  );
};

export default Store;
