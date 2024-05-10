import React from 'react';
import'../assets/styles/teacherLists.css';
import image1 from "../assets/image1.jpg";

const teachers =[
  {
    image:image1,
    name:'Prof. Debkumar Bera',
    Chapters:'Total 13 chapters',
    subject:'204-A CBCS paper name',
    
  },
  {
    image:image1,
    name:'Prof. Debkumar Bera',
    Chapters:'Total 24 chapters',
    subject:'204-B CBCS paper name',
    
  },
  
];

const TeacherList = () =>
{
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Teachers</h2>
        <select>
          <option value="paper 204-1">paper-204.1</option>
          <option value="paper  204-2">paper-204.2</option>
        </select>
      </div>
      <div className="list--container">
        {teachers.map((teacher,idx) => (
          <div className="list" key={idx+1}>
            <div className="teacher--detail">
              <img src={teacher.image} alt={teacher.name} />
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.Chapters}</span>
            <span>{teacher.subject}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
 export default TeacherList;