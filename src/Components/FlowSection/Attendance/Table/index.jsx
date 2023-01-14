import React from "react";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const Table = () => {
  let navigate = useNavigate();
  let { flowDate, flowID } = useParams();
  return (
    <Wrapper>
      <Wrapper.Wrap>
        <Button type="primary" style={{ margin: "25px 0" }}>
          + Add worker
        </Button>
        <Wrapper.TableWrapper>
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
                <Wrapper.Th isEnd>Action</Wrapper.Th>
              </Wrapper.Tr>
            </Wrapper.Thead>
            <Wrapper.Tbody>
              <Wrapper.Tr>
                <Wrapper.Td>1</Wrapper.Td>
                <Wrapper.Td>
                  <Checkbox />
                </Wrapper.Td>
                <Wrapper.Td>Alisherov Hamidullo</Wrapper.Td>
                <Wrapper.Td isEnd>
                  <Button danger>Delete</Button>
                </Wrapper.Td>
              </Wrapper.Tr>
            </Wrapper.Tbody>
          </Wrapper.Table>
        </Wrapper.TableWrapper>
        <Button
          onClick={() => navigate(`/flow/${flowID}/countWork/${flowDate}`)}
          style={{ margin: "25px 0" }}
        >
          Go to Count work
        </Button>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default Table;
