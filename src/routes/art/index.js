import { h, Component } from 'preact';
import style from './style';

export default class Art extends Component {
	
	// Note: `article` comes from the URL, courtesy of our router
	render({ article }, { }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {article}</h1>
				<p>ART content goes here.</p>
			</div>
		);
	}
}
