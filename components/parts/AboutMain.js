import React,{Fragment,Component} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from './Title';
class About__mainPrepare extends  Component{
    render(){
        return(
            <Fragment>
                <section className={"about-main section "+(this.props.isheader==='true' ? ' page' : ' part')}>
                    <Title isheader={this.props.isheader} titlei18nkey={this.props.titlei18nkey} titlei18text={this.props.titlei18text}/>

                    <Container >
                        <Row>

                            <Col md='12' lg='6' >
                                <Row className="about-main__inner-left">
                                    <Col className="about-main__inner-image" md='5' lg='5'>
                                        <img alt="" src="/images/face.webp" className="about-main__face" />
                                    </Col>
                                    <Col md='7' lg='7' className="about-main__inner-bio" >
                                        <p className="about_biography">
                                            <Trans i18nKey="about_presonal_name">Nissim Ezra</Trans>
                                        </p>
                                        <p className="about-main__biography">
                                             <Trans i18nKey="about_presonal_specialize">Electronic & IT Technician</Trans>
                                        </p>
                                        <p className="about-main__biography">
                                             <Trans i18nKey="about_presonal_phone">Phone 514-967-5255</Trans>
                                        </p>
                                        <p className="about-main__biography">
                                             <Trans i18nKey="about_presonal_address">Adress: 5501 Av Adalbert</Trans>
                                        </p>
                                        <p className="about-main__biography">
                                             <Trans i18nKey="about_presonal_office">Office: 1518</Trans>
                                        </p>
                                        <p className="about-main__biography">
                                            <Trans i18nKey="about_presonal_street"> Cote Saint Luc H4W 2B1</Trans>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md='12' lg='6'>
                                <Row className="about-main_inner-right">
                                    <Col md='6' lg='6'>
                                        <img alt="" src="/images/certificate.webp" className="about-main__certificate" />
                                    </Col>
                                    <Col md='6' lg='6'>
                                        <img alt="" src="/images/certificate.webp" className="about-main__certificate" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </Fragment>
        )
    }
}
const AboutMain = withTranslation()(About__mainPrepare);

export default AboutMain;
