import React from "react";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
const StoreTable = ({ data, disableFunction }) => {
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
                {!disableFunction && <Wrapper.Th isEnd>Action</Wrapper.Th>}
              </Wrapper.Tr>
            </Wrapper.Thead>
            <Wrapper.Tbody>
              {data?.data?.map((value, index) => (
                <Wrapper.Tr key={index}>
                  <Wrapper.Td>{index + 1}</Wrapper.Td>
                  <Wrapper.Td>{value.productName}</Wrapper.Td>
                  <Wrapper.Td
                    style={{
                      background: "rgb(246, 255, 236)",
                      color: "rgb(57, 158, 14)",
                    }}
                  >
                    {value.things}
                  </Wrapper.Td>
                  <Wrapper.Td isDanger>{value.sendedThings}</Wrapper.Td>
                  {!disableFunction && (
                    <Wrapper.Td isEnd>
                      <Button danger>Delete</Button>
                    </Wrapper.Td>
                  )}
                </Wrapper.Tr>
              ))}
            </Wrapper.Tbody>
          </Wrapper.Table>
        </Wrapper.TableWrapper>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default StoreTable;
