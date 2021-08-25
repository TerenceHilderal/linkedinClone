import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';

function Sidebar() {
	const recentItem = (topic) => {
		return (
			<div className='sidebar__recentItem'>
				<span className='sidebar__hash'>#</span>
				<p>{topic}</p>
			</div>
		);
	};

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
					alt=''
				/>
				<Avatar className='sidebar__avatar' />
				<h2>Terence hilderal</h2>
				<h4>terencehilderal@gmail.com</h4>
			</div>
			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who viewed you</p>
					<p className='sidebar__statNumber'>2.544</p>
				</div>
				<div className='sidebar__stat'>
					<p>VIews on post</p>
					<p className='sidebar__statNumber'>2.524</p>
				</div>{' '}
			</div>
			<div className='sidebar__bottom'>
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('vuejs')}
				{recentItem('programming')}
				{recentItem('firebase')}
				{recentItem('nodejs')}
			</div>
		</div>
	);
}

export default Sidebar;
