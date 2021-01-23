import './Header.css';
import Logo from './components/Logo/Logo';
import Nav from './components/Nav/Nav';

const Header = ({currentPage, changePage}) => (
<header id="header">
<div className="header__content" >
    <Logo />
    <Nav currentPage={currentPage} changePage={changePage}/>
</div>
</header>
);

export default Header;