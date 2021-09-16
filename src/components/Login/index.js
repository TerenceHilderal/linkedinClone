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
	const dispatch = useDispatch();

	const register = () => {
		if (!name) {
			return alert('Sorry');
		}
		auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
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
					setRedirect(true);
				})
				.catch((error) => console.error(error));
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
			<button className='login__register' onClick={register}>
				Register
			</button>
			{redirect && <Redirect to='/feed' />}
			<NavLink to='/signin'> Already have an account? Sign in</NavLink>
		</div>
	);
}

export default Login;
