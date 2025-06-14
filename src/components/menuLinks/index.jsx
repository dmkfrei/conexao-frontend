import './index.scss'
import { Link, useLocation } from 'react-router-dom';

export default function MenuLinks({ menuFrei, menuEmpresa }) {
    const location = useLocation();
    const rotaAtual = location.pathname;

    let rotaFuncionario = [
        '/infosFuncionario',
        '/gerenciarFuncionario'
    ];

    let rotaFilial = [
        '/infosFilial',
        '/gerenciarFilial'
    ];

    return (
        <div className="menu-links">
            {menuEmpresa &&
                <>
                    <div className="dados">
                        <div className={`item ${rotaAtual == '/empresa/salvarInfos' ? 'ativo' : ''}`}>
                            <div className="barra" />
                            <Link to='/empresa/salvarInfos'>Dados da Empresa</Link>
                        </div>
                        <div className={`item ${rotaAtual == '/empresa/gerenciarFuncionarios' ? 'ativo' : ''}`}>
                            <div className="barra" />
                            <Link to='/empresa/gerenciarFuncionarios'>Dados dos Responsáveis</Link>
                        </div>
                        <div className={`item ${rotaAtual == '/empresa/gerenciarFilial' ? 'ativo' : ''}`}>
                            <div className="barra" />
                            <Link to='/empresa/gerenciarFilial'>Filiais</Link>
                        </div>
                        <div className={`item ${rotaAtual == '/empresa/Acordo' ? 'ativo' : ''}`}>
                            <div className="barra" />
                            <Link to='/empresa/Acordo'>Acordo</Link>
                        </div>
                    </div>
                </>}

            {menuFrei &&
                <>
                    <div className="dados">
                        <div className={`item ${rotaAtual == '/infosEmpresa' ? 'ativo' : ''}`}>
                            <div className="barra" />
                            <Link to='/infosEmpresa'>Dados da Empresa</Link>
                        </div>
                        <div className={`item ${rotaFuncionario.includes(rotaAtual) ? 'ativo' : ''}`}>
                            <div className="barra" />
                            <Link to='/gerenciarFuncionario'>Dados dos Responsáveis</Link>
                        </div>

                        <div className={`item ${rotaFilial.includes(rotaAtual) ? 'ativo' : ''}`}>
                            <div className="barra" />
                            <Link to='/gerenciarFilial'>Filiais</Link>
                        </div>

                    </div>
                </>}
        </div>
    )
}
