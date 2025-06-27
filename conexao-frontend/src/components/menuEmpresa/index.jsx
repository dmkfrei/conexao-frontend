import './index.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function MenuEmpresa({ menuFrei, menuEmpresa }) {
    const location = useLocation();
    const token = localStorage.getItem('token');
    const [situacao, setSituacao] = useState('');

    async function buscarSituacao() {
        try {
            const url = `http://localhost:5001/buscarSituacao?x-access-token=${token}`;
            const resp = await axios.get(url);

            if (resp.data.situacao) {
                setSituacao(resp.data.situacao);
            } else {
                setSituacao(null);
            }
        } catch (error) {
            toast.error("Erro ao buscar situação:", error);
            setSituacao(null);
        }
    }

    useEffect(() => {
        buscarSituacao();
    }, []);

    const cor = situacao?.toLowerCase() == 'ativo' ? '#77DD77' : '#FF0000';

    return (
        <div className="menu-empresa">
            {menuFrei &&
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

                        <NavLink to='/contratos' className={({ isActive }) => isActive ? 'ativo' : ''} >Contratos</NavLink>
                    </div>
                </>
            }

            {menuEmpresa &&
                <>
                    <div className="borda">
                        <img src="/assets/images/logo-frei-cinza.png" alt="Logo INSF" />
                    </div>

                    <div className="bolinha">
                        <div className="cor" style={{ backgroundColor: cor }}></div>
                        <h1>INSF</h1>
                    </div>

                    <div className="botoes">
                        <Link to='/empresa/salvarInfos' className='ativo'>Informações</Link>
                    </div>
                </>
            }
        </div>
    );
}
