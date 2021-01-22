import './Nav.css';
import NavItem from './components/NavItem/NavItem'

const Nav = () => {
    const pages = ['Home', 'Resume', 'Services', 'Blog', 'Contact']
    return(
    <nav>
        <ul>
            {
        pages.map(page=>(
            <NavItem href={'#' + page}>{page}</NavItem>
        ))
            }
        </ul>
    </nav>
    )
}


export default Nav;