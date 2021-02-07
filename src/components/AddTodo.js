const AddTodo = () => {
  return (
    <div>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Enter todo'
        />
        <div className='input-group-append'>
          <button className='input-group-text bg-success text-white'>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
