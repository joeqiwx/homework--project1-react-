import './NavItem.css'

const NavItem = ({active, href, children, onClick}) => {
    return (
    <li><a className={active ? 'active' : ''} 
    href={href}
    onClick={(event) => {
        event.preventDefault();
        onClick();
    }}>{children}</a></li>
    )
}

export default NavItem;