import React from "react";

const MunroDetails = ({munro}) => { // removed 2nd parameter onYourchosenMunro

    if(!munro) {
        return null
    }

    // const handleClick = () => {
    //     onYourChosenMunro(munro.chosenMunro)
    // }



    return (
        <>
        <div class="munro-details">
            <h4>Munro details go here: {munro.name}</h4>
            <h4>height: {munro.height}</h4>
            <h4>region: {munro.region}</h4>
            <h4>meaning: {munro.meaning}</h4>
            {/* <button onClick={handleClick}></button>  */}
            </div>
        </>
    )
}


export default MunroDetails;