import { useState } from "react";
import styled from "styled-components";

const Buttons = () => {
  const [selectButtons, setSelectButtons] = useState([
    { id: 1, text: "1팟" },
    { id: 2, text: "2팟" },
    { id: 3, text: "3팟" },
    { id: 4, text: "4팟" },
    { id: 5, text: "5팟" },
    { id: 6, text: "6팟" },
  ]);

  const buttonValueSetting = (e) => {
    setSelectButtons(e.target.value);
  };

  const [leftButtons, setLeftButtons] = useState([
    { id: 1, text: "끔" },
    { id: 2, text: "약불" },
    { id: 3, text: "중불" },
    { id: 4, text: "강불" },
  ]);

  const [potAngleButtons, setPotAngleButtons] = useState([
    { id: 1, text: "재료담기" },
    { id: 2, text: "면요리" },
    { id: 3, text: "기본요리" },
    { id: 4, text: "음식담기" },
    { id: 5, text: "세척준비" },
  ]);

  const [potSpinButtons, setSpinButtons] = useState([
    { id: 1, text: "역회전" },
    { id: 2, text: "정지" },
    { id: 3, text: "원점정지" },
    { id: 4, text: "정회전" },
  ]);

  const [cleanButtons, setCleanButtons] = useState([
    { id: 1, text: "세척중" },
    { id: 2, text: "정지" },
  ]);

  const [rightButtons, setRightButtons] = useState([
    { id: 1, text: "끔" },
    { id: 2, text: "약불" },
    { id: 3, text: "중불" },
    { id: 4, text: "강불" },
  ]);
  const [recipeName, setRecipeName] = useState("");
  const [recipeMemo, setRecipeMemo] = useState("");
  const onChangeName = (e) => {
    setRecipeName(e.target.value);
  };
  const onChangeMemo = (e) => {
    setRecipeMemo(e.target.value);
  };
  return (
    <>
      <SelectBtnWrap>
        <SelectBtn>
          {selectButtons.map((b) => {
            return (
              <li key={b.id} onClick={buttonValueSetting}>
                {b.text}
              </li>
            );
          })}
        </SelectBtn>
        <h3>{selectButtons.text}조리부 : 0분 0초</h3>
        <button>세척가능</button>
      </SelectBtnWrap>

      <InductionWrap>
        <LeftInduction>
          <h4>인덕션왼쪽</h4>
          <ul>
            {leftButtons.map((b) => {
              return <li key={b.id}>{b.text}</li>;
            })}
          </ul>
        </LeftInduction>

        <MiddleInduction>
          <PotAngleWrap>
            <h4>팟각도</h4>
            <ul>
              {potAngleButtons.map((b) => {
                return <li key={b.id}>{b.text}</li>;
              })}
            </ul>
          </PotAngleWrap>
          <PotSpinWrap>
            <h4>팟회전</h4>
            <ul>
              {potSpinButtons.map((b) => {
                return <li key={b.id}>{b.text}</li>;
              })}
            </ul>
          </PotSpinWrap>
          <CleanWrap>
            <h4>세척</h4>
            <ul>
              {cleanButtons.map((b) => {
                return <li key={b.id}>{b.text}</li>;
              })}
            </ul>
          </CleanWrap>
        </MiddleInduction>
        <RigthInduction>
          <h4>인덕션오른쪽</h4>
          <ul>
            {rightButtons.map((b) => {
              return <li key={b.id}>{b.text}</li>;
            })}
          </ul>
        </RigthInduction>
      </InductionWrap>
      <Memowrap>
        <input
          type="text"
          value={recipeName}
          onChange={onChangeName}
          placeholder="레시피 이름을 입력해주세요."
        ></input>
        <textarea
          value={recipeMemo}
          onChange={onChangeMemo}
          placeholder="메모를 입력해주세요."
        ></textarea>
        <div>
          <p>레시피 : {recipeName}</p>
          <p>메모 : {recipeMemo}</p>
          <p>기기작동기록 : </p>
        </div>
      </Memowrap>
    </>
  );
};
const SelectBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 0;
  overflow: hidden;
  h3 {
    text-align: center;

    font-size: 1.5rem;
  }
  button {
    width: 150px;
    height: 50px;
    margin: 0 auto;
    border-radius: 40px;
    font-size: 1.25rem;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    background: #e0e0e0;
    border: 1px solid #5a7c84;
  }
`;

const SelectBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  li {
    list-style: none;
    width: 100px;
    line-height: 50px;
    margin-right: 20px;
    border: none;
    background: none;
    background: #ffb600;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    :hover {
      color: #333;
    }
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
    width: 90px;
    line-height: 90px;
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
    width: 90px;
    line-height: 90px;
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
    width: 90px;
    line-height: 90px;
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
    width: 90px;
    line-height: 90px;
    text-align: center;
    font-size: 1rem;
    margin-right: 20px;
    border: 2px solid #8ee7fc;
    border-radius: 10px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    background: #def9ff;
    :hover {
      background: #4ccae8;
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
    width: 90px;
    line-height: 90px;
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

const Memowrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 50px auto;
  input {
    height: 30px;
  }
  textarea {
    margin-top: 10px;
    height: 100px;
  }
`;

export default Buttons;
