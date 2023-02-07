import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../Generic/Styles";
import { Button } from "antd";
import axios from "axios";
import AddStoreProduct from "./AddStoreProduct";
import { useEffect } from "react";
import TableLoading from "../Generic/TableLoading";
import StoreTable from "./storeTable";
import { useSelector } from "react-redux";

const Store = ({ disableFunction }) => {
  let { storeSelectedData } = useSelector((state) => state.countWork);
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
    }).then((res) => {
      setData(res.data.data);
      setLoading(false);
    });
  }, []);

  let addStorePr = (value) => {
    setData([...data, value]);
  };

  let deleteStorePr = (_id) => {
    setData(data.filter((value) => value._id !== _id));
  };

  let updateHandler = () => {
    setData(
      data.map((value) =>
        value._id === storeSelectedData._id ? storeSelectedData : value
      )
    );
  };

  let onAdd = (value) => {
    setData([...data, value]);
  };

  return (
    <Wrapper>
      <AddStoreProduct
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        addStorePr={addStorePr}
        onAdd={onAdd}
      />
      <Title>Store</Title>
      {loading ? (
        <TableLoading count={10} />
      ) : (
        <StoreTable
          addStorePr={addStorePr}
          disableFunction={disableFunction}
          data={data}
          deleteStorePr={deleteStorePr}
          updateHandler={updateHandler}
        />
      )}
      {!disableFunction && (
        <Button
          onClick={() => setOpen(true)}
          type="primary"
          style={{ margin: "30px 0" }}
          disabled={loading ? true : false}
        >
          + Add Product
        </Button>
      )}
    </Wrapper>
  );
};

export default Store;
