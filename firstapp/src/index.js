import React from 'react';
import ReactDOM from 'react-dom';


////components
import Header from './header';


const App = ()=> {
    return(
    <div>
        <Header/>
        <h1>Welcome to React</h1>
        <h2>This is Learntek class</h2>
    </div>
        
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));