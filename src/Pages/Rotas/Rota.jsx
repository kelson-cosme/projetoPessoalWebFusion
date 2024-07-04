import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Teste from "../Teste/Teste"

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/teste" element={<Teste />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas