import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import{ latestNews, articleNews } from '../actions';

import LatestNews from '../component/Home/LatestNews';
import ArticleNews from '../component/Home/ArticlesNews';

class Home extends Component {

    componentDidMount(){
        this.props.latestNews()
        this.props.articleNews()
    }
    render(){
        return(
            <div>
                <LatestNews latestdata={this.props.articles.latest}/>
                <ArticleNews articlesdata={this.props.articles.articles}/>
            </div>    
        )
    }
}

//Receive the data
function mapStateToProps(state){
    console.log(">>>>", state)
    return{
        articles: state.articles
    }
}

//Bind the action
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews, articleNews}, dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);