import { Link, useLocation } from 'react-router-dom';
import './index.scss';

export default function MenuDireita() {
    const location = useLocation();

    const rotaAtual = location.pathname;

    return (
        <div className="menu-direita">
            <div className={`item ${rotaAtual == '/validarInfos' ? 'ativo' : ''}`}>
                <div className="barra" />
                <Link to="/validarInfos">Dados da Empresa</Link>
            </div>

            <div className={`item ${rotaAtual == '/confirmarInfos' ? 'ativo' : ''}`}>
                <div className="barra" />
                <Link to="/confirmarInfos">Dados dos Responsáveis</Link>
            </div>
        </div>
    );
}
