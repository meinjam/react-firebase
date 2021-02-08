import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Search from './components/Search';
import Todos from './components/Todos';
import { db } from './firebase/Config';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [todos, setTodos] = useState(null);
  const [toogleAddTodo, setToggleAddTodo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // Add todo
  const [input, setInput] = useState('');
  const todoSubmited = (e) => {
    e.preventDefault();

    const getInput = input.trim();
    if (getInput === '') {
      toast.error('Please enter some todo.', {
        autoClose: 3000,
      });
      return false;
    }

    const todo = {
      todo: input,
      isCompleted: false,
      id: uuidv4(),
    };
    setIsLoading(true);
    db.collection('todos')
      .add(todo)
      .then(() => {
        toast.success('Congrats, todo added successfully!', {
          autoClose: 3000,
        });
        setTodos([todo, ...todos]);
        setInput('');
        setToggleAddTodo(false);
        setIsLoading(false);
      })
      .then((err) => {
        console.log(err);
      });
  };
  // End Add Todo

  const fetchData = async () => {
    const data = await db.collection('todos').get();
    setTodos(data.docs.map((item) => ({ id: item.id, ...item.data() })));
  };

  const showHide = () => {
    setToggleAddTodo(!toogleAddTodo);
  };

  return (
    <div className='App'>
      <section className='py-5'>
        <div className='container todo'>
          <div className='row justify-content-center'>
            <div className='col-md-7'>
              <div className='contents'>
                <Header showHide={showHide} toogleAddTodo={toogleAddTodo} />
                {toogleAddTodo && (
                  <AddTodo
                    input={input}
                    setInput={setInput}
                    todoSubmited={todoSubmited}
                    isLoading={isLoading}
                  />
                )}
                <Search />
                {!todos && 'Loading...'}
                {todos && <Todos todos={todos} />}
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
