import React from "react";
import { Title } from "../Generic/Style";
import StoreTable from "./storeTable";
import { Wrapper } from "./style";

const Store = () => {
  return (
    <Wrapper>
      <Title>Store</Title>
      <StoreTable />
    </Wrapper>
  );
};

export default Store;
