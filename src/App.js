import Profile from "./components/profile/Profile";
import {useState} from 'react'


function App() {
  const [show,setShow]=useState(false);
 
  //Toggle function show/hide
  const toggle=() =>{
    setShow(!show)
  }
  return (
    <>
    <button  onClick={toggle}>{show ? "HIDE":"SHOW"}</button>
    {show ? <Profile/> : null}
    </>
  );
}

export default App;
