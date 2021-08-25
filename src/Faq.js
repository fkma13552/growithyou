import React, {useEffect} from 'react'
import './Faq.css'
import $ from "jquery";

function Faq() {

    useEffect(() => {
        $('.faq-item-header img').click( function(event) {
            let text = event.target.parentElement.parentElement.children[1]
            $(event.target).toggleClass('arrow-up');
            $(text).toggleClass('d-none')
        })
    });


    return (
        <div>
            <div className="page">
                <h1 className="text-center text-purple py-5">Популярні запитання</h1>
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
                                    Як відбувається оформлення підписки та її оплата?
                                </p>
                                <img src="img/arrow-down.svg" alt="" className="d-inline-block float-right arrow-down" />
                            </div>
                            <div className="faq-item-body d-none">
                                <p>Підписку можна оформити на сайті, обрав потрібні вам іграшки та заливши свою електронну адресу. <br />
                                    Оплата здійснюється кожен місяць на картковий рахунок, дані якого будуть міститися в електронному листі.</p>
                            </div>
                        </div>
                        <div className="faq-item text-purple">
                            <div className="faq-item-header">
                                <p className="d-inline-block font-weight-bold">
                                    Як ви дезінфікуєте іграшки?
                                </p>
                                <img src="img/arrow-down.svg" alt="" className="d-inline-block float-right arrow-down" />
                            </div>
                            <div className="faq-item-body d-none">
                                <p>М’які іграшки (плюшеві або фетрові) піддаваються еко-хімчистці, а також озонуванню <br />
                                    Дерев'яні і пластикові іграшки дезінфікуються спеціальними засобами, що безпечні для дітей, а також проходять процедуру кварцювання
                                </p>
                            </div>
                        </div>
                        <div className="faq-item text-purple">
                            <div className="faq-item-header">
                                <p className="d-inline-block font-weight-bold">
                                    Що я маю робити, якщо іграшка зламалась або загубилась?
                                </p>
                                <img src="img/arrow-down.svg" alt="" className="d-inline-block float-right arrow-down" />
                            </div>
                            <div className="faq-item-body d-none">
                                <p>Ви не несете жодних ризиків за втрачену або загублену іграшку. </p>
                            </div>
                        </div>
                        <div className="faq-item text-purple">
                            <div className="faq-item-header">
                                <p className="d-inline-block font-weight-bold">
                                    Якщо малюку сподобалась іграшка, і він не захоче її віддавати так швидко?
                                </p>
                                <img src="img/arrow-down.svg" alt="" className="d-inline-block float-right arrow-down" />
                            </div>
                            <div className="faq-item-body d-none">
                                <p>Ви можете продовжувати користуватися нею та оновити решту іграшок АБО викупити її у нас за ціною -30% від ретейл ціни</p>
                            </div>
                        </div>
                        <div className="faq-item text-purple">
                            <div className="faq-item-header">
                                <p className="d-inline-block font-weight-bold">
                                    Яким чином відбувається доставка та повернення попереднього боксу?
                                </p>
                                <img src="img/arrow-down.svg" alt="" className="d-inline-block float-right arrow-down" />
                            </div>
                            <div className="faq-item-body d-none">
                                <p>Якщо ви живете в місті Київ, доставка та повернення боксів здійснюється до дверей нашим кур'єром <br />
                                    Доставка та повернення в інші міста України здійснюється Новою Поштою БЕЗКОШТОВНО
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
                                        <p>+380668203974 </p>
                                        <p>growwithyou.subscription@gmail.com</p>
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
