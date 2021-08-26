import React from 'react';
import './Login.css';
function Login() {
	const register = () => {};

	const loginToApp = () => {};

	return (
		<div className='login'>
			<img
				src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
				alt='linkedin logo'
			/>
			<form>
				<input type='text' placeholder='fullname (required if registering' />
				<input type='text' placeholder='Profile pic URL (optionnal)' />
				<input type='email' placeholder='Email' />
				<input type='password' placeholder='Email' />
				<button onClick={loginToApp}>Sign In</button>
			</form>
			<p>
				Not a number?{' '}
				<span className='login__register' onClick={register}>
					{' '}
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
