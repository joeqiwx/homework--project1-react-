import './Header.css'

const Header = () => (
<header id="header">
<div className="header__content" >
    <div className="site__title">John <span>Doe</span></div>            
    <nav>
        <ul>
            <li><a href="#home" onclick="showpage(this)">home</a></li>
            <li><a href="#resume " onclick="showpage(this)">resume</a></li>
            <li><a href="#services" onclick="showpage(this)">services</a></li>
            <li><a href="#blog" onclick="showpage(this)">blog</a></li>
            <li><a href="#contact" onclick="showpage(this)">contact</a></li>
        </ul>
    </nav>
</div>
</header>
);

export default Header;