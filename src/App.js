import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

//Card component
function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="circle">{props.name.charAt(0)}</div>
        <br />
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          <i>@{props.tag}</i>
        </p>
        <p className="card-text">
          <a href={"http://" + props.website}>http://{props.website}</a>
        </p>
        <Button
          url={"/" + props.id + "/details"}
          style="btn btn-primary"
          text="More details"
        />
      </div>
    </div>
  );
}

//Button component
function Button(props) {
  return (
    <a href={props.url} className={props.style}>
      {props.text}
    </a>
  );
}

function App() {
  //useState
  const [employees, setEmployees] = useState([]);
  const [update, setUpdate] = useState();

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  //useEffect
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(handleErrors)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setEmployees(responseData);
      })
      .catch((error) => console.log(error));
  }, [update]);

  return (
    <div className="container">
      <div class="card-columns">
        {employees.map((employee) => (
          <Card
            key={employee.id}
            name={employee.name}
            tag={employee.username}
            website={employee.website}
            id={employee.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
