import React,{Fragment,Component} from 'react';
import { withTranslation, Trans  } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AboutDescPrepare extends  Component{
    render(){
        return(
            <Fragment>
                <section className="section-about__desc section">
                    <Container >
                        <Row>
                            <Col lg='12'>
                                <h2 className="about__desc__title">
                                    <Trans i18nKey="about_presonal_question">WHo am i ? </Trans>
                                    </h2>
                                <p className="about__desc__desc">
                                    <Trans i18nKey="about_presonal_description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi mollitia quidem recusandae. Aut ea esse illo iusto libero, nulla, obcaecati optio, pariatur perspiciatis provident reiciendis rem repudiandae soluta tenetur velit!
                                    </Trans>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </Fragment>
        )
    }
}

const AboutDesc = withTranslation()(AboutDescPrepare);
export default AboutDesc;
