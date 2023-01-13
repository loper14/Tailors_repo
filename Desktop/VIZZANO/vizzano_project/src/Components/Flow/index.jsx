import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Wrapper } from "./style";
import Card from "../../Components/Generic/Card";
import countWorkImg from "../../Assets/images/countWork.jpg";
import { Title } from "../Generic/Style";
const Flow = () => {
  let { flowID } = useParams();
  let navigate = useNavigate();
  let date = new Date();
  return (
    <Wrapper>
      <Title>Flow {flowID}</Title>
      <Wrapper.CardContainer>
        <Card
          isFlowCard={true}
          title={"Attendance"}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWI7RudE4Ys5T3swbjotldgzJ_DwyhFTFNl-UObhsR42Cf_f0JUxbcsg3sA9Htg0GVp4&usqp=CAU"
          onClick={() =>
            navigate(`/flow/${flowID}/attendance/${date.getTime()}`)
          }
        />
        <Card
          isFlowCard={true}
          title={"Count work"}
          img={countWorkImg}
          onClick={() =>
            navigate(`/flow/${flowID}/countWork/${date.getTime()}`)
          }
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          isFlowCard={true}
          title={"OTK"}
          img="https://png.pngtree.com/png-vector/20200505/ourmid/pngtree-remote-team-working-meeting-online-or-work-from-home-png-image_2198791.jpg"
          onClick={() => navigate(`/flow/${flowID}/OTK/${date.getTime()}`)}
        />
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Flow;
