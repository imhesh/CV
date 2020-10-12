import React from 'react';

function ConceptList (props){
    return <div>
        <ul>
            {props.concepts.map(
                (concept) => {
                    return <li key={concept.id}>
                    <b>{concept.name}</b>
                    <p>{concept.content}</p>
                    <p>{concept.creatorId}</p>
                    </li>
                }
            )}
        </ul>
    </div>
};

export default ConceptList;