import React, { useState } from "react";
import { Wrapper } from "./style";
import Logo from "../../Assets/images/logo.jpg";
import { Avatar } from "antd";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { Dropdown } from "antd";
import UserModal from "../../Components/userModal";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { useSignOut, useAuthUser } from "react-auth-kit";
const { confirm } = Modal;

const Navbar = () => {
  let user = useAuthUser();
  const signOut = useSignOut();
  let [isModal, setModal] = useState(false);
  let navigate = useNavigate();
  const showPromiseConfirm = () => {
    confirm({
      title: <Wrapper.Sure>Are you sure you want to logout?</Wrapper.Sure>,
      icon: <ExclamationCircleFilled />,

      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          setTimeout(() => {
            navigate("/login");
            signOut();
          }, 1200);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  };
  const items = [
    {
      label: (
        <Wrapper.LabelContainer onClick={() => setModal(true)}>
          <FiSettings size={"18px"} />
          <Wrapper.LabelText>Settings</Wrapper.LabelText>
        </Wrapper.LabelContainer>
      ),
      key: "0",
    },
    {
      label: (
        <Wrapper.LabelContainer onClick={showPromiseConfirm}>
          <CgLogOut color="red" size={"18px"} />
          <Wrapper.LabelText isLogout={true}>Logout</Wrapper.LabelText>
        </Wrapper.LabelContainer>
      ),
      key: "1",
    },
  ];

  return (
    <Wrapper>
      <Wrapper.NavbarWrapper>
        <UserModal open={isModal} cancel={() => setModal(false)} />
        <Wrapper.Container>
          <Link to={"/"}>
            <Wrapper.NavbarLogo src={Logo} />
          </Link>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <Avatar
              style={{
                backgroundColor: "#F45220",
                verticalAlign: "middle",
                cursor: "pointer",
              }}
              size="large"
            >
              {user().fullName[0].toUpperCase()}
            </Avatar>
          </Dropdown>
        </Wrapper.Container>
      </Wrapper.NavbarWrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
