import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

export default function GerenciarEmpresa() {
    const [infos, setInfos] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        BuscarInfosEmpresa();
    }, []);

    async function BuscarInfosEmpresa() {
        try {
            const url = `http://localhost:5001/buscarEmpresa?x-access-token=${token}`;
            const resp = await axios.get(url);

            const dados = resp.data.map(item => ({
                ...item,
                dt_cadastro: moment(item.dt_cadastro).format('DD/MM/YYYY')
            }));

            setInfos(dados);

        } catch (err) {
            console.error('Erro ao buscar empresas:', err);
        }
    }

    return (
        <div className="gerenciar-empresa">
            <MenuLateral menuFrei={true} />
            <MenuEmpresa menuFrei={true} />

            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <h1 id='h1Info'>Gerenciamento de Empresas</h1>
                    </div>
                    <div className="bordaBranca">
                        {infos.length === 0 ? (
                            <div className="card-info placeholder">
                                <p className='id'>#--</p>

                                <div className="item">
                                    <div className="text">
                                        <img src="/assets/images/briefcase.png" alt="" />
                                        <h1>Empresa</h1>
                                    </div>
                                    <p>-------------</p>
                                </div>

                                <div className="item">
                                    <div className="text">
                                        <img src="/assets/images/calendar.svg" alt="" />
                                        <h1>Data de cadastro</h1>
                                    </div>
                                    <p>--/--/----</p>
                                </div>
                            </div>
                        ) : (
                            infos.map((item, index) => (
                                <div className="card-info" key={index}>
                                    <Link className='id' to={`/infosEmpresa/${item.id_empresa}`}>#{item.id_empresa}</Link>

                                    <div className="item">
                                        <div className="text">
                                            <img src="/assets/images/briefcase.png" alt="" />
                                            <h1>Empresa</h1>
                                        </div>
                                        <p>{item.ds_razao_social}</p>
                                    </div>

                                    <div className="item">
                                        <div className="text">
                                            <img src="/assets/images/calendar.svg" alt="" />
                                            <h1>Data de cadastro</h1>
                                        </div>
                                        <p>{item.dt_cadastro}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}