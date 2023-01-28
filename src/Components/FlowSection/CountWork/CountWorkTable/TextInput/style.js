import styled from "styled-components";

export let Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;
Wrapper.ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: center;
`;
Wrapper.InputContainer = styled.div`
  display: flex;
  grid-gap: 10px;
`;
