import { Navbar } from "react-bootstrap";
import { publicRoutes } from "../config/routes";
import { Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" className="p-2" expand="lg">
            <Navbar.Brand as={Link} to='/'>Logo</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="ms-auto">
                    {publicRoutes.map((el, i) => {
                        return (
                            <Nav.Link key={i} as={Link} to={el.path}>{el.name}</Nav.Link>
                        )
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;