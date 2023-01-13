import React, { useState } from "react";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import ShapeSvg from "../Generic/ShapeSVG";
import logo from "../../Assets/images/v.png";
import { useSignIn } from "react-auth-kit";
const Login = () => {
  let signIn = useSignIn();
  let navigate = useNavigate();
  let [loading, setLoading] = useState();
  let [loginData, setLoginData] = useState({});
  let [playAnime, setPlayAnime] = useState(false);

  let onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const openNotification = (
    type,
    title,
    description,
    placement = "topRight"
  ) => {
    notification[type]({
      message: title,
      description: description,
      placement,
      duration: 3,
    });
  };

  let warningAnimeHandler = () => {
    setPlayAnime(true);
    setTimeout(() => {
      setPlayAnime(false);
    }, 1000);
  };

  let keyHandler = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      authCheck();
    }
  };

  let authCheck = () => {
    if (!loginData.password || !loginData.fullName) {
      warningAnimeHandler();
      openNotification(
        "error",
        "Name or password is not filled",
        "Please make sure to enter your name and password"
      );
      return;
    }
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_MAIN_URL}/user/login`, {
        ...loginData,
      })
      .then((responseData) => {
        let { data } = responseData.data;
        signIn({
          token: data.token,
          tokenType: "Bearer",
          authState: { fullName: data.user.fullName, _id: data.user._id },
          expiresIn: 3600,
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        warningAnimeHandler();
        setLoading(false);
        openNotification(
          "error",
          error.response.data.message.toUpperCase(),
          error.response.data.extraMessage
        );
      });
  };
  return (
    <div>
      <Wrapper>
        <Wrapper.LeftContainer>
          <ShapeSvg
            top={0}
            right={0}
            firstColor={"#376dd2"}
            secondColor={"#39acea"}
          />
          <Wrapper.LeftSideImg></Wrapper.LeftSideImg>
          <ShapeSvg
            bottom={0}
            left={0}
            firstColor={"#376dd2"}
            secondColor={"#39acea"}
          />
        </Wrapper.LeftContainer>
        <Wrapper.RightContainer>
          <Wrapper.RightItemsContainer>
            <Wrapper.LogoImg src={logo} alt="some" />
            <Wrapper.Title>И снова здравствуйте!</Wrapper.Title>
            <Wrapper.Description>
              Каждый день мы стараемся шить с лучшими для вас 😊. Vizzano с вами
              более 10 лет. 😎 🙃
            </Wrapper.Description>
            <Wrapper.Input
              name="fullName"
              value={loginData.fullName}
              onChange={onChange}
              placeholder="Имя"
            />
            <Wrapper.InputPassword
              name="password"
              value={loginData.password}
              onChange={onChange}
              placeholder="Пароль"
              onKeyDown={keyHandler}
            />
            <Wrapper.LoginButton
              warningAnimation={playAnime}
              onClick={keyHandler}
            >
              {loading ? <LoadingOutlined /> : "Login"}
            </Wrapper.LoginButton>
          </Wrapper.RightItemsContainer>
        </Wrapper.RightContainer>
      </Wrapper>
    </div>
  );
};

export default Login;
