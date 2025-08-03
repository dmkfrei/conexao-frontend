import './index.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useEmpresa } from '../../routes/EmpresaContext.jsx';

export default function MenuEmpresa() {
    const location = useLocation();
    const token = localStorage.getItem('token');
    const { foto, nomeEmpresa, situacao, setSituacao, tipoUsuario } = useEmpresa();

    async function buscarSituacao() {
        try {
            const url = `http://localhost:5001/buscarSituacao?x-access-token=${token}`;
            const resp = await axios.get(url);

            setSituacao(resp.data.situacao);
        } catch (error) {
            toast.error("Erro ao buscar situação.");
            setSituacao(null);
        }
    }
    
    useEffect(() => {
        if (tipoUsuario == 'cliente' && situacao == null) {
            buscarSituacao();
        }
    }, [tipoUsuario]);

    let cor = '';

    if (situacao == 'Pendente') {
        cor = '#FF0000';
    } else if (situacao == 'Aprovada') {
        cor = '#77DD77';
    } else {
        cor = '#7F8C8D';
    }

    const fotoExibida = foto ? `http://localhost:5001/imgs/${foto}` : '/assets/images/cinza-claro.jpg';
    const nomeExibido = nomeEmpresa || '';

    return (
        <div className="menu-empresa">
            {tipoUsuario == 'adm' && (
                <>
                    <div className="borda">
                        <img src="/assets/images/logo-frei-cinza.png" alt="Logo INSF" />
                    </div>

                    <h1>INSF</h1>

                    <div className="botoes">
                        <NavLink to='/cadastroEmpresa' className={({ isActive }) => isActive ? 'ativo' : ''}>Fazer Cadastro</NavLink>
                        <NavLink to='/validacoes' className={() => ['/validacoes', '/validarInfos', '/confirmarInfos'].some(rota => location.pathname.startsWith(rota)) ? 'ativo' : ''}>
                            Validações
                        </NavLink>
                        <NavLink to='/contratos' className={() => ['/contratoEmpresa', '/contratos'].some(rota => location.pathname.startsWith(rota)) ? 'ativo' : ''}>
                            Contratos
                        </NavLink>
                    </div>
                </>
            )}

            {tipoUsuario == 'cliente' && (
                <>
                    <div className="borda foto-perfil">
                        <img src={fotoExibida} />
                    </div>

                    <div className="bolinha">
                        <div className="cor" style={{ backgroundColor: cor }}></div>
                        <h1>{nomeExibido}</h1>
                    </div>

                    <div className="botoes">
                        <Link to='/empresa/salvarInfos' className={
                            [
                                '/empresa/salvarInfos',
                                '/empresa/gerenciarFuncionarios',
                                '/empresa/cadastrarFuncionarios',
                                '/empresa/gerenciarFilial',
                                '/empresa/cadastrarFilial',
                                '/empresa/acordo'
                            ].some(rota => location.pathname.startsWith(rota))
                                ? 'ativo'
                                : ''
                        }>Informações</Link>
                    </div>
                </>
            )}
        </div>
    );
}
