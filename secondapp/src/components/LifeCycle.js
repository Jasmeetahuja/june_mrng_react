// Get Default state
// Set initial state
// Before Get created
// Render JSX
// After component is mounted


import React, { Component } from 'react';


class LifeCycle extends Component {
    //1 Get Default state
    constructor(props){
        super(props)
        console.log('inside constructor')

        //2 Set initial state
        this.state ={
            title:'LifeCycle'
        }
    }

    //3 Before Get create
    componentWillMount(){
        console.log('inside componentWillMount')
       // document.querySelector('h3').style.color="red";
    }


    //4 Render JSX
    render(){
        console.log('inside render')
        
        return(
            <div>
                <h1>HIII</h1>
                <h3>{this.state.title}</h3>
            </div>
        )
    }

    //5 After component is mounted
    componentDidMount(){
        console.log('inside componentDidMount')
        document.querySelector('h3').style.color="red";

    }

}

export default LifeCycle;