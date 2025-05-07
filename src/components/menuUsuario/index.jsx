import './index.scss';
import { Link } from 'react-router-dom';

export default function MenuUsuario() {
    return (
        <div className="menu-usuario">
            <img src="/assets/images/Ellipse 37.svg" alt="" />

            <h1>Nome</h1>

            <div className="botoes">
                <Link>Fazer Cadastro</Link>
                <Link>Validações</Link>
                <Link>Contratos</Link>
            </div>
        </div>
    )
}