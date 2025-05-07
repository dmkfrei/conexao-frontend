import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
};