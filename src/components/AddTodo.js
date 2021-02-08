import { useState } from 'react';

const AddTodo = ({ input, setInput, todoSubmited, isLoading }) => {
  return (
    <div>
      <form className='input-group mb-3' onSubmit={todoSubmited}>
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Enter todo'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className='input-group-append'>
          <button
            className='input-group-text bg-success text-white'
            disabled={isLoading ? 'disabled' : ''}
          >
            {isLoading ? 'Adding...' : 'Add Todo'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
