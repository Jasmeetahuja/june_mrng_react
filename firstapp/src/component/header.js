import React, {Component} from 'react';

import './header.css';


class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'React App', 
            userInput: 'User Search'
        }
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({userInput:event.target.value? event.target.value:'User Search'})
    }
    render(){

        return(
            <header>
              <div className="logo"
              onClick={()=>{console.log('Clicked')}}>
              {this.state.title}
              </div>
              <center>
              <input onChange={this.inputChange.bind(this)}/>
              <p>{this.state.userInput}</p>
              </center>
              <hr/>
            </header>

        )
    }
}




export default Header;