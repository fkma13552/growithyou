import React from 'react'
import {Link} from 'react-router-dom'
import sheetdb from 'sheetdb-node'
import {useEffect, useState} from 'react'
import myFunc from "./jsfront";

function GiveToys() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [telvib, setTelVib] = useState('');

    useEffect(()=>{
        myFunc();
    });

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
        setName('');
        setNumber('');
        setEmail('');
        setTelVib('')
    }

    const postData = async (name, number, email, tgvb, event) => {
        event.preventDefault();
        try {
            const response = fetch("https://v1.nocodeapi.com/fkma13552/google_sheets/ATiYJpUtjNxwYXBG?tabId=Sheet1",{
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: "follow",
                body: JSON.stringify([[name, number, email, tgvb]])
            }).then(result => console.log(result)).then(() => clearInputs());




        } catch (e) {
            console.log(e);
        }
    }



    return (
        <div className="thank-you">

                <a href="" className=" text-center">
                    <Link to={'/'}>
                    <img src="img/black-logo.svg" alt="" className="my-3 logo" />
                    </Link>
                </a>

            <div className="">
                <h1 className="text-center font-weight-bold text-purple">
                    Передати іграшки
                </h1>
                <div className="h-3"></div>
                <div className="container text-purple">
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6 col-12">
                            <form action="">
                                <div className="form-item">
                                    <label htmlFor="name" className="font-weight-bold">Ім'я та призвіще</label><br />
                                    <input type="text" id="name" name="name" placeholder="Ім'я та призвіще"
                                           className="w-100" value={name} onChange={handleNameChange} required/>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="tel" className="font-weight-bold">Мобільний номер</label><br />
                                    <input type="tel" id="tel" name="tel" placeholder="+38(___) ___ __ __"
                                           className="w-100" value={number} onChange={handleNumberChange} required/>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="email" className="font-weight-bold">Електронна адреса</label><br />
                                    <input type="email" id="email" name="email" placeholder="Електронна адреса"
                                           className="w-100" value={email} onChange={handleEmailChange} required/>
                                </div>
                                <div className="form-item">
                                    <label className="checkbox-container">Я даю згоду на обробку моїх персональних
                                        данних
                                        <input type="checkbox" required/>
                                            <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="form-item py-3">
                                    <label className="font-weight-bold">Оберіть месенджер, у якому вам зручніше
                                        продовжити спілкування:</label><br />


                                    <label htmlFor="viber" className="checkbox-container w-sm-100">Viber
                                        <input type="radio" id="viber" name="messenger" onChange={handleTelVibChange} required/>
                                            <span className="radio"></span>
                                    </label>

                                    <label htmlFor="telegram" className="checkbox-container w-sm-100">Telegram
                                        <input type="radio" id="telegram" name="messenger" onChange={handleTelVibChange} required/>
                                            <span className="radio"></span>
                                    </label>

                                    <br />
                                </div>
                                <input type="submit" className="btn btn-filled-purple my-4 mx-auto d-block"
                                       value="ВІДПРАВИТИ" onClick={(event) => postData(name, number, email, telvib, event)}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GiveToys
