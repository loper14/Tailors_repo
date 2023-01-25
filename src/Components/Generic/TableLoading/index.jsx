import React from "react";
import { Wrapper } from "../../FlowSection/Attendance/Table/style";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import SkeletonInput from "antd/es/skeleton/Input";

const TableLoading = ({ count }) => {
  return (
    <>
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
                  <Wrapper.Th isEnd>Actions</Wrapper.Th>
                </Wrapper.Tr>
              </Wrapper.Thead>
              <Wrapper.Tbody>
                {Array.from({ length: count }).map(() => (
                  <Wrapper.Tr key={Math.random()}>
                    <Wrapper.Td>
                      <Checkbox disabled={true} />
                    </Wrapper.Td>
                    <Wrapper.Td>
                      <SkeletonInput active={true} />
                    </Wrapper.Td>
                    <Wrapper.Td>
                      <Button disabled={true}>Delete</Button>
                    </Wrapper.Td>
                  </Wrapper.Tr>
                ))}
              </Wrapper.Tbody>
            </Wrapper.Table>
          </Wrapper.TableWrapper>
        </Wrapper.Wrap>
      </Wrapper>
    </>
  );
};

export default TableLoading;
