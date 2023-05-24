import React from 'react';
import Service from "./Service";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { useSelector } from 'react-redux';

function ContainerService(props) {
    let newData;
    const articlesData = useSelector(state => state.base.data.articles);
    const language = useSelector(state => state.myLang);
    if (!isLoaded(articlesData)) {
        // console.log(articlesData);
        return <span className="preloader">Loading</span>;
    }
    // Show a message if there are no todos
    if (isEmpty(articlesData)) {
        // console.log(articlesData);
        return "Todo list is empty";
    }
    if (isLoaded(articlesData)) {
        // console.log(Object.values(articlesData));
        newData = Object.values(articlesData);
        // console.log(articlesData['-LmtiQQmQ4bJ1SS5esff']['en']['descr']);
    }
    // console.log(language);
    // console.log(newData);
    return (
        <Service lang={language} articles={newData} backpath={props.backpath} />
    )
}

export default ContainerService;
