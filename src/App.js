import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import Signin from './components/Signin';
import Widgets from './components/Widgets';
import { auth } from './Firebase';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout, login } from './features/userSlice';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// https://linkedin-clone-a024d.web.app
const App = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					}),
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);

	return (
		<Router>
			<div className='app'>
				<Header />
				<Route exact path='/signin' component={Signin} />
				{!user ? (
					// <Login />
					<Route exact path='/' component={Login} />
				) : (
					// <Signin />
					<div className='app__body'>
						<Sidebar />
						{/* <Feed /> */}
						<Route exact path='/feed' component={Feed} />
						<Widgets />
					</div>
				)}
			</div>
		</Router>
	);
};

export default App;
