import React from "react";
import { hours } from '../../data/data'
import "./news.css";
const News = (props) => {
  console.log(props)
  if(props.id.length === 0){
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <ol className="container">
      {props.id.map((id, index) => {
        return (
          <li key={index}>
            <div className="red bold">{id.title}</div>
            <div className="d-flex red">
              <p className="gray">
                {" "}
                <i className="fas fa-heart"></i>
                {id.score} points
              </p>
              <p className="red">
                <i className="fas fa-user gray"></i>
                {id.by}
              </p>
              <p className="red">
                <i className="far fa-clock gray"></i>{hours(new Date(), new Date(id.time))} hours ago
              </p>
              <p className="comments">{id.descendants} comment </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
};


export default News;
