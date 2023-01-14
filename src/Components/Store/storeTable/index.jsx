import React from "react";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
const StoreTable = () => {
  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Wrapper.TableWrapper>
          <Wrapper.Table>
            <Wrapper.Thead>
              <Wrapper.Tr>
                <Wrapper.Th>
                  <OrderedListOutlined />
                </Wrapper.Th>
                <Wrapper.Th>Products</Wrapper.Th>
                <Wrapper.Th
                  style={{
                    background: "rgb(246, 255, 236)",
                    color: "rgb(57, 158, 14)",
                  }}
                >
                  Count products
                </Wrapper.Th>
                <Wrapper.Th isDanger>Sent products</Wrapper.Th>
                <Wrapper.Th isEnd>Action</Wrapper.Th>
              </Wrapper.Tr>
            </Wrapper.Thead>
            <Wrapper.Tbody>
              <Wrapper.Tr>
                <Wrapper.Td>1</Wrapper.Td>
                <Wrapper.Td>Kostyum</Wrapper.Td>
                <Wrapper.Td
                  style={{
                    background: "rgb(246, 255, 236)",
                    color: "rgb(57, 158, 14)",
                  }}
                >
                  145
                </Wrapper.Td>
                <Wrapper.Td isDanger>0</Wrapper.Td>
                <Wrapper.Td isEnd>
                  <Button danger>Delete</Button>
                </Wrapper.Td>
              </Wrapper.Tr>
              <Wrapper.Tr>
                <Wrapper.Td>2</Wrapper.Td>
                <Wrapper.Td>Kurtka</Wrapper.Td>
                <Wrapper.Td
                  style={{
                    background: "rgb(246, 255, 236)",
                    color: "rgb(57, 158, 14)",
                  }}
                >
                  205
                </Wrapper.Td>
                <Wrapper.Td isDanger>0</Wrapper.Td>
                <Wrapper.Td isEnd>
                  <Button danger>Delete</Button>
                </Wrapper.Td>
              </Wrapper.Tr>
              <Wrapper.Tr>
                <Wrapper.Td>3</Wrapper.Td>
                <Wrapper.Td>Kombinezon</Wrapper.Td>
                <Wrapper.Td
                  style={{
                    background: "rgb(246, 255, 236)",
                    color: "rgb(57, 158, 14)",
                  }}
                >
                  100
                </Wrapper.Td>
                <Wrapper.Td isDanger>0</Wrapper.Td>
                <Wrapper.Td isEnd>
                  <Button danger>Delete</Button>
                </Wrapper.Td>
              </Wrapper.Tr>
            </Wrapper.Tbody>
          </Wrapper.Table>
        </Wrapper.TableWrapper>
        <Button type="primary" style={{ margin: "30px 0" }}>
          {" "}
          + Add worker
        </Button>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default StoreTable;
