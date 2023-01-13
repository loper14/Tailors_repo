import { Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import HomeComponent from "../../Components/Home";
import { Wrapper } from "./style";

const Home = () => {
  return (
    <Wrapper>
      <HomeComponent />
    </Wrapper>
  );
};

export default Home;
