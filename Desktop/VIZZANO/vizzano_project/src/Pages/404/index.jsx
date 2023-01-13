import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./style";
const notFound = () => {
  return (
    <Wrapper>
      <Wrapper.BackImg></Wrapper.BackImg>
      <Wrapper.Title>Oops!</Wrapper.Title>
      <Wrapper.Title isText={true}>404 - Page not found</Wrapper.Title>
      <Link to={"/"}>Go to Home</Link>
    </Wrapper>
  );
};

export default notFound;
