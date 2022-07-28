import React from "react";

function Band ({band, deleter}) {
    
    function deleteHandler(e){
        deleter(band.id)
    }
  
    return(
        <li>
            {band.name}
            <button onClick={deleteHandler}>Delete Band</button>
        </li>
    )    
}

export default Band