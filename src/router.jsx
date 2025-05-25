import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/insf/login";
import CadastroEmpresa from "./pages/insf/cadastroEmpresa";
import ValidarInfos from "./pages/insf/validarInfos";
import ConfirmarInfos from "./pages/insf/confirmarInfos";
import Validacoes from "./pages/insf/validacoes";
import Contratos from "./pages/insf/contratos";
import LoginEmpresa from "./pages/empresa/login";

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
                <Route path="/empresa/login" element={<LoginEmpresa />} />
            </Routes>
        </BrowserRouter>
    )
};