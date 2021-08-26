import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, userSlice } from './features/userSlice';
import { auth } from './Firebase';
import './Login.css';

function Login() {
	const [name, setName] = useState('');
	const [profilePic, setProfilePic] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profileUrl: userAuth.user.photoURL,
					}),
				);
			})
			.catch((error) => alert(error.message));
	};

	const register = () => {
		if (!name) {
			return alert('fuck');
		}
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoUrl: profilePic,
					})
					.then(() =>
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							}),
						),
					);
			})
			.catch((error) => alert(error.message));
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
					placeholder='fullname (required if registering)'
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
				<button onClick={loginToApp}>Sign In</button>
			</form>
			<p>
				Not a member?{' '}
				<span className='login__register' onClick={register}>
					{' '}
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
