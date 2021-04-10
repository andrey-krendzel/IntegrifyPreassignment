import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

function DetailsCard(props) {
  return (
    <div className="card card-size">
      <div className="card-body-left">
        <p className="card-text">- name: {props.employee.name}</p>
        <p className="card-text">- username: {props.employee.username}</p>
        <p className="card-text">- email: {props.employee.email}</p>
        <p className="card-text">- phone: {props.employee.phone}</p>
        <p className="card-text">- company: {props.employee.company.name} </p>
        <p className="card-text">- website: {props.employee.website} </p>
        <div className="card-text">
          - address:
          <ul>
            <li>street: {props.employee.address.street}</li>
            <li>suite: {props.employee.address.suite}</li>
            <li>city: {props.employee.address.city}</li>
            <li>zipcode: {props.employee.address.zipcode}</li>
          </ul>{" "}
        </div>
        <Button url="/" style="btn btn-primary" text="Go back" />
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <a href={props.url} className={props.style}>
      {props.text}
    </a>
  );
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

  if (employee.company == null || employee.address == null) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="container">
        <DetailsCard employee={employee} />
      </div>
    );
  }
}

export default Details;
