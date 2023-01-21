import { Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../../Generic/Style";

const AddModal = ({ open, onOk, onCancel }) => {
  let { flowID } = useParams();
  let [userInfo, setUserInfo] = useState({ name: "", surname: "" });

  let addUser = async () => {
    onOk();
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/user/create`,
      data: {
        flowType: flowID,
        fullName: `${userInfo.name} ${userInfo.surname}`,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  return (
    <Modal
      title="Add user"
      open={open}
      onOk={() => {
        onOk();
        addUser();
      }}
      onCancel={onCancel}
    >
      <Wrapper>
        <Wrapper.InputWrapper>
          <Wrapper.Label>Name:</Wrapper.Label>
          <Wrapper.Input
            name="name"
            onChange={(e) =>
              setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
            }
            value={userInfo.name}
          />
        </Wrapper.InputWrapper>
        <Wrapper.InputWrapper>
          <Wrapper.Label>Surname:</Wrapper.Label>
          <Wrapper.Input
            name="surname"
            onChange={(e) =>
              setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
            }
            value={userInfo.surname}
          />
        </Wrapper.InputWrapper>
      </Wrapper>
    </Modal>
  );
};

export default AddModal;
