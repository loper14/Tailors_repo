import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setOtkSelectedData } from "../../../../Redux/CountWorkSlice";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import axios from "axios";
const OTK_TABLE = ({ data, currentDate, updateHandler, deleteHandler }) => {
  const { confirm } = Modal;
  let { otkSelectedData } = useSelector((state) => state.countWork);
  let dispatch = useDispatch();
  let [selectType, setSelectType] = useState();
  let [oldData, setOldData] = useState();

  const showDeleteConfirm = (_id) => {
    confirm({
      title: "Are you sure delete this worker?",
      icon: <ExclamationCircleFilled />,

      okText: "Delete",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteHandler(_id);
        axios({
          url: `${process.env.REACT_APP_MAIN_URL}/store/delete`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          data: {
            _id,
          },
        });
      },
      onCancel() {},
    });
  };

  let onDoubleClick = (value, doubleType) => {
    if (doubleType === selectType && value._id === otkSelectedData._id) return;
    setSelectType(doubleType);
    setOldData(value);
    dispatch(setOtkSelectedData(value));
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
                  <Wrapper.Td
                    onDoubleClick={() => onDoubleClick(value, "productName")}
                  >
                    {value._id === otkSelectedData._id &&
                    selectType === "productName" ? (
                      <TextInput
                        currentDate={currentDate}
                        updateHandler={updateHandler}
                        _id={data._id}
                        oldData={oldData}
                      />
                    ) : (
                      value.productName
                    )}
                  </Wrapper.Td>
                  <Wrapper.Td
                    isCount
                    onDoubleClick={() => {
                      onDoubleClick(value, "things");
                    }}
                  >
                    {value._id === otkSelectedData._id &&
                    selectType === "things" ? (
                      <NumberInput
                        currentDate={currentDate}
                        updateHandler={updateHandler}
                        _id={data._id}
                        oldData={oldData}
                        type="things"
                      />
                    ) : (
                      value.things
                    )}
                  </Wrapper.Td>
                  <Wrapper.Td
                    isDefect
                    onDoubleClick={() => {
                      onDoubleClick(value, "fake");
                    }}
                  >
                    {value._id === otkSelectedData._id &&
                    selectType === "fake" ? (
                      <NumberInput
                        currentDate={currentDate}
                        updateHandler={updateHandler}
                        _id={data._id}
                        oldData={oldData}
                        type="fake"
                      />
                    ) : (
                      value.fake
                    )}
                  </Wrapper.Td>
                  <Wrapper.Td isEnd>
                    <Button onClick={() => showDeleteConfirm(value._id)} danger>
                      Delete
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

export default OTK_TABLE;
