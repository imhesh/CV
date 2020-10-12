import React from "react";
import { Link } from "react-router-dom";
import "./creators.css";

function CreatorItem(props) {
  return (
    <div className="col-sm-3">
      <div className="card">
        <img className="card-img-top" src={props.image} alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <Link to={`/${props.id}/concepts`}>
            <p>Concepts created: {props.concepts} </p>
          </Link>
          <Link to={`/${props.id}/games`}>
            <p>Games Created: {props.games}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CreatorItem;
