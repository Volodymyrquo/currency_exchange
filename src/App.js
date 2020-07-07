import React from 'react';
import './App.css';
import Header from "./components/Header";
import slideImg from "./assets/images/slide_img.png";
import {Redirect, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Exchange from "./components/Exchange";
import Services from "./components/Services";
import NotFound from "./components/NotFound";
import News from "./components/News";
import Contact from "./components/Contact";
import Rates from "./components/Rates";


function App() {

    return (<>
            <Header/>
            <Switch>
            <Route exact path='/' render={() => <Redirect to={"/home"}/>}/>
            <Route path="/home" render={() => <Home/>}/>
            <Route path="/about" render={() => <About/>}/>
            <Route path="/exchange" render={() => <Exchange/>}/>
            <Route path="/services" render={() => <Services/>}/>
            <Route path="/news" render={() => <News/>}/>
            <Route path="/contact" render={() => <Contact />}/>
            <Route path="/rates" render={() => <Rates />}/>
            <Route path='*' render={() => <NotFound />}/>
            </Switch>
            <Footer/>

        </>
    );
}

export default App;
