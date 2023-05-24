import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import googleIcon from '../../public/images/google-icon.png';

import { withTranslation, Trans } from 'react-i18next';

const AnyReactComponent = ({ text }) => <div className="google-icon">{text}</div>;

class MapPrepare extends Component {
    static defaultProps = {
        center: {
            lat: 48.467000,
            lng: 35.019800
        },
        zoom: 15
    };

    render() {
        return (
            <div className='map'>
                <Container >
                    <Row>
                        <Col lg='12'>
                            <h2 className='map__title section-title'>
                                <Trans i18nKey="map_title">Мы на карте</Trans>
                            </h2>
                            <div className='map__map'>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: 'AIzaSyAryHyCdq2YtgT9iJTiQ-mxFhaaEQs1SB8' }}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}
                                >
                                    <AnyReactComponent
                                        lat={48.467000}
                                        lng={35.019800}
                                        text=""
                                    />
                                </GoogleMapReact>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const Map = withTranslation()(MapPrepare);

export default Map;
