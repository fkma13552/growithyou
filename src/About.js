import React, {useEffect} from 'react'
import './css/style.css'
import './About.css'
import myFunc from './jsfront/index'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function About() {

    const {t, i18n} = useTranslation();

    useEffect(() => {
        myFunc();
    });

    return(
        <div>
            <div className="header-about">
                <div className="h-lg-3"></div>
                <div className="h-lg-3"></div>
                <div className="row">
                    <div className="col-lg-3 col-6  order-lg-1 order-2">
                        <img src="img/about/header-left.svg" alt="" />
                            <div className="h-sm-3"></div>
                    </div>
                    <div className="col-lg-6 col-12  order-lg-2 order-md-1">

                        <h1 className="text-white text-huge text-center py-5">
                            {t("about.title")}
                        </h1>
                    </div>
                    <div className="col-lg-3 col-6  order-lg-3 order-md-3 order-3">
                        <img src="img/about/header-right.svg" alt="" />
                            <div className="h-sm-3"></div>
                    </div>
                </div>
                <div className="bg-white">
                    <img src="img/index/index-head-bttm.svg" alt="" className="btm" />
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <div className="row py-5">
                        <div className="offset-lg-2 col-lg-8 col-12 text-center">
                            <p className="quote-about gradient">
                                {t("about.description")}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-2 col-lg-4 col-12 text-purple py-3">
                            <p>
                                {t("about.why1")}
                            </p>
                        </div>
                        <div className="col-lg-4 col-12 text-purple py-3">
                            <p>
                                {t("about.why2")}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6 col-12">
                            <img src="img/about/founders.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-2 col-lg-4 col-12 text-purple">
                            <p className="font-weight-bold py-3">{t("about.howItStarted.title")}</p>
                            <p>
                                {t("about.howItStarted.first")}<br/>

                                {t("about.howItStarted.second")}
                            </p>
                            <p className="py-3">
                                {t("about.howItStarted.third")}
                            </p>
                        </div>
                        <div className="col-lg-4 col-12">
                            <p className="text-pink quote-about py-3">
                                {t("about.goal")}
                            </p>
                        </div>
                    </div>

                    {/*<div className="row">*/}
                    {/*    <div className="offset-lg-2 col-lg-4 col-12 text-purple">*/}
                    {/*        <p className="font-weight-bold py-3">Наші цілі</p>*/}
                    {/*        <p>*/}
                    {/*            Світ змінюється супершвидко і багато речей залишаються у минулому.*/}
                    {/*            Так, ми всі звикли купувати, але зараз стає все більш очевидним, що це не завжди найбільш*/}
                    {/*            оптимальний вибір.*/}
                    {/*        </p>*/}
                    {/*        <p className="py-3">*/}
                    {/*            Пробувати нове - страшно і хвилююче, з іншої сторони - це може змінити твоє життя на краще.*/}
                    {/*            Ну от, ми вже розповіли тобі, чому варто стати частиною Grow With You, сервісу, що прагне:*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-4 col-12 text-purple">*/}
                    {/*        <p className="text-white py-3">Наші цілі</p>*/}
                    {/*        <p><span className="font-weight-bold">1.</span>*/}
                    {/*            Зробити дітей щасливими*/}
                    {/*        </p>*/}
                    {/*        <p className="py-3"><span className="font-weight-bold">2.</span>*/}
                    {/*            Полегшити життя мамам*/}
                    {/*        </p>*/}
                    {/*        <p><span className="font-weight-bold">3.</span>*/}
                    {/*            Зберегти планету зеленою*/}
                    {/*        </p>*/}
                    {/*        <div className="h-sm-3"></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

            <div className="join-us-about">
                <div className="w-100">
                    <img src="img/about/join-us.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="offset-md-6 col-md-6 col-12">
                            <img src="img/index/footer-bubbles.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="mx-auto">
                            <h1 className="text-purple text-huge">
                                {t("footer.title")}
                            </h1>
                            <div className="text-sm-center">
                                <div className="py-5 buttons">
                                    <a href={t("index.linkPlans")}><button className="btn btn-filled-purple font-weight-bold">{t("footer.sub")}</button></a>
                                    <Link to={'/givetoys'}><button className="btn btn-outlined-pink font-weight-bold">{t("footer.give")}</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='footer-about'>
                <img src="img/index/footer-bg.svg" alt="" className="lg-bg" />
                    <img src="img/index/footer-sm-bg.svg" alt="" className="sm-bg" />
                        <div className="content text-center text-white">
                            <div className="social-icons">
                                <a href="https://www.instagram.com/growwith__you">
                                    <img src="img/inst.svg" alt="" />
                                </a>
                                <a href="https://www.facebook.com/growithyou.official">
                                    <img src="img/fb.svg" alt="" />
                                </a>
                            </div>

                                <p className="py-3" >
                                    <a href="" className="text-white" href="tel:+380668203974">{t("footer.tel")}</a>
                                </p>
                                <p>
                                    <a href="mailto:growwithyou.subscription@gmail.com" className="text-white">{t("footer.mail")}</a>
                                </p>
                            <div className="h-3 bg-purple"></div>
                            <div className="bg-purple">
                                <img src="img/logo.svg" alt="" className="logo bg-purple" />
                            </div>
                            <div className="legals ">
                                <div className="container">
                                    <div className="row">
                                        <div className="offset-md-4 col-md-4 col-12">
                                            <div className="copyright text-center text-white py-2 d-inline-block">
                                                Copyright ©2021 Grow With Us. All rights reserved
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <div className="links d-inline-block text-center py-2">
                                                <Link to={'/shipping'}><a href="" className="text-white px-3">{t("footer.shipping")}</a></Link>
                                                <Link to={'/privacy'}><a href="" className="text-white px-3">{t("footer.privacy")}</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </footer>
        </div>
    );
}
export default About;
