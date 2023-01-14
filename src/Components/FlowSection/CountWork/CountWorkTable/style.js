import styled from "styled-components";

export let Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
Wrapper.Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
Wrapper.TableWrapper = styled.div`
  @media (max-width: 500px) {
    width: 80%;
    overflow: auto;
  }
  @media (max-width: 350px) {
    width: 70%;
    overflow: auto;
  }
`;
Wrapper.Table = styled.table`
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;
Wrapper.Thead = styled.thead``;
Wrapper.Tbody = styled.tbody``;
Wrapper.Tr = styled.tr``;
Wrapper.Th = styled.th`
  padding: 7px 15px;
  border-right: ${({ isEnd }) =>
    !isEnd ? "1px solid rgb(240, 240, 240)" : ""};
  font-weight: bold;
  color: ${({ isDanger }) => (isDanger ? "rgb(211, 56, 13)" : "")};
  background: ${({ isDanger }) => (isDanger ? "rgb(255, 241, 232)" : "")};
  white-space: nowrap;
`;
Wrapper.Td = styled.td`
  padding: 7px 15px;
  border-right: 1px solid rgb(240, 240, 240);
  white-space: nowrap;
  color: ${({ isDanger }) => (isDanger ? "rgb(211, 56, 13)" : "")};
  background: ${({ isDanger }) => (isDanger ? "rgb(255, 241, 232)" : "")};
`;
