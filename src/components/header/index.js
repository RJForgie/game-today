import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Game Today Edinburgh</h1>
		<nav>
			<Link activeClassName={style.active} href="/">
        Home
			</Link>
			<Link activeClassName={style.active} href="/profile">
        About
			</Link>
		</nav>
	</header>
);

export default Header;
