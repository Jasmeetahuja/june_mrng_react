import React, { Component } from 'react';
import Banner from './Banner';


const Url_Artist = "http://localhost:8900/artists"

class Home extends Component {
    constructor(props){
        super(props)

        this.state ={
            artists:''
        }
    }
    render(){
        return(
            <Banner></Banner>
        )
    }
}

export default Home;