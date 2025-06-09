import './index.scss'
import { Link } from 'react-router-dom';

export default function MenuLinks({ menuFrei, menuEmpresa }) {
    return (
        <div className="menu-links">
            {menuEmpresa && 
            <>
            <hr />
                <div className="dados">
                    <Link to='/empresa/salvarInfos'>Dados da Empresa</Link>
                    <Link to='/empresa/gerenciarFuncionarios'>Dados dos Responsáveis</Link>
                    <Link to='/empresa/gerenciarFilial'>Filiais</Link>
                    <Link to='/empresa/Acordo'>Acordo</Link>
                </div>
            </>}

            {menuFrei && 
            <>
            <hr />
                <div className="dados">
                    <Link to='/infosEmpresa'>Dados da Empresa</Link>
                    <Link to='/gerenciarFuncionario'>Dados dos Responsáveis</Link>
                    <Link to='/gerenciarFilial'>Filiais</Link>
                </div>
            </>}
        </div>
    )
}