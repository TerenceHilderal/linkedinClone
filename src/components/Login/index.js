import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../Firebase';
import { NavLink, Redirect } from 'react-router-dom';

import './Login.css';

function Login() {
	const [name, setName] = useState('');
	const [profilePic, setProfilePic] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);
	const [error, setError] = useState(false);
	const [msgError, setMsgError] = useState('');
	const dispatch = useDispatch();

	const register = (e) => {
		e.preventDefault();
		if (!name) {
			// return alert('Sorry you should have a name');
			setError(true);
		}
		if (password.length < 6) {
			// return alert('Your password is too short.');
		}
		if (!email) {
			// return alert('Your email is badly formatted.');
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoUrl: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							}),
						);
					});
				setRedirect(true);
			})
			.catch((error) => {
				setError(true);
				setMsgError(error.message);
			});
	};

	return (
		<div className='login'>
			<img
				src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
				alt='linkedin logo'
			/>
			<form>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Fullname (required if registering)'
				/>
				<input
					type='text'
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					placeholder='Profile pic URL (optionnal)'
				/>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email'
				/>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
				/>
				{/* <button onClick={signinToApp}>Log In</button> */}
			</form>
			{error && <span className='error'>{msgError}</span>}

			<button className='login__register' onClick={register}>
				{' '}
				Register
			</button>
			{redirect && <Redirect to='/feed' />}

			<NavLink to='/signin'> Already have an account? Sign in</NavLink>
		</div>
	);
}

export default Login;
