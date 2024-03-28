import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
function Layout(){
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Info React Lab</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/user">User</Nav.Link>
                    {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}

export default Layout;