import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../Generic/Styles";
import { Button } from "antd";
import axios from "axios";
import AddStoreProduct from "./AddStoreProduct";
import { useEffect } from "react";
import TableLoading from "../Generic/TableLoading";
import StoreTable from "./storeTable";

const Store = ({ disableFunction }) => {
  const [data, setData] = useState();
  let [isOpen, setOpen] = useState(false);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(({ data }) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <Wrapper>
      <AddStoreProduct
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
      <Title>Store</Title>
      {loading ? (
        <TableLoading count={10} />
      ) : (
        <StoreTable disableFunction={disableFunction} data={data} />
      )}
      {!disableFunction && (
        <Button
          onClick={() => setOpen(true)}
          type="primary"
          style={{ margin: "30px 0" }}
        >
          + Add Product
        </Button>
      )}
    </Wrapper>
  );
};

export default Store;
