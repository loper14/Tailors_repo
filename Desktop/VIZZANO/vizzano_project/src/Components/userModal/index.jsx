import { Avatar, Form, Modal } from "antd";
import React from "react";
import { Wrapper } from "./style.js";
import { useAuthUser } from "react-auth-kit";
const UserModal = ({ open, cancel }) => {
  let user = useAuthUser();
  return (
    <Modal
      title="Profile"
      open={open}
      onOk={cancel}
      onCancel={cancel}
      okButtonProps={{ disabled: true }}
    >
      <Wrapper>
        <Wrapper.FormWrap>
          <Avatar
            className="avatar"
            style={{
              backgroundColor: "#F45220",
              verticalAlign: "middle",
              fontSize: "16px",
            }}
            size={{ sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          >
            {user().fullName[0].toUpperCase()}
          </Avatar>
          <Form
            labelCol={{
              span: 5,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item label="Name">
              <Wrapper.Input
                disabled={true}
                value={user().fullName.split(" ")[0]}
              />
            </Form.Item>

            <Form.Item label="Surname">
              <Wrapper.Input value={user().fullName.split(" ")[1]} />
            </Form.Item>
          </Form>
        </Wrapper.FormWrap>
      </Wrapper>
    </Modal>
  );
};

export default UserModal;
