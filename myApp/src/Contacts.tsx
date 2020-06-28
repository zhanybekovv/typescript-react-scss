import React from 'react';
import axios from 'axios'

type PeopleState = {
    
}

class Contacts extends React.Component<PeopleState, any> {

    constructor(props: PeopleState){
        super(props);
        this.state = {

        }
    }
    
    instance = axios.create({
        withCredentials: true,
        baseURL: "https://jsonplaceholder.typicode.com/users"
    })

    getUser(){
        this.instance.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.setState(response.data)
            })
    }

    componentDidMount(){
        this.getUser()
    }

    render(){
    console.log(this.state[0])
      return (
        <div className="d-flex">
            <div className="border border-dark " style={{height: "300px", width: "300px"}}>
                
            </div>
        </div>
    );
    }
}

export default Contacts;
