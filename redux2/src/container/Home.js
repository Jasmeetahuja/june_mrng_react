import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import{ latestNews, articleNews, GalleryData } from '../actions';

import LatestNews from '../component/Home/LatestNews';
import ArticleNews from '../component/Home/ArticlesNews';
import Gallery from '../component/Home/Gallery';

class Home extends Component {

    componentDidMount(){
        this.props.latestNews()
        this.props.articleNews()
        this.props.GalleryData()
    }
    render(){
        return(
            <div>
                <LatestNews latestdata={this.props.articles.latest}/>
                <ArticleNews articlesdata={this.props.articles.articles}/>
                <Gallery latestGallery={this.props.galdata.galleryimg}/>
            </div>    
        )
    }
}

//Receive the data
function mapStateToProps(state){
    console.log(">>>>", state)
    return{
        articles: state.articles,
        galdata: state.gallery
    }
}

//Bind the action
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews, articleNews, GalleryData}, dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);