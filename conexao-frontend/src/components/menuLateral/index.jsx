import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MenuLateral({ menuFrei, menuEmpresa }) {
    const location = useLocation();
    const [menuAberto, setMenuAberto] = useState(false);
    const navigate = useNavigate();

    function toggleMenu() {
        setMenuAberto(!menuAberto);
    };

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
            {menuFrei &&
                <>
                    <img
                        src="/assets/images/arrowPreto.svg"
                        alt="Toggle menu"
                        className={`toggle-arrow ${menuAberto ? 'aberto' : ''}`}
                        onClick={toggleMenu}
                    />

                    <div className={`menu-lateral ${menuAberto ? 'aberto' : ''}`}>
                        <div className="foto">
                            <img id="logo" src="/assets/images/logoFrei.svg" alt="Logo" />
                        </div>
                        <div className="navegacao">
                            <Link
                                to="/cadastroEmpresa"
                                className={
                                    [
                                        '/cadastroEmpresa',
                                        '/validacoes',
                                        '/contratos',
                                        '/validarInfos',
                                        '/confirmarInfos'
                                    ].some(rota => location.pathname.startsWith(rota))
                                        ? 'ativo'
                                        : ''
                                }
                            >
                                Cadastros
                            </Link>

                            <Link
                                to="/gerenciarEmpresa"
                                className={
                                    [
                                        '/gerenciarEmpresa',
                                        '/infosEmpresa',
                                        '/infosFilial',
                                        '/infosFuncionario',
                                        '/gerenciarFuncionario',
                                        '/gerenciarFilial'
                                    ].some(rota => location.pathname.startsWith(rota))
                                        ? 'ativo'
                                        : ''
                                }
                            >
                                Informações
                            </Link>
                        </div>
                        <div className="exit">
                            <Link to="/" onClick={sairFrei}>Sair</Link>
                        </div>
                    </div>
                </>
            }

            {menuEmpresa &&
                <>
                    <img
                        src="/assets/images/arrowPreto.svg"
                        alt="Toggle menu"
                        className={`toggle-arrow ${menuAberto ? 'aberto' : ''}`}
                        onClick={toggleMenu}
                    />

                    <div className={`menu-lateral ${menuAberto ? 'aberto' : ''}`}>
                        <div className="foto">
                            <img id="logo" src="/assets/images/logoFrei.svg" alt="Logo" />
                        </div>
                        <div className="navegacao">
                            <Link to="/empresa/salvarInfos" className='ativo'>Informações</Link>
                        </div>
                        <div className="exit">
                            <Link to="/empresa/login">Sair</Link>
                        </div>
                    </div>
                </>
            }
        </>
    );
}
