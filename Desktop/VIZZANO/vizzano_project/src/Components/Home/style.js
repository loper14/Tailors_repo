import styled from "styled-components";

export let Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
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
Wrapper.FlowsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  width: 60%;
  margin: 0 auto;
  @media (max-width: 1100px) {
    width: 65%;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
`;
