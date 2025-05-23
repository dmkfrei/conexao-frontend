import './index.scss';
import { Link } from 'react-router-dom';

export default function MenuLateral() {
    return (
        <div className="menu-lateral">
            <div className="foto">
                <img id='semfoto' src="/assets/images/semfoto.svg" alt="" />
            </div>
            <div className="navegacao">
                <Link>Menu</Link>
                <Link>Cadastros</Link>
                <Link>Configurações</Link>

                <div className="exit">
                    <Link to='/'>Sair</Link>
                </div>
            </div>
        </div>
    )
}