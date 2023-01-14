import { Button, Checkbox } from "antd";
import React from "react";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
const OTK_TABLE = () => {
  let navigate = useNavigate();
  let { flowDate, flowID } = useParams();
  return (
    <Wrapper>
      <Wrapper.Table>
        <Wrapper.Thead>
          <Wrapper.Tr>
            <Wrapper.Th>
              <OrderedListOutlined />
            </Wrapper.Th>

            <Wrapper.Th>Products</Wrapper.Th>
            <Wrapper.Th isCount>Count</Wrapper.Th>
            <Wrapper.Th isDefect>Defect</Wrapper.Th>
            <Wrapper.Th isEnd>Action</Wrapper.Th>
          </Wrapper.Tr>
        </Wrapper.Thead>
        <Wrapper.Tbody>
          <Wrapper.Tr>
            <Wrapper.Td>1</Wrapper.Td>
            <Wrapper.Td>New</Wrapper.Td>
            <Wrapper.Td isCount>0</Wrapper.Td>
            <Wrapper.Td isDefect>0</Wrapper.Td>
            <Wrapper.Td isEnd>
              <Button danger>Delete</Button>
            </Wrapper.Td>
          </Wrapper.Tr>
        </Wrapper.Tbody>
      </Wrapper.Table>
      <Button style={{ margin: "25px 0" }}>+ Add product</Button>
    </Wrapper>
  );
};

export default OTK_TABLE;
