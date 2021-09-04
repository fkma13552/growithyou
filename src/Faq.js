import React, {useEffect} from 'react'
import './Faq.css'
import $ from "jquery";
import {useTranslation} from "react-i18next";

function Faq({location}) {

    useEffect(() => {
        $('.faq-item-header img').click( function(event) {
            let text = event.target.parentElement.parentElement.children[1]
            $(event.target).toggleClass('arrow-up');
            $(text).toggleClass('d-none')
        })
    },[location]);

    const {t, i18n} = useTranslation();

    return (
        <div>
            <div className="page">
                <h1 className="text-center text-purple py-5">{t("faq.title")}</h1>
                {/*<div className="text-center">*/}
                {/*    <div className="input-group mx-auto">*/}
				{/*<span className="input-logo">*/}
				{/*	<img src="img/search.svg" alt="" />*/}
				{/*</span>*/}
                {/*        <input type="text" placeholder="Пошук" className="input-field" />*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="container">
                {/*    <div className="faq-buttons py-3 text-center">*/}
                {/*        <button className="btn btn-outlined-cyan btn-outlined-cyan-active">ЯК ЦЕ ПРАЦЮЄ</button>*/}
                {/*        <button className="btn btn-outlined-cyan">ПІДПИСКА ТА ОПЛАТА</button>*/}
                {/*        <button className="btn btn-outlined-cyan">ЗАМОВЛЕННЯ ПОВЕРНЕННЯ ІГРАШОК</button>*/}
                {/*        <button className="btn btn-outlined-cyan">ІНФОРМАЦІЯ ЩОДО ІГРАШОК</button>*/}
                {/*        <button className="btn btn-outlined-cyan">ПЕРЕДАЧА ІГРАШОК</button>*/}
                {/*        <button className="btn btn-outlined-cyan">КУПІВЛЯ ІГРАШОК</button>*/}
                {/*    </div>*/}
                    <div className="faq-items py-5">
                        <div className="faq-item text-purple">
                            <div className="faq-item-header">
                                <p className="d-inline-block font-weight-bold">
                                    {t("faq.question1.title")}
                                </p>
                                <img src="img/arrow-down.svg" alt="" className="d-inline-block float-right arrow-down" />
                            </div>
                            <div className="faq-item-body d-none">
                                <p>{t("faq.question1.ans")} </p>
                            </div>
                        </div>
                        <div className="faq-item text-purple">
                            <div className="faq-item-header">
                                <p className="d-inline-block font-weight-bold">
                                    {t("faq.question2.title")}
                                </p>
                                <img src="img/arrow-down.svg" alt="" className="d-inline-block float-right arrow-down" />
                            </div>
                            <div className="faq-item-body d-none">
                                <p>{t("faq.question2.ans1")} <br /> {t("faq.question2.ans2")}</p>
                            </div>
                        </div>
                        <div className="faq-item text-purple">
                            <div className="faq-item-header">
                                <p className="d-inline-block font-weight-bold">
                                    {t("faq.question3.title")}
                                </p>
                                <img src="img/arrow-down.svg" alt="" className="d-inline-block float-right arrow-down" />
                            </div>
                            <div className="faq-item-body d-none">
                                <p>{t("faq.question3.ans")} </p>
                            </div>
                        </div>
                        <div className="faq-item text-purple">
                            <div className="faq-item-header">
                                <p className="d-inline-block font-weight-bold">
                                    {t("faq.question4.title")}
                                </p>
                                <img src="img/arrow-down.svg" alt="" className="d-inline-block float-right arrow-down" />
                            </div>
                            <div className="faq-item-body d-none">
                                <p>{t("faq.question4.ans")}</p>
                            </div>
                        </div>
                        <div className="faq-item text-purple">
                            <div className="faq-item-header">
                                <p className="d-inline-block font-weight-bold">
                                    {t("faq.question5.title")}
                                </p>
                                <img src="img/arrow-down.svg" alt="" className="d-inline-block float-right arrow-down" />
                            </div>
                            <div className="faq-item-body d-none">
                                <p>{t("faq.question5.ans1")} <br />
                                    {t("faq.question5.ans2")}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <footer className='footer-faq'>
                <img src="img/footer-hat.svg" alt="" className="footer-hat-faq" />
                    <div className="bg-purple">
                        <div className="container ">
                            <div className="row">
                                <div className="col-lg-6 col-12 order-2 order-lg-1 text-sm-center py-5">
                                    <div className="py-1">
                                        <img src="img/logo.svg" alt="" className="logo" />
                                    </div>
                                    <div className="h-3"></div>
                                    <div className="copyright text-center text-white py-3 d-inline-block">
                                        Copyright ©2021 Grow With Us. All rights reserved
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 order-1 order-lg-2 text-right text-sm-center py-5">
                                    <div className="social-icons">
                                        <a href="https://www.instagram.com/growwith__you">
					    <img src="img/inst.svg" alt="" />
					</a>
					<a href="https://www.facebook.com/growithyou.official">
					    <img src="img/fb.svg" alt="" />
					</a>
                                    </div>
                                    <div className="contacts text-white py-3">
                                        <p>{t("footer.tel")} </p>
                                        <p>{t("footer.mail")}</p>
                                    </div>
                                    {/*<div className="links d-inline-block text-center py-2">*/}
                                    {/*    <a href="" className="text-white px-3">Terms&Conditions</a>*/}
                                    {/*    <a href="" className="text-white px-3">Legal&privacy</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    );
}
export default Faq;
