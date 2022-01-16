import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import SideBar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudents';
import AllStudents from './components/AllStudents';
import EditStudent from './components/EditStudent';

function App() {

  let data1 = {earning:"20,000",annual:"2,40,000",task:"20",pending:26}
  return <>
    <Router>
        <div style={{display:"grid",gridTemplateColumns:"17% 83%"}}>
        <div><SideBar/></div>
        <div>
          <Routes>
                <Route path ='/dashboard' element={<Dashboard value={data1}/>}/>
                <Route path = '/all-students' element={<AllStudents/>}/>
                <Route path = '/add-student' element={<AddStudent/>}/>
                <Route path = '/edit-student/:id' element={<EditStudent/>}/>
                <Route path ='/' element={<Dashboard value={data1}/>}/>
          </Routes>
        </div>
        </div>
    </Router>
  </>
}

export default App;