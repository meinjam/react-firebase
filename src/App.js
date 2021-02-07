import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Search from './components/Search';
import Todos from './components/Todos';

const App = () => {
  return (
    <div className='App'>
      <section className='py-5'>
        <div className='container todo'>
          <div className='row justify-content-center'>
            <div className='col-md-7'>
              <div className='contents'>
                <Header />
                <AddTodo />
                <Search />
                <Todos />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
