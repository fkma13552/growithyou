import react, {useEffect, useState} from 'react'
import './GiftCards.css'
import myFunc from "./jsfront";
import {Link} from "react-router-dom";

function GiftCards() {

    const [monthes, setMonthes] = useState('');
    const [addToys, setAddToys] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [telvib, setTelVib] = useState('');
    const [hintShow, setHintShow] = useState(false);

    useEffect(()=>{
        myFunc();
    });

    const handleMonthesChange = (event) => {
        setMonthes(event.target.id)
    }
    const handleAddToysChange = (event) => {
        setAddToys(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNumber(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleTelVibChange = (event) => {
        setTelVib(event.target.id)
    }

    const clearInputs = () => {
        setMonthes('');
        setAddToys('');
        setName('');
        setNumber('');
        setEmail('');
        setTelVib('')
    }

    const postData = async (month, toys, name, number, email, tgvb, event) => {
        event.preventDefault();
        try {
            const response = fetch("https://v1.nocodeapi.com/fkma13552/google_sheets/KJzAOzyNWmNRSAvf?tabId=Sheet1",{
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: "follow",
                body: JSON.stringify([[name, number, email, tgvb, month, toys,]])
            }).then(() => clearInputs());
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <div>
            <div className="header-pink">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="my-5">
                                <h1 className="text-white text-huge">
                                    Подарунковий <br />сертифікат
                                </h1>
                                <div className="">
                                    <div className="py-5">
                                        <p className="text-white">Не знаєте, які саме іграшки подарувати малюку?  А як вам ідея подарувати йому доступ  до безлімітної кількості іграшок!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src="img/gift/card.svg" alt="" className="w-100 my-0 my-md-5" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="img/gift/header-btm.svg" alt="" />
            <div className="page-bg">
                <div>
                    <div className="container">
                        <div className="frame p-3 p-md-5 my-5">
                            <h2 className="text-purple">
                                <img src="img/gift/i-icon.svg" alt="" className="info-icon" />
                                    Як це працює:
                            </h2>
                            <div className="h-2"></div>
                            <div className="row">
                                <div className="col-md-4 col-12 frame-part">
                                    <p>1. Обираєте варіант сертифікату <br/>(на 3 або 6 місяців)</p>
                                    <img src="img/gift/arrow-icon.svg" alt=""
                                         className="arrow-icon d-none d-md-inline-block" />
                                </div>
                                <div className="col-md-4 col-12 frame-part">
                                    <p>2. Додаєте (або ні) опцію
                                        сертифікат + іграшки</p>
                                    <img src="img/gift/arrow-icon.svg" alt=""
                                         className="arrow-icon d-none d-md-inline-block" />
                                </div>
                                <div className="col-md-4 col-12 frame-part">
                                    <p>3. Залишаєте свої дані, і ми
                                        зв’язуємось з вами, щоб
                                        оформити сертифікат</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="h-3"></div>
            <div className="create-certificate">
                <div className="container">
                    <h2 className="px-3 px-md-5 text-purple">Давайте сформуємо сертифікат</h2>
                    <p className="py-3 px-3 px-md-5 font-weight-bold text-purple">Підписка на оренду іграшок на:</p>
                    <div className="row my-3">
                        <div className="certificates text-center">
                            <img src="img/gift/box-1.svg" alt="" className="left" />
                                <img src="img/gift/box-2.svg" alt="" className="right" />
                        </div>
                        <form action="">
                            <div className="certificates-form py-3 text-center">
                                <div className="r text-center">
                                    <label htmlFor="3-month"
                                           className="l-checkbox-container text-purple font-weight-bold"><span
                                        className="text-cyan h3">3</span> місяці
                                        <div className="mx-auto">
                                            <h3 className="gift-price-text font-weight-bold text-pink">1500 грн</h3>
                                        </div>
                                        <input type="radio" id="3-month" name="duration" onChange={handleMonthesChange} required/>
                                            <span className="l-radio"></span>
                                    </label>

                                </div>
                                <div className="r text-center">
                                    <label htmlFor="6-month"
                                           className="l-checkbox-container text-purple font-weight-bold"><span
                                        className="text-pink h3">6</span> місяців
                                        <div className="mx-auto">
                                            <h3 className="gift-price-text font-weight-bold text-pink">1500 грн</h3>
                                        </div>
                                        <input type="radio" id="6-month" name="duration" onChange={handleMonthesChange} required/>
                                            <span className="l-radio"></span>
                                    </label>
                                </div>
                                <br />
                            </div>
                        </form>
                    </div>
                    <div className="frame p-3 p-md-5 my-5 light-pink-bg">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <p className="text-purple font-weight-bold">
                                    До сертифікату ти можеш додати фізичні іграшки
                                </p>
                                <div className="h-2"></div>
                                <div className="">
                                    <label className="l-checkbox-container h3 font-weight-bold text-purple">Додати
                                        іграшки до сертифікату
                                        <input type="checkbox" onChange={handleAddToysChange}/>
                                            <span className="l-checkmark"></span>
                                    </label></div>
                            </div>
                            <div className="h-2 d-block d-md-none"></div>
                            <div className="col-md-6 col-12 ">
                                <div className="d-flex how-it-works-gift">
                                    <p className="text-pink font-weight-bold">
                                        Для чого це потрібно?

                                    </p>
                                    <img src="img/gift/question-icon.svg" alt="" className="question-icon" onClick={()=>setHintShow(!hintShow)}/>
                                </div>
                                <div className={hintShow?"speech-bubble my-3":"d-none"}><p className="text-pink font-weight-bold">
                                    Якщо хочете подвоїти радісні емоції малюка, на додаток до сертифікату ви можете
                                    обрати також іграшки на перший місяць підписки :)</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact">
                <div className="container px-3 px-md-5 py-4">
                    <div className="h-3"></div>
                    <p className="font-weight-bold text-purple">Залиште ваші контактні дані:</p>
                    <div className="container-subscription  w-sm-100 w-50 mx-auto">

                        <form action="" className="my-4 text-purple">
                            <div className="form-item">
                                <label htmlFor="name" className="font-weight-bold">Прізвище та ім’я</label><br />
                                <input type="text" id="name" name="name" placeholder="Прізвище та ім’я"
                                       className="w-100" value={name} onChange={handleNameChange} required/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="tel" className="font-weight-bold">Номер телефону</label><br />
                                <input type="tel" id="tel" name="tel" placeholder="+38(___) ___ __ __"
                                       className="w-100" value={number} onChange={handleNumberChange} required/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="email" className="font-weight-bold">Електронна адреса</label><br />
                                <input type="email" id="email" name="email" placeholder="Електронна адреса"
                                       className="w-100"value={email} onChange={handleEmailChange} required/>
                            </div>
                            {/*<div className="form-item">*/}
                            {/*    <label htmlFor="address" className="font-weight-bold">Адреса*/}
                            {/*        доставки</label><br />*/}
                            {/*    <input type="text" id="address" name="name" placeholder="Ім'я та призвіще"*/}
                            {/*           className="w-100" />*/}
                            {/*</div>*/}
                            <div className="form-item">
                                <label className="checkbox-container">Я надаю згоду на обробку персональних даних
                                    <input type="checkbox" required/>
                                        <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="form-item py-3">
                                <label className="font-weight-bold">Оберіть месенджер, у якому вам зручніше продовжити спілкування:</label><br />


                                <label htmlFor="viber" className="checkbox-container w-sm-100 w-25">Viber
                                    <input type="radio" id="viber" name="messenger" onChange={handleTelVibChange} required/>
                                        <span className="radio"></span>
                                </label>

                                <label htmlFor="telegram" className="checkbox-container w-sm-100 w-25">Telegram
                                    <input type="radio" id="telegram" name="messenger" onChange={handleTelVibChange} required/>
                                        <span className="radio"></span>
                                </label>

                                <br />
                            </div>
                            <input type="submit" value={'Зв’язатися зі мною'} className="btn btn-filled-pink my-5 mx-auto d-block" onClick={(event) => postData(monthes, addToys,name, number, email, telvib, event)}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <img src="img/gift/footer-hat.svg" alt="" class="footer-hat" />
        <footer class="pink-bg">

            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12 order-2 order-lg-1 text-sm-center py-5">
                        <div class="py-1">
                            <img src="img/logo.svg" alt="" class="logo" />
                        </div>
                        <div class="h-3"></div>
                        <div class="copyright text-center text-white py-3 d-inline-block">
                                    Copyright ©2021 Grow With Us. All rights reserved
                        </div>
                    </div>
                    <div class="col-lg-6 col-12 order-1 order-lg-2 text-right text-sm-center py-5">
                        <div class="social-icons px-2">
                            <a href="https://www.instagram.com/growwith__you">
                                <img src="img/inst.svg" alt="" />
                            </a>
                            <a href="https://www.facebook.com/growithyou.official">
                                <img src="img/fb.svg" alt="" />
                            </a>
                        </div>
                        <div class="contacts text-white p-3">
                            <p>+380990675541</p>
                            <p>growwithyou.subscription@gmail.com</p>
                        </div>
                        <div class="links d-inline-block text-center py-2">
                            <Link to={'/shipping'}><a href="" className="text-white px-3">Доставка і оплата</a></Link>
                            <Link to={'/privacy'}><a href="" className="text-white px-3">Політика конфіденційності</a></Link>
                        </div>
                    </div>
                </div>

        </div>
</footer>
</div>
    )
}
export default GiftCards;