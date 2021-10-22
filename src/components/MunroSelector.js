import React from "react";
const MunroSelector = ({ munros }) => { // was munros
    
    // const handleChange = event => {
    // onMunroSelected(event.target.value)
    // }

    if(!munros) {
        return null
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
            <p>Munro selector goes here</p>
        <select defaultValue="" >
            {munroNodes}
        </select> 
        </>
    )
}

export default MunroSelector;