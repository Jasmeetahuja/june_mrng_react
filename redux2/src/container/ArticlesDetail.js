import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedNews, clearSelectedNews } from '../actions';

class ArticleDetail extends Component{
    componentDidMount(){            
        this.props.selectedNews(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.clearSelectedNews();
    }

    renderNews= ({selected}) =>
    {
        if(selected){
            return selected.map((data) => {
                return(
                    <div key={data.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {data.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {data.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {data.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span>Articleby:<strong>{data.author}</strong></span>
                            <img src={`/images/articles/${data.img}`}/>
                            <div className="body_news">
                                {data.body}
                            </div>
                        </div>
                    </div>
                )
            })
        }

    }
    render(){
        return(
            <div className="news_container">
                {this.renderNews(this.props.details)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("<<<<details<<<",state);
    return {
        details:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedNews, clearSelectedNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);