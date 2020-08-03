import React from 'react';
import { Navbar, 
        Nav   
    } from 'react-bootstrap';
import '../assets/Header.css'

class Header extends React.Component{

    render(){

        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                    <Nav.Link href="/allusers">Show users</Nav.Link>
                    </Nav>
                </Navbar>

                <br />
                </>
        );
    }
}

export default Header