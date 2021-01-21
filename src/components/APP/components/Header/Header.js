import './Header.css';
import Logo from './components/Logo/Logo';
import Nav from './components/Nav/Nav';

const Header = () => (
<header id="header">
<div className="header__content" >
    <Logo />
    <Nav />
</div>
</header>
);

export default Header;