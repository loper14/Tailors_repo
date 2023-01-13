import styled from "styled-components";

export let Wrapper = styled.div`
  width: 100%;
  height: 75px;
  background-color: #fff;
`;
Wrapper.NavbarWrapper = styled.div``;
Wrapper.Container = styled.div`
  width: 90%;
  height: 75px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1100px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
`;
Wrapper.NavbarLogo = styled.img`
  transform: scale(0.8);
  width: 250px;
  height: 60px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 170px;
    height: 45px;
  }
`;
Wrapper.LabelContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  grid-gap: 5px;
`;
Wrapper.LabelText = styled.div`
  font-size: 15px;
  width: 60px;
  color: ${({ isLogout }) => (isLogout ? "red" : "")};
  padding: 0 5px;
`;
Wrapper.Sure = styled.div`
  @media (max-width: 450px) {
    font-size: 15px;
  }
  @media (max-width: 350px) {
    font-size: 13px;
  }
`;
