import React, { Component } from 'react'
import { HeaderStyles } from './HeaderStyles';
import { 
    Container,
    Nav
} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <HeaderStyles>
                <Nav className="main-nav">
                        <div className="logo">
                            <h3>CLAWSN</h3>
                        </div>
                        <Nav  as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/home">Construct</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-1">Links</Nav.Link>
                        </Nav.Item>
                        </Nav>
                </Nav>
            </HeaderStyles>
        )
    }
}
