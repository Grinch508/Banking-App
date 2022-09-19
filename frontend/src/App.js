
import './App.css';
import Login from './components/login/Login';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import CreateAnAccount from './components/createAnAccount/CreateAnAccount'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = '/' element = {<Login />}></Route>
        <Route path = 'createanaccount' element = {<CreateAnAccount />}></Route>
        <Route path = 'home' element= {<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
