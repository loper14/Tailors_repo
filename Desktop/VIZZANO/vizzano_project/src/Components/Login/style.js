import styled from "styled-components";
import LeftSideImg from "../../Assets/images/loginImg.jpg";
import { Input } from "antd";
export let Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  user-select: none;
`;
Wrapper.LeftContainer = styled.div`
  flex: 1;
  position: relative;
  background-color: #2f67cc;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
Wrapper.LeftSideImg = styled.div`
  z-index: 2;
  width: 70%;
  height: 70%;
  border-radius: 12px;
  background-image: url(${LeftSideImg});
  background-size: cover;
  background-position: center;
`;
// login left side ended
Wrapper.RightContainer = styled.div`
  background-color: #fff;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
Wrapper.RightItemsContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 450px) {
    width: 100%;
  }
`;
Wrapper.LogoImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 1px solid rgb(243, 245, 248);
`;
Wrapper.Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
  color: rgb(57, 56, 77);
  @media (max-width: 400px) {
    width: 200px;
    text-align: center;
  }
  @media (max-width: 300px) {
    width: 200px;
    text-align: center;
  }
`;
Wrapper.Description = styled.div`
  margin-top: 10px;
  color: rgb(178, 176, 184);
  text-align: center;
  width: 80%;
`;
Wrapper.InputPassword = styled(Input.Password)`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);

  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;
Wrapper.Input = styled(Input)`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;
Wrapper.LoginButton = styled.button`
  margin-top: 50px;
  width: 80%;
  height: 50px;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: rgb(255, 255, 255);
  padding: 0px 15px;
  background: rgb(48, 104, 204);
  ${({ warningAnimation }) =>
    warningAnimation &&
    `
    animation: rotate 0.7s ease-in-out both;
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  `}
`;
