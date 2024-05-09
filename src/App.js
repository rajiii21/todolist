import logo from './logo.svg';
import './App.css';
import Todolist from './Component/Todolist/Todolist';
import Home from './Component/Home';
import { Provider } from 'react-redux';
import Routing from './Routing';
import Store from './Component/Store';


function App() {
  return (
   <Provider store={Store}>
      <Routing/>
   </Provider>

  );
}

export default App;
