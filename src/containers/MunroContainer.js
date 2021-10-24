import React, { useState, useEffect } from "react";
import MunroSelector from "../components/MunroSelector";
import MunroDetails from "../components/MunroDetails";


const MunroContainer = () => {

    const [munros, setMunro] = useState ([]);
    const [selectedMunro, setSelectedMunro] = useState({});
    // const [loaded, setLoaded] = useState(false);

const getMunro = () => {
    // console.log('getting Munro info');
    fetch(`https://munroapi.herokuapp.com/munros`)
    .then(res => res.json())
    .then(data => {setMunro(data);
    setSelectedMunro(data[0]); // sets the Munro Details to Ben Nevis as it is 1st on the list
    })
    //.then(() => setLoaded(true))
}

    useEffect(() => {
        getMunro()
    }, [])

    const handleMunroSelected = (name) => {
        // console.log(event);
        // console.log("hahaha");
        
        const currentMunro = munros.find(munro => munro.name === name);
        setSelectedMunro(currentMunro);
    }


    // const selectedMunro = munros.find(munro => munro.chosenMunro === selectedMunroName)

    return (
        <>
        <h1>List of Munros</h1>
        <MunroSelector munros={munros} onMunroSelected={handleMunroSelected} />
        <MunroDetails munro={selectedMunro}/>
        </>
    )
}

export default MunroContainer;