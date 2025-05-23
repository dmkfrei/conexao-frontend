import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import CadastroEmpresa from "./pages/cadastroEmpresa";
import ValidarInfos from "./pages/validarInfos";

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastroEmpresa" element={<CadastroEmpresa />} />
                <Route path="/validarInfos" element={<ValidarInfos />} />
            </Routes>
        </BrowserRouter>
    )
};