import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>891_ productions</h1>
		<p>Exploring preact js framework</p>
  
  <h2>Delicious links</h2>
  <p>A collection of archived projects and personal early internet works.</p>
  <ul>
  	<li><a href="art/jandl">"mein schreibtisch ist f&uuml;r alle gedeckt" ~Jandl</a></li>
  	<li><a href="art/kawara">KAWARA</a></li>
  	<li><a href="art/kirkeby">Per Kirkeby</a></li>
  </ul>
  <h2>About me</h2>
  <p>Go to <a href="https://www.891.be/">&#8599; 891.be</a> for more info.</p>
  <h2>More tildes</h2>
  <ul>
  	<li><a href="http://tilde.club/~matyus/">&#8599; tilde.club/~matyus/</a></li>
  	<li><a href="https://tilde.club/~anthonydpaul/primer.html">&#8599; How to ~tilde</a></li>
  	<li><a href="https://tilde.camp/map.html#enter">&#8599; tilde.camp</a></li>
  </ul>
  </div>
);

export default Home;
