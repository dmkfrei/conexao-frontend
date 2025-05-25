import './index.scss';
import { NavLink } from 'react-router-dom';

export default function MenuUsuario() {
    return (
        <div className="menu-usuario">
            <div className="borda">
                <img src="/assets/images/insf.svg" alt="" />
            </div>

            <h1>INSF</h1>

            <div className="botoes">
                <NavLink to='/cadastroEmpresa' className={({ isActive }) => isActive ? 'ativo' : ''}>
                    Fazer Cadastro
                </NavLink>
                <NavLink to='/validacoes' className={({ isActive }) => isActive ? 'ativo' : ''}>
                    Validações
                </NavLink>
                <NavLink to='/contratos' className={({ isActive }) => isActive ? 'ativo' : ''}>
                    Contratos
                </NavLink>
            </div>
        </div>
    )
}
