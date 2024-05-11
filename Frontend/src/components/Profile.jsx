import React from 'react';
import ProfileHeader from './ProfileHeader';
import '../assets/styles/profile.css'; 
import image2 from "../assets/image2.jpg";
import {BiBook,BiLogOut, BiSolidCameraPlus, BiSolidContact} from 'react-icons/bi';

const courses =[
  {
    title:'Overall Attendence',
    total:'300/365',
    icon:<BiBook/>,
  },
  {
    title:'Sample2',
    total:'sample2',
    icon:<BiSolidCameraPlus/>,
  },
  
];
const Profile = () =>{
  return(
  <div className="profile">
    <ProfileHeader/>

    <div className="user--profile">
      <div className="user--details">
        <img width='100px' height='100px' src={image2} alt=" "/>
        <h3 className='username'>Biswarup Rana</h3>
        <span className='profession'>Student
        </span>
      </div>
      <div className="user--courses">
        {courses.map((coures)=>(
          <div className='course'>
            <div className='course-deatils'>
              <div className='course-cover'>{coures.icon}</div>
              <div className="course-name">
                <h5 className='title'>{coures.title}</h5>
                <span classname='total'>{coures.total}</span>
              </div>
            </div>
            <div className='action'>:</div>
           </div>      
        ))}
      </div>
    </div>
  </div>
  );
};
export default Profile;