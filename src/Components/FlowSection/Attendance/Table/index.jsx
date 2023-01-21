import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Table = ({ data: propData, createDate, flowType }) => {
  let navigate = useNavigate();
  let [data, setData] = useState(propData);
  let [toggleChange, setToggleChange] = useState(false);
  let { flowDate, flowID } = useParams();

  let updateById = (shouldUpdateDate) => {
    setData({
      ...data,
      data: data.data.map((value) =>
        value._id === shouldUpdateDate._id
          ? { ...value, isCome: !value.isCome }
          : value
      ),
    });
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/update`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: createDate,
        flowType,
        shoudUpdateData: shouldUpdateDate,
        _id: data?._id,
      },
    });
  };
  let updateAll = (isAllCome) => {
    setData({
      ...data,
      data: data.data.map((value) => {
        return { ...value, isCome: isAllCome };
      }),
      isAllCome,
    });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/update_all_come`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: createDate,
        flowType,
        isAllCome: !data?.isAllCome,
      },
    });
  };

  useEffect(() => {
    setData({ ...data, isAllCome: data?.data?.every((value) => value.isCome) });
  }, [toggleChange]);

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
                  <Checkbox
                    onChange={(e) => updateAll(e.target.checked)}
                    checked={data?.isAllCome}
                  />
                </Wrapper.Th>
                <Wrapper.Th>Full name</Wrapper.Th>
                <Wrapper.Th isEnd>Action</Wrapper.Th>
              </Wrapper.Tr>
            </Wrapper.Thead>
            <Wrapper.Tbody>
              {data?.data?.map((value, index) => (
                <Wrapper.Tr key={value._id}>
                  <Wrapper.Td>{index + 1}</Wrapper.Td>
                  <Wrapper.Td>
                    <Checkbox
                      onChange={() => {
                        setToggleChange(!toggleChange);
                        updateById({
                          ...value,
                          isCome: !value.isCome,
                        });
                      }}
                      checked={value.isCome}
                    />
                  </Wrapper.Td>
                  <Wrapper.Td>{value.fullName}</Wrapper.Td>
                  <Wrapper.Td isEnd>
                    <Button danger>Delete</Button>
                  </Wrapper.Td>
                </Wrapper.Tr>
              ))}
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
