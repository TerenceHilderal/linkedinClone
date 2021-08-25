import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';

const App = () => {
	return (
		<div>
			<div className='app'>
				<Header />
				<div className='app__body'>
					<Sidebar />
				</div>
			</div>
		</div>
		// left side
		// feed
		// widgets
	);
};

export default App;
