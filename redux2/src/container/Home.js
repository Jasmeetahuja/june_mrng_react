import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';
import{ latestNews } from '../actions';

import LatestNews from '../component/Home/LatestNews';

class Home extends Component {
    render(){
        return(
            <div>
                <LatestNews/>
            </div>    
        )
    }
}

//Receive the data
function mapStateToProps(state){
    return{
        articles: state.articles
    }
}

//Bind the action
function mapDispatchToProps(){

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);