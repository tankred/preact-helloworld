import { h, Component } from 'preact';
import style from './style';

let content = 'undefined'

export default class Art extends Component {
	
	// Note: `article` comes from the URL, courtesy of our router
	render({ article }, { }) {

//    	  if ({article} = 'jandl') {
//    	    content = 'Ernst J. '
//    	  } else {
//    	    content = 'default'
//    	  }
  		return (
			<div class={style.profile}>
				<h1>Profile: {article}</h1>
				<p>ART { content } content goes here.</p>
			</div>
		);
	}
}
