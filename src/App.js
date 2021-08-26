import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';
import { auth } from './Firebase';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout, login } from './features/userSlice';
import './App.css';

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
		// <div>
		<div className='app'>
			<Header />
			{!user ? (
				<Login />
			) : (
				<div className='app__body'>
					<Sidebar />
					<Feed />
					<Widgets />
				</div>
			)}
		</div>
		// </div>
		// left side
		// feed
		// widgets
	);
};

export default App;
