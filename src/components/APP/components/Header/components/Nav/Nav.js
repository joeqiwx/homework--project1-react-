import './Nav.css';
import NavItem from './components/NavItem/NavItem'

const Nav = ({currentPage, changePage}) => {
    const pages = ['Home', 'Resume', 'Services', 'Blog', 'Contact']
    
    return(
    <nav>
        <ul>
            {
        pages.map((page, index) =>(
            <NavItem changePage={changePage} active={currentPage===page} key={index} href={'#' + page}>{page}</NavItem>
        ))
            }
        </ul>
    </nav>
    )
}


export default Nav;