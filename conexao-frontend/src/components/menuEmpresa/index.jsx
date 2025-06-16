import './index.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function MenuEmpresa({ menuFrei, menuEmpresa }) {
    const location = useLocation();

    let rotas = [
        '/validacoes',
        '/validarInfos',
        '/confirmarInfos'
    ];

    let rotaPertenceValidacoes = rotas.includes(location.pathname);

    return (
        <div className="menu-empresa">
            {menuFrei &&
                <>
                    <div className="borda">
                        <img src="/assets/images/logo-frei-cinza.png" alt="" />
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
                </>}

            {menuEmpresa &&
                <>
                    <div className="borda">
                        <img src="/assets/images/logo-frei-cinza.png" alt="" />
                    </div>

                    <h1>INSF</h1>

                    <div className="botoes">
                        <Link to='/empresa/salvarInfos'>Informações</Link>
                    </div>
                </>}
        </div>
    )
}
