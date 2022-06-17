import { useState } from "react";
import styled from "styled-components";
import moment from "moment";
const Buttons = () => {
  const selectButtons = [0, 1, 2, 3, 4, 5];
  const [changeButtons, setChangeButtons] = useState("");

  const onClickChange = (e) => {
    setChangeButtons(Number(e.target.value));
  };

  const [leftButtons, setLeftButtons] = useState([
    { id: 1, title: "인덕션왼쪽", value: "끔" },
    { id: 2, title: "인덕션왼쪽", value: "약불" },
    { id: 3, title: "인덕션왼쪽", value: "중불" },
    { id: 4, title: "인덕션왼쪽", value: "강불" },
  ]);

  const [potAngleButtons, setPotAngleButtons] = useState([
    { id: 1, title: "팟각도", value: "재료담기" },
    { id: 2, title: "팟각도", value: "면요리" },
    { id: 3, title: "팟각도", value: "기본요리" },
    { id: 4, title: "팟각도", value: "음식담기" },
    { id: 5, title: "팟각도", value: "세척준비" },
  ]);

  const [potSpinButtons, setSpinButtons] = useState([
    { id: 1, title: "팟회전", value: "역회전" },
    { id: 2, title: "팟회전", value: "정지" },
    { id: 3, title: "팟회전", value: "원점정지" },
    { id: 4, title: "팟회전", value: "정회전" },
  ]);

  const [cleanButtons, setCleanButtons] = useState([
    { id: 1, title: "세척", value: "세척중" },
    { id: 2, title: "세척", value: "정지" },
  ]);

  const [rightButtons, setRightButtons] = useState([
    { id: 1, title: "인덕션오른쪽", value: "끔" },
    { id: 2, title: "인덕션오른쪽", value: "약불" },
    { id: 3, title: "인덕션오른쪽", value: "중불" },
    { id: 4, title: "인덕션오른쪽", value: "강불" },
  ]);

  const [recipes, setRecipes] = useState({
    recipeName: "",
    recipeMemo: "",
  });
  const { recipeName, recipeMemo } = recipes;
  const onChange = (e) => {
    const { value, name } = e.target;
    setRecipes({
      ...recipes,
      [name]: value,
    });
  };
  const [lapTime, setLapTime] = useState({ title: "", value: "" });
  const { title, value } = lapTime;
  const onClickSave = (e) => {
    const { value, title } = e.target;
    setLapTime({ ...lapTime, [title]: value });
    // setLapTime(e.target.attributes.title.textContent);
    console.log(e);
  };

  return (
    <>
      <SelectBtnWrap>
        <SelectBtn>
          {selectButtons.map((b, index) => {
            return (
              <li key={index} value={index} onClick={onClickChange}>
                {b + 1}번
              </li>
            );
          })}
        </SelectBtn>
        <h3>{changeButtons < 6 ? changeButtons + 1 : 0}조리부 : 0분 0초</h3>
        <button>세척가능</button>
      </SelectBtnWrap>

      <InductionWrap>
        <LeftInduction>
          <h4>인덕션왼쪽</h4>
          <ul>
            {leftButtons.map((b) => {
              return (
                <li
                  key={b.id}
                  title={b.title}
                  value={b.value}
                  onClick={onClickSave}
                >
                  {b.value}
                </li>
              );
            })}
          </ul>
        </LeftInduction>

        <MiddleInduction>
          <PotAngleWrap>
            <h4>팟각도</h4>
            <ul>
              {potAngleButtons.map((b) => {
                return (
                  <li key={b.id} value={b.value} onClick={onClickSave}>
                    {b.value}
                  </li>
                );
              })}
            </ul>
          </PotAngleWrap>
          <PotSpinWrap>
            <h4>팟회전</h4>
            <ul>
              {potSpinButtons.map((b) => {
                return (
                  <li key={b.id} value={b.value} onClick={onClickSave}>
                    {b.value}
                  </li>
                );
              })}
            </ul>
          </PotSpinWrap>
          <CleanWrap>
            <h4>세척</h4>
            <ul>
              {cleanButtons.map((b) => {
                return (
                  <li key={b.id} value={b.value} onClick={onClickSave}>
                    {b.value}
                  </li>
                );
              })}
            </ul>
          </CleanWrap>
        </MiddleInduction>
        <RigthInduction>
          <h4>인덕션오른쪽</h4>
          <ul>
            {rightButtons.map((b) => {
              return (
                <li key={b.id} value={b.value} onClick={onClickSave}>
                  {b.value}
                </li>
              );
            })}
          </ul>
        </RigthInduction>
      </InductionWrap>
      <Memowrap>
        <input
          name="recipeName"
          value={recipeName}
          onChange={onChange}
          placeholder="레시피 이름을 입력해주세요."
        ></input>
        <textarea
          name="recipeMemo"
          value={recipeMemo}
          onChange={onChange}
          placeholder="메모를 입력해주세요."
        ></textarea>
        <div>
          <p>레시피 : {recipeName}</p>
          <p>메모 : {recipeMemo}</p>
          <p>
            기기작동기록 : {title}
            {value}
          </p>
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
