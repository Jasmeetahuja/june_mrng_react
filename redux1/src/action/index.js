export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:'1', name:'Avengers'},
            {id:'2', name:'Cars'},
            {id:'1', name:'Hangover'}
        ]
    }
}