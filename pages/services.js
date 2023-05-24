import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Title from '../components/parts/Title';
import ContainerService from "../components/parts/ContainerService";
import Layout from "../components/layouts/Layout";

function ServicesPrepare() {
    return (
        <Layout>
            <Fragment>
                <section className="section-services section page">
                    <Title isheader='true' titlei18nkey='services_title' titlei18text='Services' />
                    <Container >
                        <Row className='boxes'>
                            <ContainerService backpath='p' />
                        </Row>
                    </Container>
                </section>
            </Fragment>
        </Layout>
    )
}
const Services = withTranslation()(ServicesPrepare);

export default Services;
