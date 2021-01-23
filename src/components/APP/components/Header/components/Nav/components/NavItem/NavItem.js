import './NavItem.css'

const NavItem = ({active, href, children, changePage}) => {
const onClick = (event) => {
        event.preventDefault();
        changePage(children);}
    return (
    <li><a className={active ? 'active' : ''} 
    href={href}
    onClick={onClick}>{children}</a></li>
    )
}

export default NavItem;