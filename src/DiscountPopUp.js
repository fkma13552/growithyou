import react, {useState} from "react";
import './DiscountPopUp.css';

function DiscountPopUp() {

    const [showPopUp, setShowPopUp] = useState(true);
    const [email, setEmail] = useState('');

    function hidePopUp() {
        setShowPopUp(false);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const clearInputs = () => {
        setShowPopUp('');
    }

    const postData = async (email, event) => {
        event.preventDefault();
        try {
            const response = fetch("https://v1.nocodeapi.com/fkma13552/google_sheets/YQqWpnUhjqNNCWFU?tabId=Sheet1",{
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: "follow",
                body: JSON.stringify([[email, new Date(Date.now()).toDateString()]])
            }).then(() => clearInputs());
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <div className={showPopUp ? "pop-up-container" : "pop-up-container-hide"}>
            <div className="pop-up">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 col-12 order-2 order-sm-1">
                        <p className="px-4 text-medium text-white font-weight-bold">
                            IF YOU ARE HERE, YOU MUST BUY TOYS EVERY MONTH, SPENDING AN AVERAGE OF $80. And perhaps you’re
                            the kind of parent that feel toy clutter has taken over their life.
                        </p>
                    </div>
                    <div className="col-md-1 col-12 order-1 order-sm-2">
                        <img src="./img/index/pop-up-close.svg" alt="" className="pop-up-close" onClick={hidePopUp}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <img src="./img/index/yellow-bubble.svg" alt="" />
                    </div>
                    <div className="col-12 col-md-8 ">
                        <p className="text-medium text-purple font-weight-bold">
                            SOLUTION IS HERE!
                        </p>
                        <p className="text-medium font-weight-bold">
                            JUST SIGN UP AND GET 50% DISCOUNT ON FIRST MONTH OF SUBSCRIPTION
                        </p>
                        <div className="pop-up-input">
                            <input type="email" className="text-medium text-purple" placeholder="Enter your email here" onChange={handleEmailChange}/>
                                <button className="text-medium" type="button" onClick={(event) => postData(email, event)}>GET MY DISCOUNT!</button>
                        </div>
                    </div>
                    <div className="col-1">
                        <img src="" alt="" className="pop-up-close" onClick={hidePopUp}/>
                    </div>
                </div>
            </div>
        </div>)
}
export default DiscountPopUp;