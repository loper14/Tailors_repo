import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedData } from "../../../../Redux/CountWorkSlice";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import { useState } from "react";

const CountWorkTable = ({ data, currentDate }) => {
  let [selectType, setSelectType] = useState("");
  let [stateData, setStateData] = useState(data);
  let dispatch = useDispatch();
  let { selectedData } = useSelector((state) => state.countWork);

  let updateHandler = () => {
    setStateData({
      ...stateData,
      data: stateData.data.map((value) =>
        value._id === selectedData._id ? selectedData : value
      ),
    });
  };

  let onDoubleClick = (value, doubleType) => {
    if (doubleType === selectType || !value.isCome) return;
    dispatch(setSelectedData(value));
    setSelectType(doubleType);
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
                <Wrapper.Th>Full name</Wrapper.Th>
                <Wrapper.Th isDanger isEnd>
                  Defect
                </Wrapper.Th>
                <Wrapper.Th isEnd>Total</Wrapper.Th>
              </Wrapper.Tr>
            </Wrapper.Thead>
            <Wrapper.Tbody>
              {stateData?.data?.map((value, index) => (
                <Wrapper.Tr key={value._id}>
                  <Wrapper.Td isDanger={!value.isCome}>{index + 1}</Wrapper.Td>
                  <Wrapper.Td
                    onDoubleClick={() => onDoubleClick(value, "fullName")}
                    isDanger={!value.isCome}
                  >
                    {selectedData._id === value._id &&
                    selectType === "fullName" ? (
                      <TextInput
                        currentDate={currentDate}
                        updateHandler={updateHandler}
                        _id={data._id}
                      />
                    ) : (
                      value.fullName
                    )}
                  </Wrapper.Td>
                  <Wrapper.Td
                    isDanger
                    onDoubleClick={() => onDoubleClick(value, "fake")}
                  >
                    {selectedData._id === value._id && selectType === "fake" ? (
                      <NumberInput
                        currentDate={currentDate}
                        updateHandler={updateHandler}
                        _id={data._id}
                        type="fake"
                      />
                    ) : (
                      value.fake
                    )}
                  </Wrapper.Td>
                  <Wrapper.Td
                    isDanger={!value.isCome}
                    onDoubleClick={() => onDoubleClick(value, "price")}
                  >
                    {selectedData._id === value._id &&
                    selectType === "price" ? (
                      <NumberInput
                        currentDate={currentDate}
                        updateHandler={updateHandler}
                        _id={data._id}
                        type="price"
                      />
                    ) : (
                      value.price
                    )}
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

export default CountWorkTable;
