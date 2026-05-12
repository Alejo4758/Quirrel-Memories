import { BrowserRouter } from "react-router";
import Navbar from "./components/Navbar/Navbar";

export default function App () {
    return (
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
    )
}