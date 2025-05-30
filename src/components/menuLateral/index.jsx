import './index.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function MenuLateral() {
    const location = useLocation();

    let rotas = [
        '/cadastroEmpresa',
        '/validacoes',
        '/contratos',
        '/validarInfos',
        '/confirmarInfos'
    ];

    let rotaPertenceCadastro = rotas.includes(location.pathname);

    return (
        <div className="menu-lateral">
            <div className="foto">
                <img id='logo' src="/assets/images/logoFrei.svg" alt="" />
            </div>
            <div className="navegacao">
                <Link className={rotaPertenceCadastro ? 'ativo' : ''}>Cadastros</Link>
                <Link>Informações</Link>

            </div>
            <div className="exit">
                <Link to='/'>Sair</Link>
            </div>
        </div>
    )
}