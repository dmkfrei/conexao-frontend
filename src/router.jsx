import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import CadastroEmpresa from "./pages/cadastroEmpresa";
import ValidarInfos from "./pages/validarInfos";
import ConfirmarInfos from "./pages/confirmarInfos";
import Validacoes from "./pages/validacoes";
import Contratos from "./pages/contratos";

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastroEmpresa" element={<CadastroEmpresa />} />
                <Route path="/validarInfos" element={<ValidarInfos />} />
                <Route path="/confirmarInfos" element={<ConfirmarInfos />} />
                <Route path="/validacoes" element={<Validacoes />} />
                <Route path="/contratos" element={<Contratos />} />
            </Routes>
        </BrowserRouter>
    )
};