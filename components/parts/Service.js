import React, { Fragment } from 'react';

import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

// import imgRepairPc from '../../images/services_repairpc.webp';
import { Trans, withTranslation } from 'react-i18next';

function ServicePrepare(props) {

    console.log('ServicePrepare props:', props)
    const cutStringToValue = (string) => {
        if (string.length > 200) {
            let newString = string.slice(0, 200);
            return newString + '...';
        } else {
            return string;
        }
    };

    let myActiveLanguage = props.lang;
    let backpath = props.backpath;
    // console.log(myActiveLanguage);
    return (
        <Fragment>{
            props.articles.slice(0, 3).map((item, index) => {
                return (
                    <Col key={index} lg='4' md='6' sm='12'>
                        <div className='box' >
                            <img src={"/images/services/services_repair_" + index + ".jpg"} alt="" className="box__img" />
                            <h3 className="box__title">

                                {myActiveLanguage === "ru" ? (
                                    item.ru.title
                                ) : (
                                    item.en.title
                                )}
                            </h3>
                            <p className="box__description">
                                {myActiveLanguage === "ru" ? (
                                    cutStringToValue(item.ru.descr)
                                ) : (
                                    cutStringToValue(item.en.descr)
                                )}
                            </p>
                            <Link href={"ConverLink/" + item.id + backpath} id={item.id} >

                                <Button className='box__button' variant="primary"> <Trans i18nKey="services_detailed">Наши услуги</Trans></Button>

                            </Link>
                        </div>
                    </Col>
                );
            })
        };
        </Fragment>
    );
}
const Service = withTranslation()(ServicePrepare);

export default Service;
