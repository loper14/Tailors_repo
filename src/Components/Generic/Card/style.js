import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.CardItem = styled.div`
  cursor: pointer;
  background: rgb(255, 255, 255);
  width: fit-content;
  height: fit-content;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;
  padding: ${({ isFlowCard }) => (isFlowCard ? "15px 110px" : "10px 50px")};
  margin-bottom: 20px;
  gap: 10px;
  @media (max-width: 800px) {
    padding: ${({ isFlowCard }) => (isFlowCard ? "5px 175px" : "5px 35px")};
  }
  @media (max-width: 550px) {
    padding: ${({ isFlowCard }) => (isFlowCard ? "5px 105px" : "5px 35px")};
  }

  @media (max-width: 370px) {
    padding: ${({ isFlowCard }) => (isFlowCard ? "5px 85px" : "5px 35px")};
  }
`;
Wrapper.CardTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: rgb(0, 0, 0);
  white-space: nowrap;
  @media (max-width: 900px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
Wrapper.CardImg = styled.img`
  width: 133px;
  height: 192px;
  transform: ${({ small }) => (small ? "scale(0.8)" : "")};
  @media (max-width: 1100px) {
    width: 113px;
    height: 182px;
  }
  @media (max-width: 900px) {
    width: 103px;
    height: 162px;
  }
  @media (max-width: 500px) {
    width: 90px;
    height: 140px;
  }
  @media (max-width: 370px) {
    width: 80px;
    height: 100px;
  }
`;
