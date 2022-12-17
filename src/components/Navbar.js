import React from 'react'
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material'
import { useNavigate } from 'react-router-dom';


//import Logo from '../assets/images/logo2.jpg';
const Navbar = () => {
  const navigate = useNavigate();
  const token=localStorage.getItem('email');
  return (


    // <Stack class="nav"
    // direction="row"
    // justifyContent="space-around"
    // sx={{gap:{sm:'122px', xs:'40px' },mt:{sm:'32px',xs:'20px'},justifyContent:'None'}}px='20px'>
      
    //   <Link to="/">
    //     <img src={Logo} alt="Logo" style={{
    //       width:'150px',height:'100px',
    //       margin:'0 20px'}}/>
    //   </Link>
      <Stack class="nav"
      direction="row"
      // justifyContent="center"
      sx={{gap:{sm:'70px', xs:'40px' },mt:{sm:'32px',xs:'20px'},justifyContent:'None'}}px='20px'
      gap="40px"
      fontSize="24px"
      alignItems="flex-end"> 
        <Link to="/" style={{textDecoration:'none',color:'#3A1212', borderBottom:'3px solid #ff2625'}}>Home </Link>
      <a href="#exercises" style={{textDecoration:'none',color:'#3A1212'}}>Exercises</a>
      <a href="/login" style={{textDecoration:'none',color:'#3A1212'}}>Login</a>
      {/* <a href="/signup" style={{textDecoration:'none',color:'#3A1212'}}>Signup</a> */}
      <button className="btn btn-primary mx-2" variant="outline-warning" onClick={() => {
                        localStorage.clear()
                        navigate('/login')
                    }}>LOGOUT</button>

                    <button>hello, {token}</button>
      </Stack>
    // </Stack>
  )
}

export default Navbar
