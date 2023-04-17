import React , {Component} from 'react';

class User extends Component{
    constructor(props){
        super(props);
        this.name=props.name;
        this.surname=props.surname;
    }
    render(){
        return(
            <div>Hello im a User 
                <br/>
                {this.name} + " " + {this.surname}    
            </div> 
        ); 
    }
}

export default User;