import React, {useEffect} from 'react'
import './css/style.css'
import './About.css'
import myFunc from './jsfront/index'
import {Link} from "react-router-dom";

function About() {

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
                            Що таке Grow with you?
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
                                Grow With You - це сервіс, що покликаний спростити життя мами. Ми хочемо позбавити тебе від турбот,
                                що пов'язані з постійним пошуком іграшок для твого малюка та головної болі від того, куди дівати непотрібні.
                                Зробити вибір у сторону відповідального споживання просто.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-2 col-lg-4 col-12 text-purple py-3">
                            <p>
                                Чому підписка - запитаєш ти. Дитині постійно потрібно купувати нові іграшки з огляду
                                об'єктивні причини: вона росте, і від мобілів та гризунців переходить до сортерів та пазлів
                                (тут і не посперечаєшся). Ми допомогаємо тобі знайти все це щастя і вже обрали ті іграшки, що найкраще підходять для раннього розвитку малюка.
                            </p>
                        </div>
                        <div className="col-lg-4 col-12 text-purple py-3">
                            <p>
                                Чому підписка на оренду - наступне питання. Ти і без нас знаєш, що не всі іграшки стають
                                "улюбленими" для твоєї дитини. Більшість з них мають дуже недовге життя: і якщо овечка стає
                                постійним супутником для малюка, то пірамідка та інтерактивний куб потраплять у його немилість вже за місяць-два.
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
                            <p className="font-weight-bold py-3">Як все починалося?</p>
                            <p>
                                Ми займались просуванням відповідального споживання та виробництва як громадська організація.
                                Глибше дослідивши проблеми у цих сферах, нам захотілось зробити щось, що б допомагало людям і робило їх життя більш екологічним. <br/>

                                Парелельно ми спілкувались з мамами і розуміли, що у них не завжди є час на пошуки іграшок для малюка,
                                а їх потрібно купувати постійно: дитина росте, розвивається і пізнає світ через ігри.
                                Поряд з тим період користування іграшками досить недовгий, і потім мамі потрібно думати,
                                де зберігати/кому віддавати вже непотрібні.
                            </p>
                            <p className="py-3">
                                Так народилась ідея сервісу підписки на дитячі іграшки, що дозволяє малюку пробувати багато
                                різноманітних іграшок і знаходити ті, що сподобаються, а мамі - не витрачати час та зусилля на
                                підбір іграшок та вирішення їх подальшої долі.
                            </p>
                        </div>
                        <div className="col-lg-4 col-12">
                            <p className="text-pink quote-about py-3">
                                Все просто. Ми хочемо змінити традиційну модель споживання дитячих іграшок,
                                що дозволить збільшити кількість циклів їх використання у 4 рази.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="offset-lg-2 col-lg-4 col-12 text-purple">
                            <p className="font-weight-bold py-3">Наші цілі</p>
                            <p>
                                Світ змінюється супершвидко і багато речей залишаються у минулому.
                                Так, ми всі звикли купувати, але зараз стає все більш очевидним, що це не завжди найбільш
                                оптимальний вибір. Пробувати нове - страшно і хвилююче, з іншої сторони - це може змінити твоє життя на краще.
                                Ну от, ми вже розповіли тобі, чому варто стати частиною Grow With You, сервісу, що прагне:
                            </p>
                            <p className="py-3">
                                Ассортимент нашего проката достаточно широк и постоянно расширяется. В нашем прокате Вы
                                можете взять для своей крохи множество полезных вещей.
                            </p>
                        </div>
                        <div className="col-lg-4 col-12 text-purple">
                            <p className="text-white py-3">Наші цілі</p>
                            <p><span className="font-weight-bold">1.</span>
                                Зробити дітей щасливими
                            </p>
                            <p className="py-3"><span className="font-weight-bold">2.</span>
                                Полегшити життя мамам
                            </p>
                            <p><span className="font-weight-bold">3.</span>
                                Зберегти планету зеленою
                            </p>
                            <div className="h-sm-3"></div>
                        </div>
                    </div>
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
                                Почни гратися з Grow with you вже сьогодні!
                            </h1>
                            <div className="text-sm-center">
                                <div className="py-5 buttons">
                                    <a href="https://www.growithyou.com"><button className="btn btn-filled-purple font-weight-bold">ПІДПИСАТИСЯ</button></a>
                                    <Link to={'/givetoys'}><button className="btn btn-outlined-pink font-weight-bold">ВІДДАТИ ІГРАШКИ</button></Link>
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
                                <a href="">
                                    <img src="img/inst.svg" alt="" />
                                </a>
                                <a href="">
                                    <img src="img/fb.svg" alt="" />
                                </a>
                            </div>
                            <p className="py-3">+380668203974</p>
                            <p>growwithyou.subscription@gmail.com</p>
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
                                        {/*<div className="col-md-4 col-12">*/}
                                        {/*    <div className="links d-inline-block text-center py-2">*/}
                                        {/*        <a href="" className="text-white px-3">Terms&Conditions</a>*/}
                                        {/*        <a href="" className="text-white px-3">Legal&privacy</a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
            </footer>
        </div>
    );
}
export default About;
