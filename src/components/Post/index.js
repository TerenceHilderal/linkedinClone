import React, { forwardRef } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import InputOption from '../InputOption';
import { ThumbUpAltOutlined } from '@material-ui/icons';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	return (
		<div ref={ref} className='post'>
			<div className='post__header'>
				<Avatar src={photoUrl}></Avatar>

				<div className='post__info'>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div className='post__body'>
				<p>{message}</p>
			</div>

			<div className='post__buttons'>
				<InputOption Icon={ThumbUpAltOutlined} title='Like' color='blue' />
				<InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
				<InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
				<InputOption Icon={SendOutlinedIcon} title='Send' color='green' />
			</div>
		</div>
	);
});

export default Post;
