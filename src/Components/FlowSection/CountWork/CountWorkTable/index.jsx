import { Button, Checkbox } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";

const CountWorkTable = ({ data }) => {
  let [check, setCheck] = useState();
  let navigate = useNavigate();
  let { flowDate, flowID } = useParams();
  return (
    <div>
      {" "}
      <Wrapper>
        <Wrapper.Wrap>
          <Wrapper.TableWrapper>
            <Wrapper.Table>
              <Wrapper.Thead>
                <Wrapper.Tr>
                  <Wrapper.Th>
                    <OrderedListOutlined />
                  </Wrapper.Th>
                  <Wrapper.Th>Full name</Wrapper.Th>
                  <Wrapper.Th isDanger isEnd>
                    Defect
                  </Wrapper.Th>
                  <Wrapper.Th isEnd>Total</Wrapper.Th>
                </Wrapper.Tr>
              </Wrapper.Thead>
              <Wrapper.Tbody>
                {data?.data?.map((value, index) => (
                  <Wrapper.Tr key={value._id}>
                    <Wrapper.Td isDanger={value.isCome}>{index + 1}</Wrapper.Td>
                    <Wrapper.Td isDanger={value.isCome}>
                      {value.fullName}
                    </Wrapper.Td>
                    <Wrapper.Td isDanger>{value.fake}</Wrapper.Td>
                    <Wrapper.Td isDanger>{value.price}</Wrapper.Td>
                  </Wrapper.Tr>
                ))}
              </Wrapper.Tbody>
            </Wrapper.Table>
          </Wrapper.TableWrapper>
        </Wrapper.Wrap>
      </Wrapper>
    </div>
  );
};

export default CountWorkTable;
