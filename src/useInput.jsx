import React, { useState } from "react";

const useInput = () => {
  const [input, setInput] = useState("");

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onSubmitHandler = (result) => {
    console.log(result);
  };

  return [input, onChangeHandler, onSubmitHandler];
};

export default useInput;
