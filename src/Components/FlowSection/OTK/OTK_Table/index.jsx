import { Button, Checkbox } from "antd";
import React from "react";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
const OTK_TABLE = ({ data }) => {
  let navigate = useNavigate();
  let { flowDate, flowID } = useParams();
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
                <Wrapper.Th isCount>Count</Wrapper.Th>
                <Wrapper.Th isDefect>Defect</Wrapper.Th>
                <Wrapper.Th isEnd>Action</Wrapper.Th>
              </Wrapper.Tr>
            </Wrapper.Thead>
            <Wrapper.Tbody>
              {data?.data?.map((value, index) => (
                <Wrapper.Tr key={value._id}>
                  <Wrapper.Td>{index + 1}</Wrapper.Td>
                  <Wrapper.Td>{value.productName}</Wrapper.Td>
                  <Wrapper.Td isCount>{value.things}</Wrapper.Td>
                  <Wrapper.Td isDefect>{value.fake}</Wrapper.Td>
                  <Wrapper.Td isEnd>
                    <Button danger>Delete</Button>
                  </Wrapper.Td>
                </Wrapper.Tr>
              ))}
            </Wrapper.Tbody>
          </Wrapper.Table>
        </Wrapper.TableWrapper>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default OTK_TABLE;
