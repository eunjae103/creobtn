import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";

const BtnWrap = styled.div`
  width: 100%;
  border: 1px solid red;
  margin: 0 auto;
`;

const ButtonsWrap = () => {
  return (
    <BtnWrap>
      <Buttons />
    </BtnWrap>
  );
};

export default ButtonsWrap;
