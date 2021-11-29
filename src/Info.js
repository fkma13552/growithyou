import React, {useEffect} from 'react'
import myFunc from './jsfront/index'
import {Link} from 'react-router-dom'
import {useTranslation} from "react-i18next";
import DiscountPopUp from "./DiscountPopUp";


function Info() {

    const {t, i18n} = useTranslation();

    useEffect(() => {
            myFunc();
        });

    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="my-5">
                                <div className="row">
                                    <div className="col-10 col-lg-12">
                                        <h1 className="text-white text-huge">
                                            {t("index.title")}
                                            <h1 className={"text-white text-medium"}>{t("index.undertitle")}</h1>
                                        </h1>
                                    </div>
                                    <div className="col-2 yellow-star my-auto">
                                        <img src="./img/index/yellow-star.svg" alt="" />
                                    </div>
                                </div>
                                <div className="text-sm-center">
                                    <div className="py-4 buttons">
                                        <a href={t("index.linkPlans")}><button className="btn btn-filled-white font-weight-bold">{t("index.mainButtons.sub")}</button></a>
                                        <a href={'https://t.me/GWY_bot'}><button className="btn btn-outlined-pink font-weight-bold">{t("index.mainButtons.personal")}</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <img src="./img/index/header-char.svg" alt="" className="char-full" />
                            <img src="./img/index/header-sm-char.svg" alt="" className="char-sm" />
                        </div>
                    </div>
                </div>
                <div className="w-100 bg-white">
                    <img src="./img/index/index-head-bttm.svg" alt="" className="btm" />
                </div>
            </div>
            <div className="how-it-works text-center text-purple">
                <div className="container py-5">
                    <h1>{t("index.howItWorks.title")}</h1>
                    <div className="row">
                        <div className="col-md-4 col-6">
                            <img src="./img/index/how-it-works-1.svg" alt="" />
                            <p className="px-2 text-medium">
                                {t("index.howItWorks.desc1")}
                            </p>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="h-6"></div>

                            <img src="./img/index/how-it-works-2.svg" alt="" />
                            <p className="px-2 text-medium">
                                {t("index.howItWorks.desc2")}
                            </p>
                        </div>
                        <div className="col-md-4 col-6 m-top-4">
                            <img src="./img/index/how-it-works-3.svg" alt="" />
                            <p className="px-2 text-medium">
                                {t("index.howItWorks.desc3")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-white">
                        <a id="plans">
                            <img src="./img/index/plans-hat.svg" alt="" className="hat" />
                        </a>
            </div>
            <div className="plans text-center text-purple">
                <div className="container">
                    <div className="h-3"></div>
                    <h1 className="text-white py-2">{t("index.plans.title")}</h1>
                    <div className="h-3"></div>
                    <div className="h-3"></div>
                    <div className="row card-items">
                        <div className="col-lg-4 col-12 mx-auto">
                            <div className="card my-5">
                                <img src="./img/index/plan-3.svg" alt="" />
                                <h2 className="py-3">
                                    <span className="text-cyan">3</span> {t("index.plans.toysPlur1")}
                                </h2>
                                <p>{t("index.plans.plan1.desc")}</p>
                                <h1 className="text-red py-3">{t("index.plans.plan1.price")}</h1>
                                <a href={t("catalogURL")}><button className="btn btn-filled-purple">{t("index.mainButtons.sub")}</button></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mx-auto">
                            <div className="card my-5">
                                <img src="./img/index/plan-1.svg" alt="" />
                                <h2 className="py-3">
                                    <span className="text-pink">5</span> {t("index.plans.toysPlur2")}
                                </h2>
                                <p>{t("index.plans.plan2.desc")}</p>
                                <h1 className="text-red py-3">{t("index.plans.plan2.price")}</h1>
                                <a href={t("catalogURL")}><button className="btn btn-filled-purple">{t("index.mainButtons.sub")}</button></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mx-auto">
                            <div className="card my-5">
                                <img src="./img/index/plan-2.svg" alt="" />
                                <h2 className="py-3">
                                    <span className="text-red">7</span> {t("index.plans.toysPlur2")}
                                </h2>
                                <p>{t("index.plans.plan3.desc")}</p>
                                <h1 className="text-red py-3">{t("index.plans.plan3.price")}</h1>
                                <a href={t("catalogURL")}><button className="btn btn-filled-purple">{t("index.mainButtons.sub")}</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-white">
                <img src="./img/index/plans-btm.svg" alt="" className="btm" />
            </div>
            <div className="pros text-purple">
                <div className="container">
                    <h1 className="py-5 text-center">{t("index.whyUs.title")}</h1>
                    <div className="row">
                        <div className="offset-lg-1 col-lg-5 col-md-5 col-12">
                            <img src="./img/index/pros-1.svg" alt="" />
                        </div>
                        <div className="col-lg-5 col-md-7 col-12 my-auto">
                            <p className="font-weight-bold py-4">{t("index.whyUs.one.title")}</p>
                            <p>
                                {t("index.whyUs.one.desc")}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-1 col-lg-5 col-md-7 my-auto  order-2 order-md-2">
                            <p className="font-weight-bold py-4">{t("index.whyUs.two.title")}</p>
                            <p>
                                {t("index.whyUs.two.desc")}
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-5 order-1 order-md-2">
                            <img src="./img/index/pros-2.svg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-1 col-lg-5 col-md-5 col-12">
                            <img src="./img/index/pros-3.svg" alt="" />
                        </div>
                        <div className="col-lg-5 col-md-7 col-12 my-auto">
                            <p className="font-weight-bold py-4">{t("index.whyUs.three.title")}</p>
                            <p>
                                {t("index.whyUs.three.desc")}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-1 col-lg-5 col-md-7 my-auto  order-2 order-md-2">
                            <p className="font-weight-bold py-4">{t("index.whyUs.four.title")}</p>
                            <p>
                                {t("index.whyUs.four.desc")}
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-5 order-1 order-md-2">
                            <img src="./img/index/pros-4.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-center py-5">
                    <Link to={'/about'}><button className="btn btn-filled-yellow font-weight-bold" onClick={() => window.scrollTo(0,0)}>{t("index.mainButtons.findMore")}</button></Link>
                </div>

            </div>
            <div className="w-100 bg-white">
                <img src="./img/index/feedback-hat.svg" alt="" className="hat" />
            </div>
            <div className="feedback">
                <div className="container">
                    <h1 className="text-white text-center py-5">{t("index.mumSay.title")}</h1>
                    <p className="text-white text-muted text-center">{t("index.mumSay.scrollTip")}</p>
                    <div className="feedback-cards">
                        <div className="feedback-cards-item">
                            <div className="card my-5 text-purple">
                                <img src="./img/index/quote-red.svg" alt="" className="quote" />
                                <p className="py-3">{t("index.mumSay.one.name")} <span className="text-muted float-right">{t("index.mumSay.one.time")}</span></p>
                                <p className="font-weight-bold">
                                    {t("index.mumSay.one.child")}
                                </p>
                                <p className="py-3">
                                    {t("index.mumSay.one.text")}
                                </p>
                                <div className="rate">
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star-grey.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="feedback-cards-item">
                            <div className="h-lg-3"></div>
                            <div className="card my-5 text-purple">
                                <img src="./img/index/quote-pink.svg" alt="" className="quote" />
                                <p className="py-3">{t("index.mumSay.two.name")} <span className="text-muted float-right">{t("index.mumSay.two.time")}</span></p>
                                <p className="font-weight-bold">
                                    {t("index.mumSay.two.child")}
                                </p>
                                <p className="py-3">
                                    {t("index.mumSay.two.text")}
                                </p>
                                <div className="rate">
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star-grey.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="feedback-cards-item">
                            <div className="card my-5 text-purple">
                                <img src="./img/index/quote-yellow.svg" alt="" className="quote" />
                                <p className="py-3">{t("index.mumSay.three.name")} <span className="text-muted float-right">{t("index.mumSay.three.time")}</span></p>
                                <p className="font-weight-bold">
                                    {t("index.mumSay.three.child")}
                                </p>
                                <p className="py-3">
                                    {t("index.mumSay.three.text")}
                                </p>
                                <div className="rate">
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="feedback-cards-item">
                            <div className="h-lg-3"></div>
                            <div className="card my-5 text-purple">
                                <img src="./img/index/quote-cyan.svg" alt="" className="quote" />
                                <p className="py-3">{t("index.mumSay.four.name")} <span className="text-muted float-right">{t("index.mumSay.four.time")}</span></p>
                                <p className="font-weight-bold">
                                    {t("index.mumSay.four.child")}
                                </p>
                                <p className="py-3">
                                    {t("index.mumSay.four.text")}
                                </p>
                                <div className="rate">
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star.svg" alt="" />
                                    <img src="./img/index/star.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feedback-nav text-center">
                        <div className="d-inline-block mx-auto">
                            <div className="prev-nav-btn">
                                <button className="nav-btn"><img src="./img/index/prev.svg" alt="" /></button>
                            </div>
                            <div className="nav-dots my-auto">

                            </div>
                            <div className="next-nav-btn">
                                <button className="nav-btn"><img src="./img/index/next.svg" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-white">
                <img src="./img/index/feedback-btm.svg" alt="" className="btm" />
            </div>
            <div className="join-us">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-6 col-md-6 col-12">
                            <img src="./img/index/footer-bubbles.svg" alt="" />
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
                                    <a href={'https://www.t.me/GWY_bot'}><button className="btn btn-outlined-pink font-weight-bold">{t("footer.personal")}</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
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

                                <p className="py-3">
                                    <a href="tel:+380668203974" className="text-white">{t("footer.tel")}</a>
                                </p>


                                <p>
                                    <a href="mailto:growwithyou.subscription@gmail.com" className="text-white">{t("footer.mail")}</a>
                                </p>
                                <p className={"py-3"}>
                                    <Link to={'/about'}><a href="" className="text-white">{t("footer.about")}</a></Link>
                                </p>

                            <div className="h-3 bg-purple"></div>
                            <div className="bg-purple">
                                <img src="img/logo.svg" alt="" className="logo bg-purple" />
                            </div>
                            <div className="legals">
                                <div className="container bg-purple">
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
export default Info;
