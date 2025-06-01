import './index.scss'
import { Link } from 'react-router-dom';

export default function MenuLinks() {
    return (
        <div className="menu-links">
            <hr />
            <div className="dados">
                <Link to='/empresa/salvarInfos'>Dados da Empresa</Link>
                <Link to='/empresa/gerenciarFuncionarios'>Dados dos Responsáveis</Link>
                <Link to='/empresa/gerenciarFilial'>Filiais</Link>
                <Link to='/empresa/Acordo'>Acordo</Link>
            </div>
        </div>
    )
}