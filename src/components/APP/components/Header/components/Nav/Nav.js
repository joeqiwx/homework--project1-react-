import './Nav.css';
import NavItem from './components/NavItem/NavItem'

const Nav = () => (
    <nav>
        <ul>
            <NavItem href="Home">Home</NavItem>
            <NavItem href="Resume">Resume</NavItem>
            <NavItem href="Services">Services</NavItem>
            <NavItem href="Blog">Blog</NavItem>
            <NavItem href="Contact">Contact</NavItem>
        </ul>
    </nav>
)


export default Nav;