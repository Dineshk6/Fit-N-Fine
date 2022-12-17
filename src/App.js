import React from 'react'
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
//import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

const App = () => {


  return (
    <Box width="400px" sx={{width: {x1: '1488px'}}} m="auto">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      {/* <Footer/> */}
    </Box>
  )
}

export default App
