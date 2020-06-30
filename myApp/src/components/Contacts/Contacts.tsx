import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import { EmployeeImg } from '../../static';

type User = {
    name: string,
    id: number;
    username: string;
    email: string;
    address:{
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

const Contacts: React.FC = () =>{

    const[users, setUsers] = useState<User[]|undefined>()

    
    const instance = axios.create({
        withCredentials: true,
        baseURL: "https://jsonplaceholder.typicode.com/users"
    })


    const getUser = async() => {
        const res = await instance.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data)
    }

    useEffect(()=>{
        getUser()
    },[])

    return (
        <div className="mt-4">
            { users && users.map( (user, i) => {                        
                    return (
                        <Card
                        key = {i}
                        name={user.name} 
                        email={user.email} 
                        phone={user.phone} 
                        adress={ `${user.address.street} ${user.address.suite} ${user.address.city}`} 
                        zipcode = {user.address.zipcode} 
                        height="200px" 
                        width="100%" 
                        heightImg="100%" 
                        widthImg="30%" 
                        logo={EmployeeImg} 
                        hr={false}/>
                            ) 
                        } 
                    ) 
            }
        </div>
    );
}

export default Contacts;
