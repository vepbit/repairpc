import Header from "../parts/Header";
import Footer from "../parts/Footer";

import Head from "next/head";


import '../i18n';
// import {useFirebaseConnect} from "react-redux-firebase";

import { useDispatch } from 'react-redux';

import i18n from '../i18n';

const todosQuery = {
    path: "articles",
    queryParams: ["limitToLast=10"]
};

import { myLang } from '../../store/language/action';



const Layout = ({ children, title, description }) => {

    // useFirebaseConnect(() => [todosQuery]);
    let getCurrLanguage = i18n.language;
    let dispatch = useDispatch();
    console.log(getCurrLanguage);
    dispatch(myLang(getCurrLanguage));


    return (
        <>
            <Head>
                <title>
                    {title
                        ? title
                        : "Vepbit - your way to the future."}
                </title>
                <meta
                    name="description"
                    key="description"
                    content={
                        description
                            ? description
                            : "This is a Template using Next.js and Material-UI with Header and Footer."
                    }
                />
                <body data-color-mode="white" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout;