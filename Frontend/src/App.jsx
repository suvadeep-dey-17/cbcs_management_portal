
import React,{useState} from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import '../src/App.css';
import AssignmentList from './components/AssignmentList';
import Notice from './components/Notice';
import Help from './components/Help';
import { BiHelpCircle } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";


function App() {
   const [window,setWindow]=useState(1)
   const navigate = useNavigate();



  return (
    <div className='dashboard'>
      <Sidebar setWindow={setWindow}/>
      {
        window == 1 ?
        (
      <div className='dashboard--content'>
        <Content />
        <Profile />
      </div>
        ):
        window==2?
         <AssignmentList assignments={[]} />
        :
        window == 3?
        <Notice />
        :window == 4?
        <Help/>
        :window == 5?

         navigate("/login")
         :""
      }
    </div>
  );
};
export default App;
