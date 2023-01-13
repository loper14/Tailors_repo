import styled from "styled-components";
import { Input } from "antd";
export let Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
Wrapper.FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  grid-gap: 20px;
  @media (max-width: 400px) {
  }
`;
Wrapper.Input = styled(Input)`
  width: 335px;
  @media (max-width: 400px) {
    width: 255px;
  }
`;
