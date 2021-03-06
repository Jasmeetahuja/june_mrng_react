import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


//Components
import Home from './home';
import Posts from './posts';
import Profile from './profile';
import PostDetails from './postdetail';
import LifeCycle from './LifeCycle';

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                 <div>
                     <header>
                     <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand">WebSiteName</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><Link to= "/">Home</Link></li>
        <li><Link to= "/posts">Posts</Link></li> 
        <li><Link to= "/profile">Profile</Link></li> 
        <li><Link to= "/lifecycle">LifeCycle</Link></li> 
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
                         
                     </header>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/posts" component={Posts}></Route>
                    <Route path="/posts/:subject" component={PostDetails}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/lifecycle" component={LifeCycle}></Route>
                 </div>
           </BrowserRouter>
        )
    }
}


export default Routing;