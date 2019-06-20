import React, {Component} from 'react';
import ReactDOM from 'react-dom';


////components
import Header from './component/header';
import JSON from './db.json';
import NewsList from './component/news_list';


class App extends Component{

    constructor(props){
        super(props)

        this.state={
            news:JSON,
            filtered:JSON

        }
    }

    filterNews(keyword){
        let output = this.state.news.filter((item)=>{
            return item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
        this.setState({filtered:output})

    }

    render(){
    return(
        <div>
            <Header userInput ={(uinput)=> this.filterNews(uinput)}/>
            <NewsList newsdata ={this.state.filtered}/>
        </div>
            
        )
    }
}
// const App = ()=> {
//     return(
//     <div>
//         <Header/>
//         <h1>Welcome to React</h1>
//         <h2>This is Learntek class</h2>
//     </div>
        
//     )
// }


ReactDOM.render(<App/>, document.getElementById('root'));