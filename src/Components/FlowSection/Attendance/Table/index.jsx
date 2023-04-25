import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import axios from "axios";
const Table = ({ data: propData, createDate, flowType, open }) => {
  let [data, setData] = useState(propData);
  let [toggleChange, setToggleChange] = useState(false);

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

  let deleteMerchant = (id) => {
    setData({ ...data, data: data.data.filter((value) => value._id !== id) });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/delete_user`,
      data: {
        createDate: createDate,
        flowType,
        idUsers: [id],
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

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
                    <Button onClick={() => deleteMerchant(value._id)} danger>
                      Deletting
                    </Button>
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

export default Table;
