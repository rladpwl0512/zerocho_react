import React, { useState } from "react";
import Try from "./Try";

function Test() {
  const [info, setInfo] = useState(null);
  const [idx, setIdx] = useState(1);

  const onClickButton = (e) => {
    setInfo(idx);
  };

  return (
    <div>
      <button onClick={onClickButton}>버튼</button>
      <Try info={info} />
    </div>
  );
}

export default Test;
