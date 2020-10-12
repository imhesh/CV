

import React, {useState }from 'react';
import NewConcept from '../components/NewConcept';
import ConceptList from '../components/ConceptList';


const concL = [
  {id: Math.random(), name: "Volume" , content: "The volume of objects", creatorId: "c1"},
  {id: Math.random(), name: "Mensuration", content: "Measuring the dimensions", creatorId:"c2" }
 ];
function Concepts(){
    const [conceptL, setConceptL] = useState(concL) ;
    function addNewConcHandler(newConc){
            setConceptL((prevConcL)=>conceptL.concat(newConc));
            concL.push(newConc);
          }
        
          return (
            <div >
              <NewConcept onAddConc={addNewConcHandler}/>
              <ConceptList concepts={conceptL} />
            </div>
            
          );
}
export default Concepts;
export {concL};