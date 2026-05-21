import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router";
import { getCharacters } from "./services/itemService";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CharacterGrid from "./components/CharacterGrid/CharacterGrid";

export default function App () {
    const [characters, setCharacters] = useState ([]);

    useEffect (() => {
        const fetchCharacters = async () => {
            const { data, error } = await getCharacters ();
            if (!error) setCharacters (data);
        }

        fetchCharacters ();
    }, []);

    return (
        <BrowserRouter>
            <Navbar/>
            <HeroSection/>
            <CharacterGrid characters={characters}/>
        </BrowserRouter>
    )
}