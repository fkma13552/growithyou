import {useEffect} from 'react'
import myFunc from './jsfront/index'
import {Link} from 'react-router-dom'


function Info() {
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
                                            Щомісячна підписка на іграшки для вашого малюка
                                        </h1>
                                    </div>
                                    <div className="col-2 yellow-star my-auto">
                                        <img src="./img/index/yellow-star.svg" alt="" />
                                    </div>
                                </div>
                                <div className="text-sm-center">
                                    <div className="py-4 buttons">
                                        <a href="https://growithyou.club/#plans"><button className="btn btn-filled-white font-weight-bold">ПІДПИСАТИСЯ</button></a>
                                        <Link to={'/givetoys'}><button className="btn btn-outlined-pink font-weight-bold">ВІДДАТИ ІГРАШКИ</button></Link>
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
                    <img src="./img/index/index-head-bttm.svg" alt="" class="btm" />
                </div>
            </div>
            <div className="how-it-works text-center text-purple">
                <div className="container py-5">
                    <h1>Як це працює?</h1>
                    <div className="row">
                        <div className="col-md-4 col-6">
                            <img src="./img/index/how-it-works-1.svg" alt="" />
                            <p className="px-2 text-medium">
                                Обирай план підписки та іграшки для малюка
                            </p>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="h-6"></div>

                            <img src="./img/index/how-it-works-2.svg" alt="" />
                            <p className="px-2 text-medium">
                                Грайтесь поки вони не набриднуть
                            </p>
                        </div>
                        <div className="col-md-4 col-6 m-top-4">
                            <img src="./img/index/how-it-works-3.svg" alt="" />
                            <p className="px-2 text-medium">
                                Повертайте вже непотрібні та обирайте нові
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
                    <h1 className="text-white py-2">Плани підписки</h1>
                    <div className="h-3"></div>
                    <div className="h-3"></div>
                    <div className="row card-items">
                        <div className="col-lg-4 col-12 mx-auto">
                            <div className="card my-5">
                                <img src="./img/index/plan-3.svg" alt="" />
                                <h2 className="py-3">
                                    <span className="text-cyan">3</span> іграшки
                                </h2>
                                <p>Допитливий Енштейн - сто нових відкриттів</p>
                                <h1 className="text-red py-3">500 грн</h1>
                                <a href="https://www.growithyou.com"><button className="btn btn-filled-purple">ПІДПИСАТИСЬ</button></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mx-auto">
                            <div className="card my-5">
                                <img src="./img/index/plan-1.svg" alt="" />
                                <h2 className="py-3">
                                    <span className="text-pink">5</span> іграшок
                                </h2>
                                <p>Винахідливий Тесла - тисяча радісних моментів</p>
                                <h1 className="text-red py-3">700 грн</h1>
                                <a href="https://www.growithyou.com"><button className="btn btn-filled-purple">ПІДПИСАТИСЬ</button></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mx-auto">
                            <div className="card my-5">
                                <img src="./img/index/plan-2.svg" alt="" />
                                <h2 className="py-3">
                                    <span className="text-red">7</span> іграшок
                                </h2>
                                <p>Сміливий Маск - мільйон підкорених планет</p>
                                <h1 className="text-red py-3">900 грн</h1>
                                <a href="https://www.growithyou.com"><button className="btn btn-filled-purple">ПІДПИСАТИСЬ</button></a>
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
                    <h1 className="py-5 text-center">Чому ми?</h1>
                    <div className="row">
                        <div className="offset-lg-1 col-lg-5 col-md-5 col-12">
                            <img src="./img/index/pros-1.svg" alt="" />
                        </div>
                        <div className="col-lg-5 col-md-7 col-12 my-auto">
                            <p className="font-weight-bold py-4">Економія часу та грошей</p>
                            <p>
                                Витрачати час та гроші на купівлю іграшки, якими дитина перестане цікавитись за кілька днів?
                                Звучить не надто казково:( Ми ж пропонуємо доступ до 200 іграшок всього за 3 кліки та 500 гривень на місяць
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-1 col-lg-5 col-md-7 my-auto  order-2 order-md-2">
                            <p className="font-weight-bold py-4">Ранній розвиток</p>
                            <p>
                                Хто ж не хоче виростити майбутніх Кюрі, Ломоносова або Сікорського?
                                Ми розуміємо важливість навчання малюків через гру, тому консультуємось з експертами щодо підбору іграшок, спрямованих на ранній розвиток
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
                            <p className="font-weight-bold py-4">Порятунок планети</p>
                            <p>
                                Користування нашим сервісом допоможе тобі не лише звільнити простір у квартирі,
                                але і скоротити свої викиди СО2 у чотири рази. Зелена планетка для малюка!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-1 col-lg-5 col-md-7 my-auto  order-2 order-md-2">
                            <p className="font-weight-bold py-4">Безпечність іграшок</p>
                            <p>
                                Для мам - безпека понад усе (особливо у наші непевні часи)! Наші іграшки дезінфікуються
                                безпечними для дітей засобами, а також проходять процедуру кварцювання, озонування та піддаються еко-хімчистці.
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-5 order-1 order-md-2">
                            <img src="./img/index/pros-4.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-center py-5">
                    <Link to={'/about'}><button className="btn btn-filled-yellow font-weight-bold">ДІЗНАТИСЯ БІЛЬШЕ</button></Link>
                </div>

            </div>
            <div className="w-100 bg-white">
                <img src="./img/index/feedback-hat.svg" alt="" className="hat" />
            </div>
            <div className="feedback">
                <div className="container">
                    <h1 className="text-white text-center py-5">Наші клієнти кажуть</h1>
                    <p className="text-white text-muted text-center">Гортай, щоб побачити більше відгуків</p>
                    <div className="feedback-cards">
                        <div className="feedback-cards-item">
                            <div className="card my-5 text-purple">
                                <img src="./img/index/quote-red.svg" alt="" className="quote" />
                                <p className="py-3">Ольга Б.<span className="text-muted float-right">7 днів тому</span></p>
                                <p className="font-weight-bold">
                                    син Ярослав, 4 роки 
                                </p>
                                <p className="py-3">
                                    Ми в захваті! Вже думаю, що замовляти сину наступного місяця!
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
                                <p className="py-3">Лиза В. <span className="text-muted float-right">3 дні тому</span></p>
                                <p className="font-weight-bold">
                                    сын Марк, 3 месяца
                                </p>
                                <p className="py-3">
                                    Честно, я в восторге от вашей идеи;) Игрушки отличные, новые, чистые! Я хочу новые заказать на следующий месяц.
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
                                <p className="py-3">Світлана К. <span className="text-muted float-right">4 дні тому</span></p>
                                <p className="font-weight-bold">
                                    син Богдан, 5 років
                                </p>
                                <p className="py-3">
                                    Рада, що нарешті з'явився такий сервіс! Вже отримала іграшки, все супергарне і якісне:)
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
                                <p className="py-3">Елена Р. <span className="text-muted float-right">3 дні тому</span></p>
                                <p className="font-weight-bold">
                                    дочь Аглая, 4 года
                                </p>
                                <p className="py-3">
                                    Очень счастлива с вашей подпиской. Дочь очень радуется, что получает каждый месяц новые игрушки.
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
                                Почни гратись з Grow With You вже сьогодні!
                            </h1>
                            <div className="text-sm-center">
                                <div className="py-5 buttons">
                                    <a href="https://growithyou.club/#plans"><button className="btn btn-filled-purple font-weight-bold">ПІДПИСАТИСЯ</button></a>
                                    <Link to={'/givetoys'}><button className="btn btn-outlined-pink font-weight-bold">ВІДДАТИ ІГРАШКИ</button></Link>
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
                            <p className="py-3">+380668203974 </p>
                            <p>growwithyou.subscription@gmail.com</p>
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
export default Info;
