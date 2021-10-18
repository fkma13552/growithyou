import react from 'react';

function Privacy() {
    const domain = document.domain;
    if (domain === "en.growithyou.club")
    //if (true)
        return(
            <div className={"container"}>
                <h1>Privacy Policy</h1>
                <div>
                    <p>Welcome to Grow with your (“we,” “us” or “our”) and our website www.growithyou.club (the “Website”).</p>
                </div>
                <div>
                    <p>Your privacy is important to us and our Privacy Policy explains what information we collect on our
                        Website or through the Services provided, the way we collect it, what we do with it, how the
                        information may be shared with other parties, and what control you have about the information shared with us.</p>
                </div>
                <div>
                    <p>Our data collection and processing rules are designed comply with GDPR, DPA rules and
                        recommendations, Canada’s Personal Information Protection and Electronic Documents Act
                        (PIPEDA) and California Consumer Privacy Act (CCPA).</p>
                </div>
                <div>
                    <p>Any updates or changes to this Privacy Policy are posted on this page.
                        By using our Website and Services, you indicate that you have read and agreed to our Privacy Policy.</p>
                </div>
                <div>
                    <p>This Privacy Policy does not describe information collection practices on other sites, including
                        those linked to or from the Site nor any other companies or persons associated with the Services.</p>
                </div>
                <div className={"margin-top-2"}>
                    <h3>Table of contents:</h3>
                    <ul>
                        <li><a href="#collect">The Information we collect and how we use it</a></li>
                        <li><a href="#sharing">Sharing your Personal information</a></li>
                        <li><a href="#providers">Service Providers</a></li>
                        <li><a href="#links">Links to Third-Party Services</a></li>
                        <li><a href="#security">Security</a></li>
                        <li><a href="#collauto">Information collected automatically / Cookies</a></li>
                        <li><a href="#children">Children’s privacy issues</a></li>
                        <li><a href="#rights">Your Rights</a></li>
                        <li><a href="#changes">Changes to this Privacy Policy</a></li>
                        <li><a href="#contact">How to contact Grow with you</a></li>
                    </ul>
                </div>
                <div className={"margin-top-2"} id={"collect"}>
                    <h3>The Information we collect and how we use it</h3>
                    <ul>
                        <p>We collect the information you provide directly to us when you open an account, make a purchase,
                            subscribe to our newsletters, or interact with us on social media. The types of personal
                            data we may collect directly from you include:</p>
                        <li>Contact information, such as your name, email address, shipping address, company
                            name (where applicable), and phone number;</li>
                        <li>Account information, such as your username, password or profile picture;</li>
                        <li>Billing information, such as credit card details, PayPal email address, and billing address;</li>
                        <li>Optional information you may choose to provide, such as your date of birth, gender,
                            social media usernames, makeup and color preferences, or any other information;</li>
                        <li>If you sign up for account using a Social Network, we may collect Personal Information
                            from your profile, such as your display name, username, and e-mail address;</li>
                        <li>Communication history between you and Grow with you;</li>
                        <li>Device data such as computer or device you are using when you access our Website, device IP
                            address, type of web browser and operating system you are using, the identity of your
                            internet service provider, and your device and browser settings.</li>
                        <li>Website usage data such as pages you visit on our Website, the websites you use prior
                            to visiting our Website, your actions on our Website.</li>
                    </ul>
                    <p className={"margin-top-1"}>According to <b>California Consumer Privacy Act</b>, we collect:</p>
                    <ul className={"unordered-list"}>
                        <li className={"unordered-list"}>Identifiers, such as, a real name, alias, postal address, online identifier, Internet
                            Protocol address, email address, account name.</li>
                        <li className={"unordered-list"}>Personal information categories listed in the California Customer Records statute
                            (Cal. Civ. Code § 1798.80(e)), such as a name, address, telephone number, credit
                            card number, debit card number, or any other financial information. – Some personal
                            information included in this category may overlap with other categories.</li>
                        <li className={"unordered-list"}>Commercial information, such as products purchased, obtained, or considered at the Website,
                            or other purchasing or consuming histories or tendencies.</li>
                        <li className={"unordered-list"}>Internet or other similar network activity.</li>
                        <li className={"unordered-list"}>Browsing history, search history, information on a consumer’s interaction with a website,
                            application, or advertisement.</li>
                    </ul>
                    <br/>
                    <p>We may use the information we collect to deliver the product, to maintain and personalize your
                        account and our interactions with you, and to provide, maintain, and improve our Services.
                        We also use the information we collect to:</p>
                    <ul className={"unordered-list"}>
                        <li className={"unordered-list"}>Inform you about the status of your order and shipping information;</li>
                        <li className={"unordered-list"}>Communicate with you about our Services;</li>
                        <li className={"unordered-list"}>Inform you about new products and services that may be of interest to you;</li>
                        <li className={"unordered-list"}>Respond to your requests, inquiries, comments, feedback and suggestions;</li>
                        <li className={"unordered-list"}>Facilitate your engagement with the Services, including to enable you to post comments and reviews;</li>
                        <li className={"unordered-list"}>Offer contests, sweepstakes, or other promotions;</li>
                        <li className={"unordered-list"}>Conduct or administer surveys and other market research;</li>
                        <li className={"unordered-list"}>Protect against, identify, investigate, and respond to fraud or other illegal activity;</li>
                        <li className={"unordered-list"}>Improve your experience with our Website and Services</li>

                    </ul>
                </div>
                <div className={"margin-top-2"} id={"sharing"}>
                    <h3>Sharing your Personal information</h3>
                    <p>We will never share, rent or sell any of your Personal Information to third parties except noted
                        in this Policy, unless required by law, or unless you have given us express consent to do so.</p>
                    <p>We only share your Personal Information with third parties that help us provide the Services to you (“Service Providers”).</p>
                    <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
                    <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
                    <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>
                    <p>In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
                    <p>As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act. Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</p>
                    <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
                </div>
                <div className={"margin-top-2"} id={"providers"}>
                    <h3>Service Providers</h3>
                    <p>We use Stripe to process payments. You can read more about how Stripe uses your Personal Information <a
                        href="https://stripe.com/privacy-center/legal">here.</a></p>
                    <p>We use Google Analytics to help us understand how our customers use the Website.
                        You can read more about how Google uses your Personal Information <a href="https://www.google.com/intl/en/policies/privacy/">here.</a></p>
                    <p>You can also opt-out of Google Analytics <a href="https://tools.google.com/dlpage/gaoptout">here.</a></p>
                    <p>We use PayPal to process some payments when PayPal checkout is selected.
                        You can learn about PayPal’s use of your Personal Information <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-ful">here.</a></p>
                </div>
                <div className={"margin-top-2"} id={"links"}>
                    <h3>Links to Third Party Services</h3>
                    <p>Please remember that our Privacy Policy only applies to our Website and when you click on
                        links on our store that may direct you away from our site, we are not responsible for the
                        privacy practices of other sites. We encourage you to read their own privacy policies.</p>
                </div>
                <div className={"margin-top-2"} id={"security"}>
                    <h3>Security</h3>
                    <p>To protect your personal information, we take reasonable precautions and follow industry best
                        practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or
                        destroyed. If you provide us with your credit card information, the information is encrypted
                        using secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no
                        method of transmission over the Internet or electronic storage is 100% secure, we follow all
                        PCI-DSS requirements and implement additional generally accepted industry standards.</p>
                </div>
                <div className={"margin-top-2"} id={"collauto"}>
                    <h3>Information collected automatically / Cookies</h3>
                    <p>Cookies help us personalize your experience with Grow with you. We use cookies to keep track
                        of how customers are navigating the Site and to allow us to provide you with personalized
                        content. Cookies are small pieces of information that are issued to your computer when you
                        visit a website and which store and sometimes track information about your use of the Services.</p>
                    <p>When you enter the Site, our web server sends a cookie to your computer which
                        allows us to recognize your computer but not specifically who is using it.
                        By associating the identification numbers in the cookies with other customer information when,
                        for example, you log-in to the Site or use the Services, we know that the cookie information
                        relates to you.</p>
                    <p>Some cookies used by our Services are served by us, and some are served by
                        third parties who are delivering services on our behalf.</p>
                </div>
                <div className={"margin-top-2"} id={"children"}>
                    <h3>Children’s privacy issues</h3>
                    <p>Our Website is not intended for children under 16 years of age. No one under age 16 may provide
                        any information to or on the Website. We do not knowingly collect personal information from
                        children under 16.</p>
                    <p>If you are under 16, do not use or provide any information on this Website or on or through
                        any of its features/register on the Website, make any purchases through the Website, use any of
                        the interactive or public comment features of this Website or provide any information about
                        yourself to us, including your name, address, telephone number, email address, or any screen
                        name or username you may use.</p>
                    <p>If we learn we have collected or received personal information from a child under 16 without
                        verification of parental consent, we will delete that information. <br/>
                        If you believe we might have any information from or about a child under 16, please contact us.
                    </p>
                </div>
                <div className={"margin-top-2"} id={"rights"}>
                    <h3>Your Rights</h3>
                    <h5>You have the following rights:</h5>
                    <div>
                        <p><i>Unsubscribe from our Communications</i></p>
                        <p>As mentioned above, we may use the Personal Information we collect from you to send you
                            newsletters regarding new products, promotions or other news. If you no longer with to
                            receive these updates, you can opt out by emailing us at growwithyou.subscription@gmail.com.</p>
                    </div>
                    <div>
                        <p><i>Disable Cookies Collection</i></p>
                        <p>You can choose to disable the collection and use of cookies by changing the settings in
                            the device you are using to access our Website. <br/>
                            Please keep in mind that without cookies you may not be able to use all the features of our Website.</p>
                    </div>
                    <div>
                        <p><i>Right to access, review, and delete Personal Information</i></p>
                        <p>According to GDPR, CCPA, DPA and PIPEDA, you may have the right to obtain confirmation that
                            we hold Personal Information about you, request access to and receive information about
                            this Personal Information, as well as restrict the use of this information or delete it
                            entirely. <br/>
                            In some cases the right to access Personal Information may be limited by local law.
                            If you qualify to exercise these rights, please contact us at the address below. <br/> <br/>
                            Grow with you <br/>
                            Predslavinskaya 55A <br/>
                            Kyiv, Ukraine <br/>
                            E-mail: growwithyou.subscription@gmail.com. <br/> <br/>
                            Please note that you may be asked to provide additional information for identity verification purposes, or to verify that you are the owner of the email account in question.

                        </p>
                    </div>
                    <div className={"margin-top-2"}>
                        <h3>Privacy Notice for California Residents</h3>
                        <h4>This Privacy Notice for California Residents supplements the information provided in this Privacy Policy</h4>
                        <p>and applies solely to all visitors, users, and others who reside in the State of California
                            (“consumers” or “you”). We adopt this notice to comply with the California Consumer Privacy
                            Act of 2018 (CCPA) and any terms defined in the CCPA have the same meaning when used in this notice.</p>
                        <p>Information We Collect</p>
                        <p>Our Website collects information that identifies, relates to, describes, references, is
                            capable of being associated with, or could reasonably be linked, directly or indirectly,
                            with a particular consumer or device (“personal information”). In particular, Grow with
                            your ‘s website, growithyou.club (“Website”), has collected the following categories of
                            personal information from its consumers within the last twelve (12) months:</p>
                        <h4>If you are a California consumer and would like to make any requests under the
                            CCPA, please contact us at growwithyou.subscription@gmail.com.</h4>
                    </div>
                    <div className={"margin-top-2"} id={"changes"}>
                        <h3>Changes to this Privacy Policy</h3>
                        <p>We reserve the right to modify this privacy policy at any time, so please review it
                            frequently. Changes and clarifications will take effect immediately upon their posting on
                            the website. If we make material changes to this policy, we will notify you here that it
                            has been updated, so that you are aware of what information we collect, how we use it, and
                            under what circumstances, if any, we use and/or disclose it.</p>
                        <p>If our store is acquired or merged with another company, your information may be
                            transferred to the new owners so that we may continue to sell products to you.</p>
                    </div>
                    <div className={"margin-top-2"} id={"contact"}>
                        <h3>How to contact Grow with you</h3>
                        <p>If you have questions regarding this Privacy Policy, or would like to update your preferences
                            or information we have about you, please contact us at growwithyou.subscription@gmail.com.
                            We will take reasonable steps to respond to your request.</p>
                    </div>
                </div>

            </div>
        );
    else{
        return(
            <div className={"container"}>
                <h1>Політика конфіденційності</h1>
                <div className={"margin-top-2"}>
                    <h3>Обмеження відповідальності</h3>
                    <p>Онлайн-сервіс підписки на іграшки Grow with you зобов’язується надавати своїм клієнтам якісні
                        послуги і за допомогою сайту надавати максимально персоналізований сервіс. Для цього нам
                        необхідно зберігати і періодично використовувати Ваші персональні дані (ім’я, прізвище,
                        дату народження вашу та вашої дитини, контактний номер телефону, адресу електронної пошти
                        та індивідуальні переваги). Клієнти нашого сервісу мають бути впевнені в тому, що ми
                        розпоряджаємося їх персональними даними з відповідальністю, передбаченою законодавством.</p>
                </div>
                <div className={"margin-top-2"}>
                    <h3>Збір персональних даних</h3>
                    <p>Персональні дані – це будь-яка інформація, що дозволяє нам ідентифікувати Вашу особистість та
                        зв’язатися з Вами. Ми збираємо та зберігаємо інформацію, коли Ви стаєте нашим клієнтом/
                        реєструєтесь на сайті чи здійснюєте вхід в систему для використання нашого сайту ,
                        задаєте питання, вказуєте місто, заповнюєте форми, залишаєте заявку, проводите трансакції
                        чи відправляєте нам повідомлення електронною поштою чи в месенджери. <br/></p>
                    <p>Grow with you використовує Ваші персональні дані для оформлення підписки, виконання погоджених
                        трансакцій, пов’язаних з наданням Вам послуг, відповіді на Ваші питання та запити, відправки
                        сповіщень про найближчі акції та рекламні матеріали, останніх новин чи спеціальних пропозицій,
                        які, на наш погляд, можуть Вас зацікавити. <br/></p>
                    <p>Деяка інформація, яка збирається на сайті не відноситься до персональних даних,
                        так як вона не ідентифікує Вашу особистість. Наприклад, ми можемо зафіксувати адресу Вашого
                        серверу, доменне ім’я, дату та час Вашого візиту на сайт, а також переглянуті Вами сторінки.
                        Ми застосовуємо таку інформацію анонімно та агреговано, в цілях розвитку статистики та сайту. <br/></p>
                    <p>Проте ми зберігаємо за собою право використання даної інформації з метою визначення місця
                        еребування окремої особи, в тому числі, коли у нас є всі підстави вважати, що ця особа веде
                        незаконну та неправомірну діяльність по відношенню до даного сайту. <br/></p>
                    <p>Файли cookie являють собою невеликі інформаційні файли, які передаються Вашому веб-браузеру з
                        метою ідентифікації. Файли cookie, які ми використовуємо, не ідентифікують Вашу особу.
                        Натомість вони ідентифікують Ваш веб-браузер. <br/></p>
                    <p>Ми використовуємо «сесійні» cookie для зберігання інформації про сесію при вході в систему,
                        які дозволяють нам впізнати попередньо аутентифікованих користувачів і здійснювати онлайн
                        продаж (наприклад, опрацювати замовлення у Вашому кошику для відбору товарів).</p>
                    <p>Ми також використовуємо «постійні» cookie, які допомагають захищати наших клієнтів та
                        користувачів, і надають нам інформацію про будь-якого користувача нашого сайту/додатку.
                        «Постійні» cookie дозволяють нам відслідкувати користувачів на сайті/у додатку та ідентифікувати
                        учасників, які некоректно використовують наші послуги. <br/></p>
                    <p>Більшість веб-браузерів встановлено на прийом файлів cookie. Якщо Ви бажаєте не отримувати їх,
                        Ви можете налаштувати свій браузер, щоб він не приймав cookie та надсилав Вам повідомлення
                        про їх використання. Також є програмні продукти, які можуть управляти за Вас файлами cookie.
                        Проте відмова від прийому файлів cookie Вашим веб-браузером може обмежити функціонування
                        даного сайту у Вашому випадку. <br/></p>
                </div>
                <div className={"margin-top-2"}>
                    <h3>Доступ до інформації</h3>
                    <p>Grow with you  застосував ряд технологічних, фізичних та адміністративних заходів захисту
                        від несанкціонованого доступу, а також заходів у зберіганні Ваших даних і відповідному
                        використанні Ваших персональних даних. <br/>
                        Ми не обмінюємось інформацією з третіми особами, у випадку, якщо їх метою є прямий маркетинг.
                    </p>
                    <p>Ми ж можемо розкривати персональні дані третім особам:</p>
                    <ul>
                        <li className={"unordered-list"}>у випадку необхідності чи законних повноважень на розкриття персональних даних; та/чи</li>
                        <li className={"unordered-list"}>з Вашого дозволу.</li>
                    </ul>
                    <p>Ми також можемо розкривати персональні дані за умови, що таке розголошення є
                        необхідним для захисту наших прав чи власності, або прав чи власності користувачів
                        нашого сайту. Це також можливо у випадку надзвичайних обставин, що передбачають дії
                        з забезпечення персональної безпеки нашого сайту чи необмеженого кола осіб.</p>
                </div>
                <div className={"margin-top-2"}>
                    <h3>Ануляція підписки чи призупинка участі</h3>
                    <p>Якщо Ви з будь-якої поважної та обгрунтованої причини хочете відмовитися від співробітництва чи
                        комунікацій з Grow with you у будь-якому прояві (повному чи частковому), будь ласка, зв’яжіться
                        за актуальним номером телефону Grow with you у вашому місті. </p>
                </div>
                <div className={"margin-top-2"}>
                    <h3>Скарги, питання та пропозиції щодо конфіденційності</h3>
                    <p>Якщо Ви маєте питання чи пропозиції відносно даних положень Політики конфіденційності,
                        просимо Вас зв’язатися з нами, скориставшись електронною адресою
                        growwithyou.subscription@gmail.com. <br/> <br/></p>

                    <p>Будь-які скарги щодо конфіденційності Вашої інформації можна направляти на електронну адресу growwithyou.subscription@gmail.com. .</p>
                </div>
            </div>
        );
    }
}

export default Privacy;