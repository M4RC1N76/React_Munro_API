import React from "react";

const MunroDetails = ({munro, onYourChosenMunro}) => {

    if(!munro) {
        return null
    }

    const handleClick = () => {
        onYourChosenMunro(munro.chosenMunro)
    }



    return (
        <>
            <p>Munro details go here: {munro.name}</p>
            <button onClick={handleClick}></button>
        </>
    )
}
console.log('Munro details');

export default MunroDetails;