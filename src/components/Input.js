import React, { useState } from "react";
import { isNumeric } from "./validateNumber";
import { bubbleSort } from "../utils/bubblesort/index";
import { heapAscending } from "../utils/heapSort/index";
import styled from "styled-components";

const Form = styled.form`
  padding: 1em;
  width: 40%;
  background-color: #bcd4e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    background-color: #669bbc;
    cursor: pointer;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 0.5em 1em;
    border-radius: 0.5em;
  }

  button:hover {
    transform: scale(1.1);
    transition: 0.2s all;
  }

  input {
    padding: 1em;
    width: 80%;
    margin: 1em;
  }
`;

const Result = styled.div`
  background-color: #bcd4e6;
  width: 40%;
  padding: 1em;
  margin-top: 1em;
`;

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [ascendResult, setAscendResult] = useState("");
  const [descendResult, setDescendResult] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //빈칸제거
    const inputValueArray = inputValue.replace(/ /g, "").split(",");

    if (!inputValue) {
      alert("입력한 값이 없습니다.");
      setInputValue("");
    } else if (!inputValueArray.every(isNumeric)) {
      alert("숫자만 입력해주세요");
      setInputValue("");
    } else if (inputValueArray.every(isNumeric)) {
      const stringToNum = inputValueArray.map((string) => parseInt(string, 10));
      const ascendSorted = bubbleSort(stringToNum).join(",");
      const descendSorted = heapAscending(stringToNum).reverse().join(",");

      setAscendResult(ascendSorted);

      setTimeout(() => {
        setDescendResult(descendSorted);
      }, 3000);

      setInputValue("");
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <label>
          <h3>숫자를 입력해주세요. 예) 1,2,3,4</h3>
        </label>
        <input
          type="text"
          placeholder="숫자를 입력하세요"
          value={inputValue}
          onChange={onChange}
        />
        <button type="submit">시작</button>
      </Form>
      <Result>
        <h3>오름차순: {ascendResult}</h3>
      </Result>
      <Result>
        <h3>내림차순: {descendResult}</h3>
      </Result>
    </>
  );
};

export default Input;
