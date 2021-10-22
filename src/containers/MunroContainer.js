import React, { useState, useEffect } from "react";
import MunroSelector from "../components/MunroSelector";
import MunroDetails from "../components/MunroDetails";


const MunroContainer = () => {

    const [munros, setMunro] = useState ([]);
    const [selectedMunroName, setSelectedMunroName] = useState("");
    // const [loaded, setLoaded] = useState(false);

const getMunro = () => {
    console.log('getting Munro info');
    fetch(`https://munroapi.herokuapp.com/munros`)
    .then(res => res.json())
    .then(data => setMunro(data))
    // .then(() => setLoaded(true))
}

    useEffect(() => {
        getMunro()
    }, [])

    const handleMunroSelected = () => { 
        // setSelectedMunroName(chosenMunro)
    }

    // const handleYourChosenMunro = (chosenMunro) => {
    //     const updatedMunros = munros.map(munro) => {
    //         if (munro.chosenMunro === chosenMunro){
    //             munro.yourMunro = !munro.yourMunro
    //         }
    //         return munro

    //     };

    // }

    // const selectedMunro = munros.find(munro => munro.chosenMunro === selectedMunroName)

    return (
        <>
        <h1>List of Munros in Scotland</h1>
        <MunroSelector munros={munros} onMunroSelected={handleMunroSelected} />
        <MunroDetails />
        </>
    )
}

export default MunroContainer;