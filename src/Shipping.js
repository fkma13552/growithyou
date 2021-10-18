import react from 'react';
import i18n from "i18next";

function Shipping() {
    const domain = document.domain;
    if (domain === "en.growithyou.club")
        return(
            <div className={"container"}>
                <h1>Shipping Info</h1>
                <div className={"margin-top-2"}>
                    <p>We are here to provide you with the best service. If you have any questions regarding the
                        shipping or want to receive your order faster contact us at care@the-sleeper.com</p>
                </div>
                <div>
                    <p>Please note that order processing times and delivery can extend during the Holidays, sales and special offers.</p>
                </div>
                <div className={"margin-top-2"}>
                    <p>Delivery. To make your shopping experience better and avoid long wait times, we have collaborated
                        with two fulfillment centers on the East and West coast, that ship our products globally via DHL.
                        All orders within the US will be shipped with UPS service. Please allow 3 to 7 business days to deliver
                        your order, depending on destination. We will send you a tracking number in the Shipping
                        notification email once your order is ready. If you have questions regarding the country from
                        which your order will be shipped, contact us at  growwithyou.subscription@gmail.com.</p>
                </div>
                <div className={"margin-top-2"}>
                    <p>Free shipping. We will ship orders for free anywhere in the world.</p>
                </div>
                <div className={"margin-top-2"}>
                    <p>Stock items shipping. Please keep in mind if you placed your order for an item 'In stock' before
                        10 AM EST on a business day (except holidays), your order will ship the same day. Orders of
                        stock items placed after 10 AM EST will ship the next business day.</p>
                </div>
                <div className={"margin-top-2"}>
                    <p>Orders within US.Standard shipping within US may take between 4-7 days, and if you choose
                        Express shipping on the checkout, you will receive your order in 3 days.</p>
                </div>
                <div className={"margin-top-2"}>
                    <p>Holidays and Sales. Please note that processing times can extend during the Holidays, sales and
                        special offers. If you have any questions when your item will arrive, contact us at
                        growwithyou.subscription@gmail.com</p>
                </div>
                <div className={"margin-top-2"}>
                    <h3>Return Policy</h3>
                    <ol>
                        <p>Here are the 4 easy steps on how to exchange or return your item:</p>
                        <li>Get in touch with our Customer Care team at growwithyou.subscription@gmail.com
                            to get RMA form and the return shipping address.</li>
                        <li>Pack your order in original Sleeper package and send it to us via any
                            trackable and insured service of your choice, at your expense.</li>
                        <li> Let us know the tracking number so we can process your return faster.</li>
                        <li>Please allow 2-3 weeks to process your return. We’ll be emailing you as soon as we
                            receive the returned items and refund or exchange your items.</li>
                    </ol>
                </div>
                <div className={"margin-top-2"}>
                    <p>Damaged / wrong item received. If you’ve received a damaged or wrong item, contact us at
                        growwithyou.subscription@gmail.com with a photo of the damage/wrong item and your order number.
                        We’ll take care of it.</p>
                </div>
            </div>
        );
    else{
        return(
            <div className={"container"}>
                <h1>ДОСТАВКА ТА ОПЛАТА</h1>
                <div className={"margin-top-2"}>
                    <p>Оплатити замовлення можна:</p>
                    <p>- банківською картою на сайті <br/>
                        АБО <br/>
                        - оплата готівкою у відділенні Нової Пошти
                    </p>
                </div>
                <div className={"margin-top-2"}>
                    <h3>Доставка замовлень</h3>
                    <p>Доставляємо іграшки по місту Київ кур’єром протягом 3-5 днів. Доставка іграшок по всій Україні
                        здійснюється за допомогою кур'єрської служби «Нова Пошта», що займає 3-5 днів.</p>
                    <p>Доставка та повернення іграшок здійснюється БЕЗКОШТОВНО.</p>
                </div>
                <div className={"margin-top-2"}>
                    <h3>Умови повернення/обміну</h3>
                    <p>Обмін і повернення предметів у належній якості здійснюється протягом 14 календарних днів з
                        моменту отримання замовлення, якщо є документ, що підтверджує факт покупки.</p>
                    <p>Клієнти повинні покривати всі транспортні витрати на повернення товару.</p>
                </div>
                <div className={"margin-top-2"}>
                    <h3>Процедура повернення/обміну</h3>
                    <p>Ви можете обміняти або повернути продукцію протягом 14 днів з дати покупки.
                        В Україні обмін або повернення товарів можна здійснити кур'єрською службою.</p>
                </div>
                <div className={"margin-top-2"}>
                    <p>Користуючись нашим веб-сайтом, ви (відвідувач) погоджуєтеся дозволяти третім сторонам обробляти
                        вашу IP-адресу, щоб визначити ваше місцезнаходження з метою конвертації валюти. Ви також згодні
                        мати, що валюта зберігала в домашньому печиві сесії у вашому браузері (тимчасове домашнє печиво,
                        яке автоматично переміщене, коли ви закриваєте свій браузер). Ми робимо це для того, щоб відібрана
                        валюта залишилася вибраною і послідовною, переглядаючи наш веб сайт таким чином, що ціни можуть
                        перетворити на вашу (відвідувач) місцеву валюту.</p>
                </div>
            </div>
        )
    }
}

export default Shipping;