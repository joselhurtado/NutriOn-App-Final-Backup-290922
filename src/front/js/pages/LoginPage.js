import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
	<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline">
				<h1 className='text-light text-center m-2'>HELLO, WELCOME BACK!</h1>
					<p className="text-light text-center m-2">Let’s start your healthy journey.</p>
					
				<div className="container introBTN">
					<label className="form-label text-light" for="formGroupExampleInput">Email Adrress</label>
					<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
					</div>
					<div className="container mt-2">
					<label className="form-label text-light" for="formGroupExampleInput">Password</label>
					<input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
					<small id="passwordHelpBlock" className="form-text text-muted">
  					<p className="text-light">Your password must be 8-20 characters long.</p>
					</small>
				
				<Link to="/">
					<span className="container btn btn-orange mt-4" href="#" role="button">
					LOGIN IN
					</span>
				</Link>

				<Link to="/ResetPassword">
					<span className="container btn btn-light mt-4" href="#" role="button">
					RESET PASSWORD
					</span>
				</Link>
				</div>

				<div className="row introBTN text-center">
					<div className="col-sm">
					<p className="text-light">Don’t have an account?</p>
					</div>
				<Link to="/WelcomePage">
					<div className="col-sm float-right">
					<p className="text-light">GET ONE</p>
					</div>
					</Link>
				</div>

			</div>

		</div>
	</div>
);
};

export default Login;