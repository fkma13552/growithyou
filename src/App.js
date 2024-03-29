import React from 'react'
import './css/bootstrap-grid.min.css'
import './css/style.css'
import './App.css'
import Header from "./Header";
import Info from "./Info";
import About from "./About";
import Faq from "./Faq";
import GiveToys from "./GiveToys";
import ScrollToTop from './ScrollToTop';
import GiftCards from "./GiftCards";
import Shipping from "./Shipping";
import Privacy from "./Privacy";
import DiscountPopUp from "./DiscountPopUp";
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom'
import myFunc from "./jsfront";
import 'slick-carousel/slick/slick.min'
import ReactGA from 'react-ga'
import i18n from "i18next";

function usePageViews(){
  let location = useLocation();

  useEffect(() => {
    if(!window.GA_INITIALIZED){
      ReactGA.initialize("G-D94EQ8J0MD");
      window.GA_INITIALIZED = true;
    }

    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
  }, [location]);
}


function App() {
  usePageViews();

  const domain = document.domain;
  const [location, setLocation] = useState(useLocation().pathname);
  const [compName, setCompName] = useState('index');

  useEffect(() => {
    myFunc();
    if (domain === "en.growwithyou.club"){
      i18n.changeLanguage('en');
    }
  });
  return (
    <>
      <Header compName ={compName} changeCompName={() => setCompName} />
      {
        domain === "en.growwithyou.club" && <DiscountPopUp />
      }

        <Switch>
          <Route exact path={'/'}>
            <Info />
          </Route>
          <Route path={'/giftcards'}>
            <GiftCards />
          </Route>
          <Route path = {'/about'}>
            <About />
          </Route>
          <Route path={'/faq'}>
            <Faq location={location}/>
          </Route>
          <Route path={'/givetoys'}>
            <GiveToys />
          </Route>
          <Route path={'/privacy'}>
            <Privacy />
          </Route>
          <Route path={'/shipping'}>
            <Shipping />
          </Route>
        </Switch>
    </>
  );
}

export default App;
