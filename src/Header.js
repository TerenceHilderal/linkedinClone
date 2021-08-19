import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import FaceIcon from '@material-ui/icons/Face';

const Header = () => {
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://image.flaticon.com/icons/png/512/174/174857.png'
					alt=''
				/>
				<div className='header__search'>
					<SearchIcon />
					<input type='text' />
				</div>
			</div>
			<div className='header__right'>
				<HeaderOption Icon={HomeIcon} title='Home' />
				<HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
				<HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
				<HeaderOption Icon={ChatIcon} title='Messaging' />
				<HeaderOption Icon={NotificationsIcon} title='Notifications' />
				<HeaderOption Avatar={FaceIcon} title='Me' />
			</div>
		</div>
	);
};

export default Header;
