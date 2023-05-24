import React, { Fragment } from 'react';
import { withTranslation, Trans } from "react-i18next";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContainerService from "../components/parts/ContainerService";
import ContactForm from "../components/parts/ContactForm";
import Welcome from "../components/parts/Welcome";
import AboutMain from "../components/parts/AboutMain";
import Layout from "../components/layouts/Layout";

function HomePrepare() {
    return (
        <Layout>
            <Fragment>
                <Welcome />
                <section className="services section part">
                    <Container>
                        <Row className='boxes'>
                            <Col lg='12'>
                                <h2 className='section-services__title section-title'>
                                    <Trans i18nKey="services_title">Наши услуги</Trans>
                                </h2>
                            </Col>
                            <ContainerService backpath='m' />
                        </Row>
                    </Container>
                </section>
                <AboutMain isheader='false' titlei18nkey='about_title' titlei18text='About Us' />
                <ContactForm isheader='false' titlei18nkey='contact_title' titlei18text='Contact us' />
            </Fragment>
        </Layout>
    )
}
const Home = withTranslation()(HomePrepare);

export default Home;