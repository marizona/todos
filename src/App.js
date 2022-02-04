import './css/main.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <h1>Post it</h1>
      <ToastContainer />
     <Todos/>
     <DisplayTodos/>
    </div>
  );
}

export default App;
