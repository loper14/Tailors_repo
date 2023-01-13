import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 70px;
  color: rgb(0, 0, 0);
  text-align: center;
  margin: 35px;
`;
Wrapper.CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    display: grid;
  }
`;
