import React from "react";
import { TableContainer } from "../../../../Generic/Styles/tableStyle";
import { OrderedListOutlined } from "@ant-design/icons";
import { Title } from "../../../../Generic/Styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Table = ({ data, date }) => {
  let navigate = useNavigate();
  let [barData, setBarData] = useState();
  let [showBar, setShowBar] = useState({ show: false, active: null });
  const chartData = [
    {
      name: "Fake",
      statistics: 0,
    },
    {
      name: "Things",
      statistics: 0,
    },
  ];
  useEffect(() => {
    let selectedData = data[showBar?.active]?.data;
    if (selectedData) {
      let keys = Object.keys(selectedData);
      setBarData(
        keys.map((value) => ({
          name: value,
          statistics: selectedData[value],
        }))
      );
    }
  }, [showBar?.active]);

  return (
    <>
      <TableContainer>
        <TableContainer.Table>
          <TableContainer.Thead>
            <TableContainer.Tr>
              <TableContainer.Th>
                <OrderedListOutlined />
              </TableContainer.Th>
              <TableContainer.Th>Flow</TableContainer.Th>
              <TableContainer.Th defect>Fake</TableContainer.Th>
              <TableContainer.Th>Total price</TableContainer.Th>
              <TableContainer.Th isEnd>Action</TableContainer.Th>
            </TableContainer.Tr>
          </TableContainer.Thead>
          <TableContainer.Tbody>
            {data?.map((value, index) => {
              return (
                <TableContainer.Tr key={index}>
                  <TableContainer.Td>{index + 1}</TableContainer.Td>
                  <TableContainer.Td>{value.name}</TableContainer.Td>
                  <TableContainer.Td defect>
                    {value.data.fake}
                  </TableContainer.Td>
                  <TableContainer.Td>{value.data.price} so'm</TableContainer.Td>
                  <TableContainer.Td isEnd>
                    <Button
                      onClick={() =>
                        setShowBar({
                          ...showBar,
                          show: showBar.active === index ? false : true,
                          active: showBar.active === index ? null : index,
                        })
                      }
                      type={showBar.active === index ? "primary" : "default"}
                    >
                      {showBar.show && index === showBar.active
                        ? "Hide "
                        : "Show "}
                      diagram
                    </Button>
                    <Button
                      onClick={() =>
                        navigate(`/flow/${index + 1}/countWork/${date}`)
                      }
                      style={{ marginLeft: "20px" }}
                      type="text"
                    >
                      See all details
                    </Button>
                  </TableContainer.Td>
                </TableContainer.Tr>
              );
            })}
          </TableContainer.Tbody>
        </TableContainer.Table>
      </TableContainer>
      {showBar.show ? (
        <>
          <Title>Flow {showBar.active + 1} diagram</Title>
          <BarChart
            width={350}
            height={300}
            data={barData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 50, right: 50 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="statistics"
              fill="#231ad3"
              background={{ fill: "#afb5bd" }}
            />
          </BarChart>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Table;
