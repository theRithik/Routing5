import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Post from './post';
import Profile from './profile';
import Params from './params';

const Routing =()=>{
    return(
        <BrowserRouter>
        <Header/>
        <div className='container'>
        <Route exact path="/" component={Home}/>
        <Route exact path='/post' component={Post}/>
        <Route path='/post/:topic' component={Params}/>
        <Route path='/profile' component={Profile}/>
        </div>
        <Footer/>
        </BrowserRouter>
    )
}
export default Routing;