import React, { useState } from "react";

import Button from "../UI/Button";
import "./GoalsInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  const isDisabled = enteredValue.trim().length === 0;
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isDisabled ? 'invalid' : ''}`}>
        <label >Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit" isDisabled={isDisabled}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
