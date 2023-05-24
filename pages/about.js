import React, { Fragment, Component } from 'react';

import AboutMain from "../components/parts/AboutMain";
import AboutDesc from "../components/parts/AboutDesc";
import Layout from "../components/layouts/Layout";


class About extends Component {
    render() {
        return (
            <Layout>
                <Fragment>
                    <AboutMain isheader='true' titlei18nkey='about_title' titlei18text='About Us' />
                    <AboutDesc />
                </Fragment>
            </Layout>
        )
    }
}


export default About;
