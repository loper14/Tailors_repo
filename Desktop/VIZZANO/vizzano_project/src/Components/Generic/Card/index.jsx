import React from "react";
import { Wrapper } from "./style";

const Card = ({ isFlowCard, title, img, small, onClick }) => {
  return (
    <Wrapper.CardItem isFlowCard={isFlowCard} onClick={onClick}>
      <Wrapper.CardTitle isFlowCard={isFlowCard}>{title}</Wrapper.CardTitle>
      <Wrapper.CardImg isFlowCard={isFlowCard} small={small} src={img} />
    </Wrapper.CardItem>
  );
};

export default Card;
