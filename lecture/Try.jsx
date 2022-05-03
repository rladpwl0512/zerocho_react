import React, { useState } from "react";

function Try({ tryInfo }) {
  const [result, setResult] = useState(tryInfo.result);

  const onClick = () => {
    setResult("1");
  };

  return (
    <li>
      <div onClick={onClick}>{result}</div>
    </li>
  );
}

export default Try;
