
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Login from './Login/Login';
import Logout from './logout/Logout';
import Signup from './Signup/Signup';
function App() {
  const loggedIn=useSelector(selectUser)
  return (
    <div className="App">
      {/* {loggedIn?<Logout/> :<Login/>} */}
     <Signup/>
     {/* <Login/> */}
    </div>
  );
}

export default App;
