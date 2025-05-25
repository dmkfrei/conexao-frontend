import './index.scss';
import { Link } from 'react-router-dom';

export default function MenuLateral() {
    return (
        <div className="menu-lateral">
            <div className="foto">
                <img id='logo' src="/assets/images/logoFrei.svg" alt="" />
            </div>
            <div className="navegacao">
                <Link>Menu</Link>
                <Link>Cadastros</Link>
                <Link>Configurações</Link>

            </div>
            <div className="exit">
                <Link to='/'>Sair</Link>
            </div>
        </div>
    )
}