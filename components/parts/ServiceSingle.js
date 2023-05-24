import React, { Fragment } from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Trans } from 'react-i18next';

import { isEmpty, isLoaded } from "react-redux-firebase/";
import { useSelector } from "react-redux";

import Title from './Title';


import Link from 'next/link';

function ServiceSingle(props) {
    // console.log(props);
    //my article id
    let idArticle = props.id;

    // Get path for back button
    let backpath = props.backpath;

    //variable for current article
    let currentArticle = [];

    //get data from store
    const articlesData = useSelector(state => state.base.data.articles);
    const language = useSelector(state => state.myLang);

    // console.log(articlesData);


    //set current article function
    const setCurrentArticle = (props) => {
        // console.log(backpath);
        let dataArticle = [];
        let сurrLanguage = language;
        for (let i = 0; i < props.length; i++) {
            // console.log(props[i]);
            if (props[i].id === idArticle) {
                if (сurrLanguage === "ru") {
                    dataArticle['title'] = props[i]['ru']['title'];
                    dataArticle['description'] = props[i]['ru']['descr'];

                } else {
                    dataArticle['title'] = props[i]['en']['title'];
                    dataArticle['description'] = props[i]['en']['descr'];
                }
            } else {
                // console.log("error");
            }
        }
        currentArticle = dataArticle;
    };

    // //waiting for get article from store
    // if (!isLoaded(articlesData)) {
    //     return <Trans i18nKey="service_status_loading"><span className="preloader">1Loading...</span></Trans>;
    // }
    // // check about existing data in articles variable
    // if (isEmpty(articlesData)) {
    //     return <Trans i18nKey="service_status_empty">No Services</Trans>;
    // }

    //convert data and set current article
    if (isLoaded(articlesData)) {
        let newData = Object.values(articlesData);
        setCurrentArticle(newData);
        // console.log(newData);
    }
    // console.log(currentArticle);

    return (
        <Fragment>
            {/*here i put title for service*/}
            <Title isheader='true' titlei18text={currentArticle.title} headerthree='true' />

            <Container >
                <Row >
                    <Col lg='12'>
                        <div className="service-single">
                            {/*{<p className='service-single__title'>{currentArticle.title}</p>}*/}
                            <p className='service-single__desc'> {currentArticle.description} </p>

                            <Link href={backpath} >

                                <Button variant="primary" className="service-single__back" onClick={() => { }}> Back </Button>

                            </Link>

                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ServiceSingle;
