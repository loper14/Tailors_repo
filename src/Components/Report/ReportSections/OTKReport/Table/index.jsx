import React from "react";
import { TableContainer } from "../../../../Generic/Styles/tableStyle";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Table = ({ data, date }) => {
  let navigate = useNavigate();

  return (
    <>
      <TableContainer>
        <TableContainer.Table>
          <TableContainer.Thead>
            <TableContainer.Tr>
              <TableContainer.Th>
                <OrderedListOutlined />
              </TableContainer.Th>
              <TableContainer.Th>Name OTK</TableContainer.Th>
              <TableContainer.Th count>Count</TableContainer.Th>
              <TableContainer.Th defect>Fake</TableContainer.Th>
              <TableContainer.Th isEnd>Action</TableContainer.Th>
            </TableContainer.Tr>
          </TableContainer.Thead>
          <TableContainer.Tbody>
            {data.map((value, index) => {
              return (
                <TableContainer.Tr key={value.id}>
                  <TableContainer.Td>{index + 1}</TableContainer.Td>
                  <TableContainer.Td>{value.name}</TableContainer.Td>
                  <TableContainer.Td count>
                    {value.data.things}
                  </TableContainer.Td>
                  <TableContainer.Td defect>
                    {value.data.fake}
                  </TableContainer.Td>
                  <TableContainer.Td isEnd>
                    <Button
                      onClick={() => navigate(`/flow/${index + 1}/OTK/${date}`)}
                      style={{ marginLeft: "20px" }}
                      type="primary"
                    >
                      See all OTK {index + 1}
                    </Button>
                  </TableContainer.Td>
                </TableContainer.Tr>
              );
            })}
          </TableContainer.Tbody>
        </TableContainer.Table>
      </TableContainer>
    </>
  );
};

export default Table;
