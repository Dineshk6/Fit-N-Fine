import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

export const Signup = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const {name, email, password} = credentials;

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });
        const json = await response.json();

        console.log(json);

        if (json) {
            // Save the auth token and redirect
            localStorage.setItem("token", json.authtoken);
            navigate("/");
        } 
        else {
            alert("Enter correct credentials !");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="c2">
            <div className="container ">
            {/* <div class="username">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"> Name : </label>
                        <input type="text" className="form-control" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address : </label>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email"aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password : </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            value={credentials.password}
                            onChange={onChange}
                            minLength={5} required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password : </label>
                        <input
                            type="password"
                            className="form-control"
                            name="cpassword"
                            id="cpassword"
                            onChange={onChange}
                            minLength={5} required
                        />
                    </div>

                    <button type="submit" className="mb-3">
                        Submit
                    </button>
                </form>
            </div> */}

            <div className="row justify-content-end">
                <div className="col-md-5 d-flex flex-column align-items-center text-black justify-content-center form order-2">
                    <h1 className="display-4 fw-bolder">Hello, Friend</h1>
                    <p className="lead text-center">Enter Your Details To Register</p>
                    <h5 className='mb-4'>OR</h5>
                    <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">
                        Login
                    </NavLink>
                </div>
                <div className="col-md-7 p-5">
                    <h1 className="display-6 fw-bolder mb-5 text-center">Register</h1>
                    <>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="name" class="form-label">Username</label>
                            <input type="text" class="form-control" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" value={credentials.email} onChange={onChange} id="email" name="email"aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" id="password" value={credentials.password} onChange={onChange} minLength={5} required/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="cpassword" class="form-control" name="cpassword" id="cpassword"  onChange={onChange} minLength={5} required/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
                        </div>
                        <button type="submit" class="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>
                    </form>
                    </>
                </div>
            </div>
        </div>
        </div>
    );
};