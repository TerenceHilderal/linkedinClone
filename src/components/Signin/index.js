import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../Firebase';
import { NavLink, Redirect } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);
	const dispatch = useDispatch();

	const signinToApp = (e) => {
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
				setRedirect(true);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div>
			<div className='login'>
				<img
					src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
					alt='linkedin logo'
				/>
				<form>
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
				</form>
				<button className='login__register' onClick={signinToApp}>
					Sign In
				</button>
				{redirect && <Redirect to='/feed' />}

				<NavLink to='/'> Join us - Register</NavLink>
			</div>
		</div>
	);
};

export default Signin;
