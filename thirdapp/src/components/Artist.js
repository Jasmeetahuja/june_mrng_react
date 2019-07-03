import React, { Component } from 'react';
import Header from './Header';

const Url_Artist = "http://localhost:8900/artists"


class Artist extends Component {

    constructor(props){
        super(props);

        this.state = {
            artists:''

        }
    }

    componentDidMount(){
        console.log(this.props.match.params.artistid)
        fetch(`${Url_Artist}/${this.props.match.params.artistid}`,{
            method:'GET'
        }).then((response) => response.json())
        .then((data) => {
            console.log("####",data)
            this.setState({
                artists:data
            })
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('images/covers/${this.state.artists.cover}.jpg)`}}>

                        </span>
                    </div>
                </div>
            </div>
        )

    }
    
} 

export default Artist;