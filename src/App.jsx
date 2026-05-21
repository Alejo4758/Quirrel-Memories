import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router";
import { getCharacter } from "./services/itemService";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CharacterCard from "./components/CharacterCard/CharacterCard";

export default function App () {
    const [character, setCharacter] = useState (null);

    useEffect (() => {
        const fetchCharacter = async () => {
            const { data, error } = await getCharacter (2);
            if (!error) setCharacter (data);
        }

        fetchCharacter ();
    }, []);

    return (
        <BrowserRouter>
            <Navbar/>
            <HeroSection/>
            <CharacterCard characterData={character}/>
        </BrowserRouter>
    )
}