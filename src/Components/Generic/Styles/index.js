import Input from "antd/es/input/Input";
import styled from "styled-components";

export let Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 70px;
  color: rgb(0, 0, 0);
  text-align: center;
  margin: 35px;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;
export let Wrapper = styled.div`
  padding-top: 10px;
`;
Wrapper.InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;
Wrapper.Label = styled.div`
  margin-top: 5px;
`;
Wrapper.Input = styled(Input)``;
