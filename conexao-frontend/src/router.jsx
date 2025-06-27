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
import { Toaster } from "react-hot-toast";
import MenuDireita from "./components/menuDireita";
import GerenciarEmpresa from "./pages/insf/gerenciarEmpresa";

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Toaster
                toastOptions={{
                    style: {
                        font: '500 15px inter',
                    },
                }}
            />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastroEmpresa" element={<CadastroEmpresa />} />
                <Route path="/validarInfos/:id" element={<ValidarInfos />} />
                <Route path="/confirmarInfos/:id" element={<ConfirmarInfos />} />
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
                <Route path='/infosEmpresa/:id' element={<InfosEmpresa />} />
                <Route path='/infosFuncionario/:id' element={<InfosFuncionario />} />
                <Route path='/infosFilial/:id' element={<InfosFilial />} />
                <Route path='/gerenciarFilial/:id' element={<GerenciarFilialINSF />} />
                <Route path='/gerenciarFuncionario/:id' element={<GerenciarFuncionarioINSF />} />
                <Route path='/empresa/acordo' element={<Acordo />} />
                <Route path='./components/menuDireita' element={<MenuDireita />} />
                <Route path='/gerenciarEmpresa' element={<GerenciarEmpresa />} />
            </Routes>
        </BrowserRouter>
    )
};