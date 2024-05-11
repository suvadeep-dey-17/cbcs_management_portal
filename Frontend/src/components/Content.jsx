import React from 'react';
import ContentHeader from "./ContentHeader";
import "../assets/styles/content.css";
import Card from './card';
import TeacherList from './TeacherList';
const Content = () =>{
  return (<div className='content'>
    <ContentHeader/>
    <Card/>
    <TeacherList/>
  </div>
  );
};
export default Content;