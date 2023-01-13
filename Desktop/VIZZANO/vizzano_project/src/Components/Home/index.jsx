import React from "react";
import Card from "../Generic/Card";
import { Wrapper } from "./style";
import reportImg from "../../Assets/images/report.jpg";
import storeImg from "../../Assets/images/store.jpg";
import { useNavigate } from "react-router-dom";
import { Title } from "../Generic/Style";
const HomeComponent = () => {
  let navigate = useNavigate();
  return (
    <Wrapper>
      <Title>Flows</Title>
      <Wrapper.FlowsContainer>
        <Card
          small={true}
          title=" Flow 1"
          img="https://img.freepik.com/premium-vector/tailor-white-background_1308-15611.jpg?w=2000"
          onClick={() => {
            navigate("/flow/1");
          }}
        />
        <Card
          title=" Flow 2"
          img="https://thumbs.dreamstime.com/b/tailor-man-sitting-behind-table-sewing-machine-holding-red-cloth-fabric-isolated-white-background-fashion-designer-working-169598660.jpg"
          onClick={() => {
            navigate("/flow/2");
          }}
        />
      </Wrapper.FlowsContainer>
      <Wrapper.FlowsContainer>
        <Card
          title=" Flow 3"
          img="https://img.freepik.com/premium-vector/male-dressmaker-sewing-clothes-by-sewing-machine-cartoon-vector-illustration-white-background_223337-4858.jpg?w=2000"
          onClick={() => {
            navigate("/flow/3");
          }}
        />
        <Card
          small={true}
          title=" Flow 4"
          img="https://media.istockphoto.com/id/92722800/vector/tailor-pro.jpg?s=612x612&w=0&k=20&c=YjTZGikRbuncjhTKwewkPySX6nCcaoaVII8vXpk29Kg="
          onClick={() => {
            navigate("/flow/4");
          }}
        />
      </Wrapper.FlowsContainer>
      <Wrapper.FlowsContainer>
        <Card
          title=" Flow 5"
          img="https://thumbs.dreamstime.com/b/woman-tailor-sewing-red-dress-craft-hobby-profession-colorful-character-vector-illustration-isolated-white-background-93492904.jpg"
          onClick={() => {
            navigate("/flow/5");
          }}
        />
      </Wrapper.FlowsContainer>

      <Title>Store and Report</Title>
      <Wrapper.FlowsContainer>
        {" "}
        <Card title="Store" img={storeImg} />
        <Card title="Report" small={true} img={reportImg} />
      </Wrapper.FlowsContainer>
    </Wrapper>
  );
};

export default HomeComponent;
