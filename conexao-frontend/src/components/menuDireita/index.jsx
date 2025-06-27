import { Link, useLocation, useParams } from 'react-router-dom';
import './index.scss';

export default function MenuDireita() {
    const location = useLocation();
    const { id: idParam } = useParams();

    const id = idParam;

    const rotaPertenceValidarInfos = location.pathname.startsWith('/validarInfos');
    const rotaPertenceConfirmar = location.pathname.startsWith('/confirmarInfos');

    return (
        <div className="menu-direita">
            <div className={`item ${rotaPertenceValidarInfos ? 'ativo' : ''}`}>
                <div className="barra" />
                <Link to={`/validarInfos/${id}`}>Dados da Empresa</Link>
            </div>

            <div className={`item ${rotaPertenceConfirmar ? 'ativo' : ''}`}>
                <div className="barra" />
                <Link to={`/confirmarInfos/${id}`}>Dados dos Responsáveis</Link>
            </div>
        </div>
    );
}
