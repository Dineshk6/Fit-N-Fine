import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Signup } from './Signup';
import { NavLink } from 'react-router-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import {Alert} from './Alert'
//import { ToastContainer, toast } from "react-toastify"; // npm part
//import "react-toastify/dist/ReactToastify.css"; // npm part
// import {Home} from './Home'
// import { Navigate } from "react-router-dom";



export const Login = (props) => {
    const logout = () => {

        localStorage.removeItem('token');
        // setIsLoggedin(false);
        
      };
    // const element = <Home />;


    // const showToastMessage = () => {
    //     toast.error('Invalid credentials!', {
    //         position: toast.POSITION.TOP_RIGHT
    //     });
    // };

    // const[jony, methstate]= useState(1);

    // const showsucmsg=()=>{
    //     toast.success('Successfully logged in !',{
    //         position: toast.POSITION.TOP_RIGHT
    //     })
    // }

    const [credentials, setCredentials] = useState({email: "", password: ""})
    const navigate = useNavigate();
//  const showSuccessToast = (msg) => {
//     toast.success(msg || `Compiled Successfully!`, {
//       position: "top-right",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });

        const json = await response.json()
        console.log(json);


        if (json.success)
        {

            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('email', json.email);
            navigate('/');
            
            // Save the auth token and redirect
           
            

        }
        else{
            
            // showSuccessToast(`please enter correct credentials!`);
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

   

    return (

        <div className='c1'>
            <div  className='container'>
            <div className="row">
                <div className="col-md-5 d-flex flex-column align-items-center text-black justify-content-center form">
                    <h1 className="display-4 fw-bolder">Welcome Back</h1>
                    <p className="lead text-center">Enter Your Credentials To Login</p>
                    <h5 className='mb-4'>OR</h5>
                    <NavLink to="/signup" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
                    {/* <button className="mb-3" href="/signup" ><a href="/signup" style={{textDecoration:'none',color:'#3A1212'}}>Signup</a></button> */}
                </div>
                <div className="col-md-6 p-5">
                    <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                    <>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 rounded-pill">Login</button>
                    </form>
                    </>
                </div>
            </div>
            
        </div>
        </div>
    )
}