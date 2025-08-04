import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEmpresa } from '../../routes/EmpresaContext.jsx';

export default function MenuLinks({ id_empresa }) {
    const location = useLocation();
    const rotaAtual = location.pathname;
    const { tipoUsuario } = useEmpresa();

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
            {tipoUsuario === 'cliente' &&
                <div className="dados">
                    <div className={`item ${rotaAtual === '/empresa/salvarInfos' ? 'ativo' : ''}`}>
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
                    <div className={`item ${rotaAtual === '/empresa/acordo' ? 'ativo' : ''}`}>
                        <div className="barra" />
                        <Link to='/empresa/acordo'>Acordo</Link>
                    </div>
                </div>
            }

            {tipoUsuario === 'adm' &&
                <div className="dados">
                    <div className={`item ${rotaAtual.startsWith('/infosEmpresa') ? 'ativo' : ''}`}>
                        <div className="barra" />
                        <Link to={`/infosEmpresa/${id_empresa}`}>Dados da Empresa</Link>
                    </div>

                    <div className={`item ${rotaFuncionario.some(rota => rotaAtual.startsWith(rota)) ? 'ativo' : ''}`}>
                        <div className="barra" />
                        <Link to={`/gerenciarFuncionario/${id_empresa}`}>Dados dos Responsáveis</Link>
                    </div>

                    <div className={`item ${rotaFilial.some(rota => rotaAtual.startsWith(rota)) ? 'ativo' : ''}`}>
                        <div className="barra" />
                        <Link to={`/gerenciarFilial/${id_empresa}`}>Filiais</Link>
                    </div>
                </div>
            }
        </div>
    );
}
