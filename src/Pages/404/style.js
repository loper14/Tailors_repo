import styled from "styled-components";
import img404 from "../../Assets/images/notFound.gif";
export let Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  padding-top: 50px;
  text-align: center;
`;
Wrapper.BackImg = styled.div`
  width: 550px;
  height: 50%;
  background-image: url(${img404});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
`;
Wrapper.Title = styled.div`
  font-size: ${({ isText }) => (isText ? "20px" : "55pt")};
  margin-bottom: 15px;
  font-weight: ${({ isText }) => (isText ? "400" : "600")};
`;
