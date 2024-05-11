import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const remember = e.target.remember.checked;
        // const response = await axios.post('http://localhost:8080/auth/register', { name, email, password, remember }, { withCredentials: true });
        // if (response.data.success) {
        //     navigate('/login');
        // }
    }

    // const googleAuth = () => {
    //     window.location.href = 'http://localhost:8080/auth/google/callback';
    // }

    return (
        <div className="container mt-4">
            <div className="row d-flex justify-content-center">
                <div className="border p-4 rounded" style={{width: "500px"}}>
                    <h2 className='text-center fw-bold'>Sign Up</h2>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="name" className="form-control" id="name" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="remember" />
                                <label className="form-check-label" htmlFor="remember">Remember me</label>
                            </div>
                            <Link to="/">Forgot Password?</Link>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 my-3 py-2 fs-5 fw-semibold">Sign Up</button>
                        <div className='mb-2'>
                            Already have an account? <Link to="/login">Login</Link>
                        </div>
                        {/* <p className='text-center'>Or</p>
                        <hr />
                        <div className="google d-flex" onClick={googleAuth}>
                            <div className="col-2 d-flex justify-content-center google-img">
                                <img src="google.png" alt="google" className='img-fluid rounded' />
                            </div>
                            <div className='google-button col-10'>Continue with Google</div>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;