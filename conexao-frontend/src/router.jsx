import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/insf/login";
import CadastroEmpresa from "./pages/insf/cadastroEmpresa";
import ValidarInfos from "./pages/insf/validarInfos";
import ConfirmarInfos from "./pages/insf/confirmarInfos";
import Validacoes from "./pages/insf/validacoes";
import Contratos from "./pages/insf/contratos";
import LoginEmpresa from "./pages/empresa/login";
import SalvarInfos from "./pages/empresa/salvarInfos";
import EnviarCodigo from "./pages/empresa/enviarCodigo";
import MudarSenha from "./pages/empresa/redefinirSenha";
import Gerenciar from "./pages/empresa/gerenciarFuncionarios";
import CadastroFuncionario from "./pages/empresa/cadastrarFuncionarios";
import GerenciarFilial from "./pages/empresa/gerenciarFilial";
import CadastroFilial from "./pages/empresa/cadastrarFilial";
import InfosEmpresa from "./pages/insf/infosEmpresa";
import InfosFuncionario from "./pages/insf/infosFuncionario";
import InfosFilial from "./pages/insf/infosFilial";
import GerenciarFilialINSF from "./pages/insf/gerenciarFilial";
import GerenciarFuncionarioINSF from "./pages/insf/gerenciarFuncionario";
import Acordo from "./pages/empresa/acordo";

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
                <Route path="/empresa/salvarInfos" element={<SalvarInfos />} />
                <Route path='/empresa/enviarCodigo' element={<EnviarCodigo />} />
                <Route path='/empresa/redefinirSenha' element={<MudarSenha />} />
                <Route path='/empresa/gerenciarFuncionarios' element={<Gerenciar />} />
                <Route path='/empresa/cadastrarFuncionarios' element={<CadastroFuncionario />} />
                <Route path='/empresa/gerenciarFilial' element={<GerenciarFilial />} />
                <Route path='/empresa/cadastrarFilial' element={<CadastroFilial />} />
                <Route path='/infosEmpresa' element={<InfosEmpresa />} />
                <Route path='/infosFuncionario' element={<InfosFuncionario />} />
                <Route path='/infosFilial' element={<InfosFilial />} />
                <Route path='/gerenciarFilial' element={<GerenciarFilialINSF />} />
                <Route path='/gerenciarFuncionario' element={<GerenciarFuncionarioINSF />} />
                <Route path='/empresa/acordo' element={<Acordo />} />
            </Routes>
        </BrowserRouter>
    )
};