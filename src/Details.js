import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import { useState } from "react";

function DetailsCard(props){
 console.log(props.employee.company)
  return(
<div className="card card-size">
  
  <div className="card-body">
    <p className="card-text">- name: {props.employee.name}</p>
    <p className="card-text">- username: {props.employee.username}</p>
    <p className="card-text">- email: {props.employee.email}</p>
    <p className="card-text">- phone: {props.employee.phone}</p>
    <p className="card-text">- company: {props.company.name} </p>
    <p className="card-text">- website: {props.employee.website} </p>
    <p className="card-text">- address: 
    <ul>
      <li>street: {props.employee.name}</li>
    </ul> </p>
    <Button url="/" style="btn btn-primary" text="Go back" />
  </div>
</div>
  )
}


function Button(props){

  return(
<a href={props.url} className={props.style}>{props.text}</a>
  )
}


function Details() {
  const [employee, setEmployee] = useState([]);
  const [update, setUpdate] = useState();
  //useParams
  const { id } = useParams();


      function handleErrors(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      }
  

  React.useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then(handleErrors)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setEmployee(responseData);

      })
      .catch((error) => console.log(error));
  }, [update]);

  return (
<div className="container">



<DetailsCard employee={employee} company={employee.company} />






</div>

  
  );
}

export default Details;
