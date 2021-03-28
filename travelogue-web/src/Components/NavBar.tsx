import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Nav = styled.nav`
    a { text-decoration: none; };
    text-align: right;
`;

const Text = styled.a`
    padding-right: 24px;
`;

function NavBar() {
    return (
        <div className="App">
            <Nav>
                <Text><a href={"/"}>Home</a></Text>
                <Text><a href={"/about"}>About</a></Text>
                <Text><a href={"/features"}>Features</a></Text>
                <Button className="button" variant="primary" href="/login" style={{width: '8%'}}>Login</Button>
            </Nav>
        </div>
    );
}

export default NavBar;