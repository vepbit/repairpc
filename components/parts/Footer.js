import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="footer">
            <Container >
                <Row>
                    <Col>
                        <p className="footer__year">
                            Copyright © 2023
                        </p>
                        <p className="footer__prone">
                            <a href="mailto:mefston@protonmail.com">mefston@protonmail.com</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
