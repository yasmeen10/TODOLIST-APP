import React, { useState, useEffect, useRef } from 'react';

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = event => {
    setInput(event.target.value);
  };
  const handleOnAddToList = event => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random()*10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleOnAddToList} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleOnAddToList} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleOnAddToList} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}
