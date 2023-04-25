import React from "react";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setStoreSelectedData } from "../../../Redux/CountWorkSlice";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";

const StoreTable = ({
  data,
  disableFunction,
  deleteStorePr,
  updateHandler,
}) => {
  console.log(data);
  let { storeSelectedData } = useSelector((state) => state.countWork);
  let [selectType, setSelectType] = useState("");
  let [oldData, setOldData] = useState();
  let dispatch = useDispatch();
  const { confirm } = Modal;
  const showDeleteConfirm = (_id) => {
    confirm({
      title: "Are you sure delete this worker?",
      icon: <ExclamationCircleFilled />,

      okText: "Delete",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteStorePr(_id);
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
    if (doubleType === selectType && value._id === storeSelectedData._id)
      return;
    dispatch(setStoreSelectedData(value));
    setSelectType(doubleType);
    setOldData(value);
  };

  let clearType = () => {
    setSelectType("");
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
                <Wrapper.Th isCount>Count products</Wrapper.Th>
                <Wrapper.Th isDanger>Sent products</Wrapper.Th>
                {!disableFunction && <Wrapper.Th isEnd>Action</Wrapper.Th>}
              </Wrapper.Tr>
            </Wrapper.Thead>
            <Wrapper.Tbody>
              {data?.map((value, index) => (
                <Wrapper.Tr key={index}>
                  <Wrapper.Td>{index + 1}</Wrapper.Td>
                  <Wrapper.Td
                    onDoubleClick={() =>
                      !disableFunction && onDoubleClick(value, "productName")
                    }
                  >
                    {value._id === storeSelectedData._id &&
                    selectType === "productName" ? (
                      <TextInput
                        clearType={clearType}
                        updateHandler={updateHandler}
                        oldData={oldData}
                      />
                    ) : (
                      value.productName
                    )}
                  </Wrapper.Td>
                  <Wrapper.Td
                    onDoubleClick={() =>
                      !disableFunction && onDoubleClick(value, "things")
                    }
                    isCount
                  >
                    {value._id === storeSelectedData._id &&
                    selectType === "things" ? (
                      <NumberInput
                        clearType={clearType}
                        type="things"
                        updateHandler={updateHandler}
                        oldData={oldData}
                      />
                    ) : (
                      value.things
                    )}
                  </Wrapper.Td>
                  <Wrapper.Td
                    onDoubleClick={() =>
                      !disableFunction && onDoubleClick(value, "sendedThings")
                    }
                    isDanger
                  >
                    {value._id === storeSelectedData._id &&
                    selectType === "sendedThings" ? (
                      <NumberInput
                        clearType={clearType}
                        type="sendedThings"
                        updateHandler={updateHandler}
                        oldData={oldData}
                      />
                    ) : (
                      value.sendedThings
                    )}
                  </Wrapper.Td>
                  {!disableFunction && (
                    <Wrapper.Td isEnd>
                      <Button
                        danger
                        onClick={() => showDeleteConfirm(value._id)}
                      >
                        Delete
                      </Button>
                    </Wrapper.Td>
                  )}
                </Wrapper.Tr>
              ))}
            </Wrapper.Tbody>
          </Wrapper.Table>
        </Wrapper.TableWrapper>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default StoreTable;
