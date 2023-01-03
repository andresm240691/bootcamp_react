import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'
import  NotFoundPage from './pages/404/NotFoundPage'
import HomePage from './pages/home/HomePage'
import AboutPages from './pages/about/AboutPages'
import ProfilePage from './pages/profile/ProfilePage'
import TaskListComponent from './components/containers/task_list'
import TaskDetailPage from './pages/task/TaskDetailPage'
import LoginPage from './pages/auth/LoginPage'


const AppRoutingOne = () => {


  let logged =  true;
  
  let taskList = [
    {
      id: 1,
      name: "Task1",
      description: "Description task"
    },
    {
      id: 2,
      name: "Task1",
      description: "Description task"
    },
    
  ]

  useEffect(() => {
    logged =  localStorage.getItem('credentials');
    console.log("User Logged?", logged);
  }, []);

  function getitemTask(id){
    return taskList[id-1];
  }

  return (
    <Router>
        <div>
            <aside>
                <Link to='/'>| HOME | </Link>
                <Link to='/about'>| ABOUT | </Link>
                <Link to='/login'>| Login | </Link>
                <Link to='/task/1' state={getitemTask(1)}>| TASK 1 | </Link>
                <Link to='/task/2' state={getitemTask(2)}>| TASK 2 | </Link>
            </aside>
            <main>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={logged? <Navigate to="/"/> :<LoginPage/>}/>
                <Route path='/about' element={<AboutPages/>}/>
                <Route path='/profile' element={logged ? <ProfilePage/>: <Navigate replace to="/login" />}/>
                <Route path='/task' element={<TaskListComponent/>}/>
                <Route path='/task/:id' element={<TaskDetailPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
            </main>
        </div>
        
    </Router>
  )
}

export default AppRoutingOne