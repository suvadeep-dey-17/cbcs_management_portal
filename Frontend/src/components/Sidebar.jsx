import React from 'react';
import {BiHome,BiTask,BiHelpCircle, BiLogOut, BiDownload, BiSolidNotification, } from 'react-icons/bi';
import '../assets/styles/Sidebar.css';
const Sidebar =({setWindow})=>
{
  return <div className='menu'>
    <div className="logo">
      <img src='src\assets\logo.jpg' alt='unversity logo'/>
      <h2>Vidyasagar Unversity</h2>
      </div>
      <span><h6>Mednipur , West-Bengal  721102</h6></span>
      

      <div className="menu--list">
        <a href="# " className='item active' onClick={()=>setWindow(1)}>
          <BiHome className="icons"/>
          Dashboard
        </a>
        <a href="# " className='item'onClick={()=>setWindow(2)}>
          <BiTask className="icons"/>
          Assignment
        </a>
        
        
        <a href="# " className='item' onClick={()=>setWindow(3)}>
          <BiSolidNotification className="icons"/>
          Notice Board (PDF)
        </a>
        <a href="# " className='item' onClick={()=>setWindow(4)}>
          <BiHelpCircle className='icons'/>
          Help
        </a>
        <a href="# " className='item' onClick={()=>setWindow(5)}>
          <BiLogOut className='icons'/>
          Log Out
        </a>

      </div>

    </div>;

};
export default Sidebar;