import { h, Component } from 'preact';
import style from './style';

export default class Art extends Component {
	

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>ART content goes here.</p>
			</div>
		);
	}
}
