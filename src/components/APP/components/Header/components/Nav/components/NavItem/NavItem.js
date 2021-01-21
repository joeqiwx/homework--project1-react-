import './NavItem.css'

const NavItem = ({href, children}) => (
    <li><a href={href}>{children}</a></li>
)

export default NavItem;