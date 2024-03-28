import { useState } from "react";
import elephant1 from '../assests/elephant-1.jpeg'
import elephant2 from '../assests/elephant-2.jpeg'
import elephant3 from '../assests/elephant-3.jpeg'
import ChildCard from "./ChildCard";

function Users(){
    const [elephantArr,setElephantArr]= useState([
        {
            title: "elephant-1",
            text: "Awesome Elepant -1",
            image: elephant1
        },
        {
            title: "elephant-2",
            text: "Awesome Elepant -2",
            image: elephant2
        },
        {
            title: "elephant-3",
            text: "Awesome Elepant -3",
            image: elephant3
        }
    ])
    
    
    function handleUseStates(e){
        e.preventDefault();
    } 

    let displayElephants = elephantArr.map(e=>{
        return(
            <ChildCard text={e.text} image={e.image} title={e.title}/>
            )
    })

    return(
        <>
            
                {    displayElephants}
    
        </>
    )

}

export default Users;