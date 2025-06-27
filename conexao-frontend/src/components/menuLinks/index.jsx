import './index.scss'
import { Link, useLocation, useParams } from 'react-router-dom';

export default function MenuLinks({ menuFrei, menuEmpresa }) {
    const location = useLocation();
    const rotaAtual = location.pathname;
    const { id } = useParams();

    let rotaFuncionario = [
        '/infosFuncionario',
        '/gerenciarFuncionario'
    ];

    let rotaFilial = [
        '/infosFilial',
        '/gerenciarFilial'
    ];

    let rotaFuncionarioEmpresa = [
        '/empresa/cadastrarFuncionarios',
        '/empresa/gerenciarFuncionarios'
    ];

    let rotaFilialEmpresa = [
        '/empresa/cadastrarFilial',
        '/empresa/gerenciarFilial'
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
                        <div className={`item ${rotaFuncionarioEmpresa.includes(rotaAtual) ? 'ativo' : ''}`}>
                            <div className="barra" />
                            <Link to='/empresa/gerenciarFuncionarios'>Dados dos Responsáveis</Link>
                        </div>
                        <div className={`item ${rotaFilialEmpresa.includes(rotaAtual) ? 'ativo' : ''}`}>
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
                        <div className={`item ${rotaAtual.startsWith('/infosEmpresa') ? 'ativo' : ''}`}>
                            <div className="barra" />
                            <Link to={`/infosEmpresa/${id}`}>Dados da Empresa</Link>
                        </div>

                        <div className={`item ${rotaFuncionario.some(rota => rotaAtual.startsWith(rota)) ? 'ativo' : ''}`}>
                            <div className="barra" />
                            <Link to={`/gerenciarFuncionario/${id}`}>Dados dos Responsáveis</Link>
                        </div>

                        <div className={`item ${rotaFilial.some(rota => rotaAtual.startsWith(rota)) ? 'ativo' : ''}`}>
                            <div className="barra" />
                            <Link to={`/gerenciarFilial/${id}`}>Filiais</Link>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
