import React from "react";

const Result = ({ result }) => {
  return (
    <div className="result">
      {result && <p>Your Health Risk: <strong>{result}</strong></p>}
    </div>
  );
};

export default Result;
