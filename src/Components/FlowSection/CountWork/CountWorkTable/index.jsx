import { Button, Checkbox } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";

const CountWorkTable = () => {
  let navigate = useNavigate();
  let { flowDate, flowID } = useParams();
  return (
    <div>
      {" "}
      <Wrapper>
        <Wrapper.Table>
          <Wrapper.Thead>
            <Wrapper.Tr>
              <Wrapper.Th>
                <OrderedListOutlined />
              </Wrapper.Th>
              <Wrapper.Th>
                <Checkbox />
              </Wrapper.Th>
              <Wrapper.Th>Full name</Wrapper.Th>
              <Wrapper.Th
                style={{
                  background: "rgb(255, 241, 232)",
                  color: "rgb(211, 56, 13)",
                }}
                isEnd
              >
                Defect
              </Wrapper.Th>
              <Wrapper.Th isEnd>Total</Wrapper.Th>
            </Wrapper.Tr>
          </Wrapper.Thead>
          <Wrapper.Tbody>
            <Wrapper.Tr>
              <Wrapper.Td>1</Wrapper.Td>
              <Wrapper.Td>
                <Checkbox />
              </Wrapper.Td>
              <Wrapper.Td>Alisherov Hamidullo</Wrapper.Td>
              <Wrapper.Td
                style={{
                  background: "rgb(255, 241, 232)",
                  color: "rgb(211, 56, 13)",
                }}
              >
                0
              </Wrapper.Td>
              <Wrapper.Td
                style={{
                  background: "rgb(255, 241, 232)",
                  color: "rgb(211, 56, 13)",
                }}
              >
                0
              </Wrapper.Td>
            </Wrapper.Tr>
          </Wrapper.Tbody>
        </Wrapper.Table>
        <Button
          onClick={() => navigate(`/flow/${flowID}/attendance/${flowDate}`)}
          style={{ margin: "25px 0" }}
        >
          Go to Attendance
        </Button>
      </Wrapper>
    </div>
  );
};

export default CountWorkTable;
