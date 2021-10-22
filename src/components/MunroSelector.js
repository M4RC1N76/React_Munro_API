import React from "react";
const MunroSelector = ({ munros, onMunroSelected }) => { // was munros
    
    // const handleChange = event => {
    // onMunroSelected(event.target.value)
    // }

    if(!munros) {
        return null
    }

    const handleChange = (event) => {
        // console.log("test");
        onMunroSelected(event.target.value)
    }

    const munroNodes = munros.map((munro) => {
        return (
            <option>
                {munro.name}
            </option>
        )
            

    })


    return (
        <>
            <h3>Select Munro from the list bellow:</h3>
        <select onChange={handleChange} defaultValue="" >
            {munroNodes}
        </select> 
        
        </>
    )
}

export default MunroSelector;