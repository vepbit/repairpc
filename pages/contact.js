import React, { Fragment, Component } from 'react';

import ContactForm from '../components/parts/ContactForm';
import Map from "../components/parts/Map";
import Layout from "../components/layouts/Layout";


class Contact extends Component {
    render() {
        return (
            <Layout>
                <Fragment>
                    <ContactForm isheader='true' titlei18nkey='contact_title' titlei18text='Contact us' />
                    <Map />
                </Fragment>
            </Layout>
        )
    }
}


export default Contact;
