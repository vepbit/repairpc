import React, { Fragment, Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { withTranslation, Trans } from 'react-i18next';
import Title from './Title';

class PriceShortPrepare extends Component {
    render() {
        return (
            <Fragment>
                <section className="section-price section">
                    <Title isheader={this.props.isheader} titlei18nkey={this.props.titlei18nkey} titlei18text={this.props.titlei18text} />
                    <Container >
                        <Row>
                            <Col lg='12'>
                                <div className="price-table">
                                    <div className="price-table-label">
                                        <div className="price-table-label__name">
                                            <p className="price-table-label__text">
                                                <Trans i18nKey="price_label_name">Services</Trans>
                                            </p>
                                        </div>
                                        <div className="price-table-label__price">
                                            <p className="price-table-label__text">
                                                <Trans i18nKey="price_label_cost">Cost</Trans>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price__data">
                                        <div className="price-table-row">
                                            <div className="price-table-row__name">
                                                <p className="price-table-row__text"> Service 1</p>
                                            </div>
                                            <div className="price-table-row__price">
                                                <p className="price-table-row__text"> 22</p>
                                            </div>
                                        </div>
                                        <div className="price-table-row">
                                            <div className="price-table-row__name">
                                                <p className="price-table-row__text"> Service 2</p>
                                            </div>
                                            <div className="price-table-row__price">
                                                <p className="price-table-row__text"> 32</p>
                                            </div>
                                        </div>
                                        <div className="price-table-row">
                                            <div className="price-table-row__name">
                                                <p className="price-table-row__text"> Service 3</p>
                                            </div>
                                            <div className="price-table-row__price">
                                                <p className="price-table-row__text"> 42</p>
                                            </div>
                                        </div>
                                        <div className="price-table-row">
                                            <div className="price-table-row__name">
                                                <p className="price-table-row__text"> Service 5</p>
                                            </div>
                                            <div className="price-table-row__price">
                                                <p className="price-table-row__text"> 52</p>
                                            </div>
                                        </div>
                                        <div className="price-table-row">
                                            <div className="price-table-row__name">
                                                <p className="price-table-row__text"> Service 6</p>
                                            </div>
                                            <div className="price-table-row__price">
                                                <p className="price-table-row__text"> 62</p>
                                            </div>
                                        </div>
                                        <div className="price-table-row">
                                            <div className="price-table-row__name">
                                                <p className="price-table-row__text"> Service 7</p>
                                            </div>
                                            <div className="price-table-row__price">
                                                <p className="price-table-row__text"> 72</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>

            </Fragment>
        )
    }
}

const PriceShort = withTranslation()(PriceShortPrepare);

export default PriceShort;
