import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import { useState } from "react";

function Card(props){

  return(
<div className="card">
  
  <div className="card-body">
  <div className="circle">{props.name.charAt(0)}</div>
    <br/>
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text"><i>@{props.tag}</i></p>
    <p className="card-text"><a href={props.website}>http://{props.website}</a></p>
    <a href="#" className="btn btn-primary">More details</a>
  </div>
</div>
  )
}


function Details() {
  const [employee, setEmployee] = useState([]);
  const [update, setUpdate] = useState();
  const { id } = useParams();

  console.log(id)

      function handleErrors(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      }
  

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + {id})
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




<div className="card">
  
  <div className="card-body">
    <p className="card-text">Text</p>

    <a href="/" className="btn btn-primary">Go back</a>
  </div>
</div>





</div>

  
  );
}

export default Details;
