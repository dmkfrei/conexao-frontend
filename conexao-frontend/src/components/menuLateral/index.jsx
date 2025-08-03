import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuEmpresa from '../menuEmpresa';
import { useEmpresa } from '../../routes/EmpresaContext.jsx';

export default function MenuLateral() {
    const location = useLocation();
    const navigate = useNavigate();
    const { tipoUsuario } = useEmpresa();

    const [menuAberto, setMenuAberto] = useState(false);
    const [menuEmpresaAberto, setMenuEmpresaAberto] = useState(false);

    function toggleMenu() {
        setMenuAberto(!menuAberto);
        if (menuAberto) setMenuEmpresaAberto(false);
    }

    function toggleMenuEmpresa() {
        setMenuEmpresaAberto(!menuEmpresaAberto);
    }


    async function sairEmpresa() {
        localStorage.removeItem('token');
        navigate('/empresa/login');
    }

    async function sairFrei() {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <>
            {(tipoUsuario) && (
                <>
                    <img
                        src="/assets/images/arrowPreto.svg"
                        alt="Abrir menu"
                        className={`toggle-arrow ${menuAberto ? 'aberto' : ''}`}
                        onClick={toggleMenu}
                    />

                    {menuAberto && (
                        <img
                            src="/assets/images/arrowBranco.svg"
                            alt="Abrir menu empresa"
                            className={`toggle-arrow-empresa ${menuEmpresaAberto ? 'aberto' : ''}`}
                            onClick={toggleMenuEmpresa}
                        />
                    )}
                </>
            )}

            <div className={`menu-lateral ${menuAberto ? 'aberto' : ''}`}>
                <div className="foto">
                    <img id="logo" src="/assets/images/logoFrei.svg" alt="Logo" />
                </div>

                <div className="navegacao">
                    {(tipoUsuario) && (
                        <>
                            {tipoUsuario == 'adm' && (
                                <>
                                    <Link
                                        to="/cadastroEmpresa"
                                        className={
                                            [
                                                '/cadastroEmpresa',
                                                '/validacoes',
                                                '/contratos',
                                                '/validarInfos',
                                                '/confirmarInfos',
                                                '/contratoEmpresa'
                                            ].some(rota => location.pathname.startsWith(rota))
                                                ? 'ativo'
                                                : ''
                                        }
                                    >
                                        Cadastros
                                    </Link>

                                    <Link
                                        to="/gerenciarEmpresa"
                                        className={['/gerenciarEmpresa', '/infosEmpresa', '/infosFilial', '/infosFuncionario', '/gerenciarFuncionario', '/gerenciarFilial'].some(rota => location.pathname.startsWith(rota)) ? 'ativo' : ''}>
                                        Informações
                                    </Link>
                                </>
                            )}

                            {tipoUsuario == 'cliente' && (
                                <>
                                    <Link
                                        to="/empresa/salvarInfos"
                                        className={
                                            [
                                                '/empresa/salvarInfos',
                                                '/empresa/gerenciarFuncionarios',
                                                '/empresa/cadastrarFuncionarios',
                                                '/empresa/gerenciarFilial',
                                                '/empresa/cadastrarFilial',
                                                '/empresa/acordo'
                                            ].some(rota => location.pathname.startsWith(rota))
                                                ? 'ativo'
                                                : ''
                                        }
                                    >
                                        Informações
                                    </Link>

                                    <Link
                                        to="/empresa/configuracoes"
                                        className={
                                            location.pathname == '/empresa/configuracoes'
                                                ? 'ativo'
                                                : ''
                                        }
                                    >
                                        Configurações
                                    </Link>
                                </>
                            )}
                        </>
                    )}
                </div>

                <div className="exit">
                    <Link
                        to={tipoUsuario == 'adm' ? "/" : "/empresa/login"}
                        onClick={tipoUsuario == 'adm' ? sairFrei : sairEmpresa}
                    >
                        Sair
                    </Link>
                </div>
            </div>

            <div className={`wrapper-menu-empresa ${menuEmpresaAberto ? 'aberto' : ''}`}>
                <MenuEmpresa/>
            </div>

        </>
    );
}
