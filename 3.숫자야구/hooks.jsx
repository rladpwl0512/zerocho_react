import React, { useState } from "react";
import Try from "./Try";

function getFourRandomNumbers() {
  return Array.from(
    { length: 4 },
    () => Math.floor(Math.random() * (9 - 1 + 1)) + 1
  );
}
function NumberBaseball() {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getFourRandomNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런!");
      setTries((prevTries) => [...prevTries, { try: value, result: "홈런! " }]);

      alert("게임을 다시 시작합니다!");
      setValue("");
      setAnswer(getFourRandomNumbers());
      setTries([]);
    } else {
      console.log(answer);
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")}였습니다`);

        alert("게임을 다시 시작합니다!");
        setValue("");
        setAnswer(getFourRandomNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setValue("");
        setTries((prevTries) => [
          ...prevTries,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          },
        ]);
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도`} tryInfo={v} />;
        })}
      </ul>
    </>
  );
}

export default NumberBaseball;
