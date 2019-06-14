import React, {Component} from 'react';

import './header.css';


class Header extends Component{

    inputChange(event){
        console.log(event.target.value)
    }
    render(){

        return(
            <header>
              <div className="logo"
              onClick={()=>{console.log('Clicked')}}>Logo</div>
              <center>
              <input onChange={this.inputChange}/>
              </center>
              <hr/>
            </header>

        )
    }
}




export default Header;