import { DiReact } from 'react-icons/di';

const Header = ({ showHide, toogleAddTodo }) => {
  return (
    <div className='header d-flex justify-content-between mb-3'>
      <h4 className='align-self-center font-weight-bold mb-0'>
        <DiReact className='react-logo' />
        Todo App
      </h4>
      <button
        className='btn align-self-center text-white'
        onClick={showHide}
        style={
          toogleAddTodo ? { background: '#f31507' } : { background: '#28a745' }
        }
      >
        {toogleAddTodo ? 'Close' : 'Add Todo'}
      </button>
    </div>
  );
};

export default Header;
