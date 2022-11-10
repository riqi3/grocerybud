import React from "react";
import { v4 as uuid4 } from "uuid";

const Form = ({ input, setInput, list, setList }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setList([...list, { id: uuid4(), title: input, completed: false }]);
    setInput('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='e.g. Eggs'
        className='task-input'
        value={input}
        required
        onChange={onInputChange}
      />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
