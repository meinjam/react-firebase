import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { IoIosRadioButtonOff } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { AiOutlineEdit } from 'react-icons/ai';

const Todo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className='card d-flex justify-content-between p-3 flex-row'
        >
          <div className='left d-flex'>
            <div className='icon mr-1'>
              {todo.isCompleted ? (
                <IoIosCheckmarkCircleOutline style={{ color: '#00b341' }} />
              ) : (
                <IoIosRadioButtonOff style={{ color: '#ff9300' }} />
              )}
            </div>
            <p className='mb-0 align-self-center lin-through'>{todo.todo}</p>
          </div>
          <div className='right d-flex'>
            <AiOutlineEdit style={{ color: '#ff9300' }} />
            <IoTrashOutline
              onClick={() => console.log(todo.id)}
              style={{ color: '#ff2825' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
