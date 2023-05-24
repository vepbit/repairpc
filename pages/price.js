import React, { Fragment, Component } from 'react';

import PriceShort from '../components/parts/PriceShort';
import Layout from "../components/layouts/Layout";

class Price extends Component {
    render() {
        return (
            <Layout>
                <Fragment>
                    <PriceShort isheader='true' titlei18nkey='price_title' titlei18text='Price' />
                </Fragment>
            </Layout>
        )
    }
}


export default Price;
