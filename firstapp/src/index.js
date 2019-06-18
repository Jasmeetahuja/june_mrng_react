import React, {Component} from 'react';
import ReactDOM from 'react-dom';


////components
import Header from './component/header';
import JSON from './db.json';
import NewsList from './component/news_list';


class App extends Component{

    constructor(){
        super()

        this.state={
            news:JSON

        }
    }

    render(){
        console.log(">>>",this.state.news)
    return(
        <div>
            <Header/>
            <NewsList/>
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