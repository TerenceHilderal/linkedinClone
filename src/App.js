import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './App.css';

const App = () => {
	const user = useSelector(selectUser);
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
