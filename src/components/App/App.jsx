import { Routes ,Route } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';
import Pepole from '../Pepole/Pepole';
import Register from '../Register/Register';
import TvShows from '../TvShows/TvShows';
import LogOut from '../LogOut/LogOut';
import logo from './../../logo.svg';
import './App.css';


function App() {
  let [loginUser,setLoginUser]=useState(null);
  function setUserData(){
    let token=localStorage.getItem('token');
    let decode = jwtDecode(token);
    setLoginUser(decode);
  }
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='Home' element={<Home/>} />
    <Route path='Movies' element={<Movies/>} />
    <Route path='TvShows' element={<TvShows/>} />
    <Route path='Pepole' element={<Pepole/>} />
    <Route path='About' element={<About/>} />
    <Route path='Login' element={<Login/>} />
    <Route path='Register' element={<Register/>} />
    <Route path='LogOut' element={<LogOut/>} />
    <Route path='*' element={<NotFound/>} />
    </Routes>
      </div>
    
    
    </>
  );
}

export default App;
