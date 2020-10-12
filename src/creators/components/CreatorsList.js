import React from "react";
import "./creators.css";
import CreatorItem from './CreatorItem'

function CreatorsList(props) {
    return (
    <div className="row">
        {props.cList.length===0? <h1>No items</h1> : props.cList.map((creator) => (
    <CreatorItem 
        key={creator.id}
        id={creator.id}
        name={creator.name}
        image={creator.image}
        concepts={creator.concepts}
        games= {creator.games}
    />
  )
  
  )}
  </div>
    )
}
export default CreatorsList;
