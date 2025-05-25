import './index.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function MenuEmpresa() {
    const location = useLocation();

    let rotas = [
        '/validacoes',
        '/validarInfos',
        '/confirmarInfos'
    ];

    let rotaPertenceValidacoes = rotas.includes(location.pathname);

    return (
        <div className="menu-empresa">
            <div className="borda">
                <img src="/assets/images/insf.svg" alt="" />
            </div>

            <h1>INSF</h1>

            <div className="botoes">
                <NavLink to='/cadastroEmpresa' className={({ isActive }) => isActive ? 'ativo' : ''}>
                    Fazer Cadastro
                </NavLink>
                <Link to='/validacoes' className={rotaPertenceValidacoes ? 'ativo' : ''}>
                    Validações
                </Link>
                <NavLink to='/contratos' className={({ isActive }) => isActive ? 'ativo' : ''}>
                    Contratos
                </NavLink>
            </div>
        </div>
    )
}
