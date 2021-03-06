import React from "react";
import styled from "styled-components";

const Buttons = () => {
  return (
    <>
      <SelectBtnWrap>
        <SelectBtn>버튼1</SelectBtn>
        <SelectBtn>버튼2</SelectBtn>
        <SelectBtn>버튼3</SelectBtn>
        <SelectBtn>버튼4</SelectBtn>
        <SelectBtn>버튼5</SelectBtn>
      </SelectBtnWrap>

      <ConditionWrap>
        <h3>2조리부 : 0분 25초</h3>
        <button>세척가능</button>
      </ConditionWrap>
      <InductionWrap>
        <LeftInduction>
          <h4>인덕션왼쪽</h4>
          <ul>
            <li>끔</li>
            <li>약불</li>
            <li>중불</li>
            <li>강불</li>
          </ul>
        </LeftInduction>
        <MiddleInduction>
          <PotAngleWrap>
            <h4>팟각도</h4>
            <ul>
              <li>재료담기</li>
              <li>면요리</li>
              <li>기본요리</li>
              <li>음식담기</li>
              <li>세척준비</li>
            </ul>
          </PotAngleWrap>
          <PotSpinWrap>
            <h4>팟회전</h4>
            <ul>
              <li>역회전</li>
              <li>정지</li>
              <li>원점정지</li>
              <li>정회전</li>
            </ul>
          </PotSpinWrap>
          <CleanWrap>
            <h4>세척</h4>
            <ul>
              <li>세척중</li>
              <li>정지</li>
            </ul>
          </CleanWrap>
        </MiddleInduction>
        <RigthInduction>
          <h4>인덕션오른쪽</h4>
          <ul>
            <li>끔</li>
            <li>약불</li>
            <li>중불</li>
            <li>강불</li>
          </ul>
        </RigthInduction>
      </InductionWrap>
    </>
  );
};
const SelectBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 50px 0;
`;

const SelectBtn = styled.button`
  width: 100px;
  height: 50px;
  margin-right: 20px;
  border: none;
  background: none;
  background: #ffb600;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    color: #333;
  }
`;

const ConditionWrap = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  h3 {
    border: 1px solid red;
    font-size: 1.5rem;
  }
  button {
    display: flex;
    padding: 20px 40px;
    border-radius: 40px;
    font-size: 1.25rem;
  }
`;
const InductionWrap = styled.div`
  display: flex;
`;
const LeftInduction = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
  h4 {
    color: #333;
    text-align: center;
    font-size: 1.2rem;
  }
  ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
  }
  li {
    width: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 20px;
    border: 2px solid #badd7a;
    border-radius: 10px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    background: #f2fcdf;
    :hover {
      background: #a0c657;
      color: #fff;
    }
  }
`;

const MiddleInduction = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
const PotAngleWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  h4 {
    color: #333;
    text-align: center;
    font-size: 1.2rem;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 auto;
    padding: 0;
  }
  li {
    width: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 1rem;
    margin-right: 20px;
    border: 2px solid #9898ff;
    border-radius: 10px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    background: #e0e0ff;
    :hover {
      background: #9393ff;
      color: #fff;
    }
  }
`;

// const PotAngleTitle = styled.h4`
//   border: 1px solid red;

// `;

const PotSpinWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  h4 {
    color: #333;
    text-align: center;
    font-size: 1.2rem;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 auto;
    padding: 0;
  }
  li {
    width: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 1rem;
    margin-right: 20px;
    border: 2px solid #8ddecf;
    border-radius: 10px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    background: #d1f4ed;
    :hover {
      background: #53ccb5;
      color: #fff;
    }
  }
`;

const CleanWrap = styled.div`
  margin: 0 auto;
  h4 {
    color: #333;
    text-align: center;
    font-size: 1.2rem;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0 auto;
    padding: 0;
  }
  li {
    width: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 1rem;
    margin-right: 20px;
    border: 2px solid #e0e68f;
    border-radius: 10px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    background: #fbffcb;
    :hover {
      background: #d4e555;
      color: #fff;
    }
  }
`;

const RigthInduction = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
  h4 {
    color: #333;
    text-align: center;
    font-size: 1.2rem;
  }
  ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
  }
  li {
    width: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 20px;
    border: 2px solid #badd7a;
    border-radius: 10px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    background: #f2fcdf;
    :hover {
      background: #a0c657;
      color: #fff;
    }
  }
`;

export default Buttons;
