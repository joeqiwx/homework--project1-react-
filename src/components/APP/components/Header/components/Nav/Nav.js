import './Nav.css';
import NavItem from './components/NavItem/NavItem';
import {PAGE} from '../../../../../../store/constants';

const Nav = ({currentPage, changePage}) => {
    const pages = Object.values(PAGE);
    
    return(
    <nav>
        <ul>
            {
        pages.map((page, index) =>(
            <NavItem onClick={() => changePage(page)} active={currentPage===page} key={index} href={'#' + page}>{page}</NavItem>
        ))
            }
        </ul>
    </nav>
    )
}


export default Nav;