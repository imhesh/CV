import React, { useState } from "react";

function NewConcept(props) {
  let [concept, setConcept] = useState({
    name: "",
    content: "",
  });
  function addConceptHandler(event) {
    event.preventDefault();

    const newConc = {
      id: Math.random(),
      name: concept.name,
      content: concept.content,
    };
    props.onAddConc(newConc);
    setConcept({
      name: "",
      content: "",
    });
  }
  function onChangehandler(event) {
    const { value, name } = event.target;
    setConcept((prevValue) => {
      return name === "name"
        ? { name: value, content: prevValue.content }
        : { name: prevValue.name, content: value };
    });
    // console.log(concept);
  }

  return (
    <form onSubmit={addConceptHandler}>
      <input
        type="text"
        name="name"
        value={concept.name}
        onChange={onChangehandler}
      ></input>
      <input
        type="text"
        name="content"
        value={concept.content}
        onChange={onChangehandler}
      ></input>
      <button type="submit"> Add New Concept </button>
    </form>
  );
}
export default NewConcept;
