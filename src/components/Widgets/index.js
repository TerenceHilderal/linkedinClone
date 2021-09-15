import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
	const newsArticle = (heading, subtitle) => {
		return (
			<div className='widgets__article'>
				<div className='widgets__articleLeft'>
					<FiberManualRecordIcon />
				</div>
				<div className='widgets__articleRight'>
					<h4>{heading}</h4>
					<p>{subtitle}</p>
				</div>
			</div>
		);
	};
	return (
		<div className='widgets'>
			<div className='widgets__header'>
				<h2>Linkedin News</h2>
				<InfoIcon />
			</div>
			{newsArticle('Terence Hilderal', 'To Hire - 9099 readers')}
			{newsArticle('Terence Hilderal', 'Top Freelance - Frontend')}
			{newsArticle('Terence Hilderal', 'React.js - Next.js')}
			{newsArticle('Terence Hilderal', 'Top Freelance - Backend')}
			{newsArticle('Terence Hilderal', 'Node.js - Express.js')}
			{newsArticle('All my projects', 'https://github.com/TerenceHilderal')}
		</div>
	);
}

export default Widgets;
