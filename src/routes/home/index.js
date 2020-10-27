import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
  
  <h2>Delicious links</h2>
  <p>A collection of archived projects and personal early internet works.</p>
  <ul>
  	<li><a href="laloteria/">la loteria</a></li>
  	<li><a href="delicious/">delicious</a></li>
  	<li><a href="Ikwerd20in45/build/">"Ik werd 20 in 45"</a></li>
  	<li><a href="https://vimeo.com/miccaman">&#8599; Vimeo ~miccaman</a></li>
  	<li><a href="scripties/kunst/jandl.html">"mein schreibtisch ist f&uuml;r alle gedeckt" ~Jandl</a></li>
  	<li><a href="scripties/kunst/kawara.html">KAWARA</a></li>
  	<li><a href="scripties/kunst/kirkeby.html">Per Kirkeby</a></li>
  	<li><a href="scripties/kunst/kelley.html">Mike Kelley</a></li>
  	<li><a href="scripties/kunst/princessofbenin.html">De princes van Benin</a></li>
  	<li><a href="scripties/kunst/scriptieShertmans.html">Scriptie S. Hertmans</a></li>
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
