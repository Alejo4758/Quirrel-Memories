import { BrowserRouter } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

export default function App () {
    return (
        <BrowserRouter>
            <Navbar/>
            <HeroSection/>
        </BrowserRouter>
    )
}