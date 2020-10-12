import React from 'react';
import {useParams} from 'react-router-dom';
import ConceptList from '../components/ConceptList';
import {concL} from './Concepts'

function UserConcepts (){
    const creatorId = useParams().creatorId;
    const loadedConcepts = concL.filter(conc => conc.creatorId=== creatorId);
    return (
        
        <div>
           <ConceptList concepts={loadedConcepts}/>
            
        </div>
    )
}
export default UserConcepts;