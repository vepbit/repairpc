import React,{Fragment} from 'react';
import { withTranslation, Trans  } from 'react-i18next';
import { useForm } from 'react-hook-form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Title from './Title';

function ContactFormPrepare (props){
const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
        const { t } = props;
        return(
            <Fragment>
                <section className={"contact section"+ (props.isheader==='true' ? ' page' : ' part')}>

                    <Title isheader={props.isheader} titlei18nkey={props.titlei18nkey} titlei18text={props.titlei18text}/>
                    <div className="contact__container-inner">
                        <Container >
                            <Row >
                                <Col lg='6'>
                                    <div className="contact__image-inner">
                                        <img className='contact__img' src="./images/contact3.webp" alt=""/>
                                    </div>
                                </Col>

                                <Col lg='6'>
                                    <div className="contact__inputs-inner">
                                        <p className="contact__title">
                                            <Trans i18nKey="contact_desc">We perform a full range of services in the field of smartphone repair in Kiev. We carry out a detailed diagnosis of the device, identify the failure and its degree, and advise the client.</Trans>
                                        </p>

                                        <Form onSubmit={handleSubmit(onSubmit)} className='contact__form contact-form'>
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label><Trans i18nKey="contact_label_email">Почта</Trans></Form.Label>
                                                <Form.Control name="email" {...register("email",{required: true , minLength: 5, maxLength: 30 })} type="email" placeholder={t('contact_placeholder_email')} />
                                                <p className="contact-form__error">
                                                    {errors.email && errors.email.type === "required" && (<Trans i18nKey="contact_error_email_required">Почтовый адрес является обязательным</Trans>)}
                                                    {errors.email && errors.email.type === "minLength" && (<Trans i18nKey="contact_error_email_minlenght">Минимальное количество символов 5</Trans>)}
                                                    {errors.email && errors.email.type === "maxLength" && (<Trans i18nKey="contact_error_email_maxlenght">Максимальное количество символов 30</Trans>)}
                                                    </p>
                                            </Form.Group>
                                            <Form.Group controlId="formGroupPassword">
                                                <Form.Label><Trans i18nKey="contact_label_phone">Номер телефона</Trans></Form.Label>
                                                <Form.Control name="phone" {...register("phone", {required: true, minLength: 10, maxLength: 13 })} type="tel"  placeholder={t('contact_placeholder_phone')} />
                                                <p className="contact-form__error">
                                                    {errors.email && errors.email.type === "required" && (<Trans i18nKey="contact_error_phone_required">Почтовый адрес является обязательным</Trans>)}
                                                    {errors.email && errors.email.type === "minLength" && (<Trans i18nKey="contact_error_phone_minlenght">Минимальное количество символов 10</Trans>)}
                                                    {errors.email && errors.email.type === "maxLength" && (<Trans i18nKey="contact_error_phone_maxlenght">Максимальное количество символов 13</Trans>)}
                                                </p>
                                            </Form.Group>
                                            <Button className='contact-form__submit' variant="primary" type="submit">
                                                <Trans i18nKey="contact_submit">Отправить</Trans>
                                            </Button>
                                        </Form>

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </Fragment>
        )
}
const ContactForm = withTranslation()(ContactFormPrepare);

export default ContactForm;
