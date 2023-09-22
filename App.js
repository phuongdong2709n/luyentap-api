
import './App.css';
import CreateUser from './components/CreateUser';
import EditStudent from './components/EditStudent';
import EditUsers from './components/EditUsers';
import ListStudent from './components/ListStudent';
import ListUsers from './components/ListUsers';
import { useState } from 'react';
import StudentList from './components/StudentList';
function App() {
 
  return (
    <div className="container border">
      <header>
        <div className="">
          <img src='https://devmaster.edu.vn/images/logo.png' alt='Devmaster' />
        </div>
      </header>
      <nav>

      </nav>
      <div className="boby-content">
        {/* <ListUsers /> */}
        {/* <CreateUser /> */}
        {/* <ListStudent></ListStudent> */}
        {/* <EditUsers/> */}
        {/* <EditStudent/> */}
        <StudentList/>

      </div>
      
    </div>
  );
}

export default App;
