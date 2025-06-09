import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function MenuLateral() {
    const location = useLocation();
    const [menuAberto, setMenuAberto] = useState(false);

    function toggleMenu () {
        setMenuAberto(!menuAberto);
    };

    const rotas = [
        '/cadastroEmpresa',
        '/validacoes',
        '/contratos',
        '/validarInfos',
        '/confirmarInfos'
    ];

    const rotaInfos = [
        '/infosEmpresa',
        '/infosFilial',
        '/infosFuncionario',
        '/gerenciarFuncionario',
        '/gerenciarFilial'
    ];

    const rotaPertenceCadastro = rotas.includes(location.pathname);
    const rotaPertenceInfo = rotaInfos.includes(location.pathname);

    return (
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
                    <Link to="/cadastroEmpresa" className={rotaPertenceCadastro ? 'ativo' : ''}>Cadastros</Link>
                    <Link to="/infosEmpresa" className={rotaPertenceInfo ? 'ativo' : ''}>Informações</Link>
                </div>
                <div className="exit">
                    <Link to="/">Sair</Link>
                </div>
            </div>
        </>
    );
}
