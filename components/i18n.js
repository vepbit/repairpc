import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            ru: {
                translations: {
                    welcome_title: "Давайте сделаем мир лучше.",
                    welcome_desc: 'Механические повреждения, удары, падения, залитие водой, неправильная эксплуатация и установка непроверенного и не надежного программного обеспечения негативно воздействует на телефон независимо от модели и года выпуска. В этих случаях ремонт телефона неизбежен и необходим.',
                    menu_main: "Главная",
                    menu_serv: "Услуги",
                    menu_about: "О нас",
                    menu_cont: "Контакты",
                    language_status_loading: "Загрузка",
                    language_status_empty: "Языковая переменная пуста или не установлена",
                    contact_title: 'Свяжитесь с нами',
                    contact_desc: 'Мы выполняем полный спектр услуг в области ремонта смартфонов в Киеве. Проводим детальную диагностику устройства, выявляем поломку и ее степень и консультируем клиента.',
                    contact_label_email: 'Почта',
                    contact_label_phone: 'Номер телефона',
                    contact_placeholder_email: 'Введите емейл',
                    contact_placeholder_phone: 'Ваш номер телефона',
                    contact_submit: 'Отправить',
                    map_title: "Мы на карте",
                    contact_error_email_required: "Почтовый адрес является обязательным",
                    contact_error_email_minlenght: "Минимальное количество символов 5",
                    contact_error_email_maxlenght: "Максимальное количество символов 20",
                    contact_error_phone_required: "Номер телефона явлыется обязательным",
                    contact_error_phone_minlenght: "Минимальное количество символов 10",
                    contact_error_phone_maxlenght: "Максимальное количество символов 13",
                    services_title: "Наши услуги",
                    services_detailed: "Подробнее",
                    service_status_loading: "Загрузка сервисов...",
                    service_status_empty: "Сервисы отсутствуют",
                    about_title: "О нас",
                    menu_price: "Прайс",
                    price_title: "Прайс",
                    price_label_name: " Услуга",
                    price_label_cost: "Стоимость",
                    about_presonal_name: "Ниссим Эзра",
                    about_presonal_specialize: "Электронный и IT техник",
                    about_presonal_phone: "Телефон 514-967-5255",
                    about_presonal_address: "Адрес: 5501 Av Adalbert.",
                    about_presonal_office: "Отделение: 1518",
                    about_presonal_street: "Cote Saint Luc H4W 2B1",
                    about_presonal_question: "Кто я ?",
                    about_presonal_description: "Lorem Ipsum боль сидеть Амет, consectetur adipiscing Элит. Методы по своей ароматной, на самом деле, было принято. Или это регулярное бесплатно, не ослепленный выбора отклонения результирующей встречи положение, возможно, пожелает отказаться от независимой!"

                }
            },
            en: {
                translations: {


                    welcome_title: "Lets make world better.",
                    welcome_desc: 'Mechanical damage, shocks, falls, flooding, improper use and installation of unverified and unreliable software negatively affects the phone, regardless of model and year of manufacture. In these cases, phone repair is inevitable and necessary.',
                    menu_main: "Main",
                    menu_serv: "Services",
                    menu_about: "About",
                    menu_cont: "Contact",
                    language_status_loading: "Loading",
                    language_status_empty: "Language variable is empty or not set",
                    contact_title: 'Contact us',
                    contact_desc: 'We perform a full range of services in the field of smartphone repair in Kiev. We carry out a detailed diagnosis of the device, identify the failure and its degree, and advise the client.',
                    contact_label_email: 'Email',
                    contact_label_phone: 'Prone number',
                    contact_placeholder_email: 'Enter email',
                    contact_placeholder_phone: 'Your phone number',
                    contact_submit: 'Send',
                    map_title: "We are on the map",
                    contact_error_email_required: "Email is required",
                    contact_error_email_minlenght: "The minimum number of characters is 5",
                    contact_error_email_maxlenght: "The maximum number of characters is 30",
                    contact_error_phone_required: "Phone is required",
                    contact_error_phone_minlenght: "The minimum number of characters is 10",
                    contact_error_phone_maxlenght: "The maximum number of characters is 13",
                    services_title: "Our Services",
                    services_detailed: "Read more",
                    service_status_loading: "Loading services...",
                    service_status_empty: "No Services",
                    about_title: "About us",
                    menu_price: "Price",
                    price_title: "Price",
                    price_label_name: " Service",
                    price_label_cost: "Cost",
                    about_presonal_name: "Nissim Ezra",
                    about_presonal_specialize: "Electronic & IT Technician",
                    about_presonal_phone: "Phone 514-967-5255",
                    about_presonal_address: "Adress: 5501 Av Adalbert",
                    about_presonal_office: "Office: 1518",
                    about_presonal_street: "Cote Saint Luc H4W 2B1",
                    about_presonal_question: "Who am i ?",
                    about_presonal_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi mollitia quidem recusandae. Aut ea esse illo iusto libero, nulla, obcaecati optio, pariatur perspiciatis provident reiciendis rem repudiandae soluta tenetur velit!"
                }
            }
        },
        fallbackLng: "ru",
        debug: false,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }

    });

export default i18n;
