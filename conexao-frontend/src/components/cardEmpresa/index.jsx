import { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function CardEmpresa() {
    const [infos, setInfos] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        BuscarInfosEmpresa();
    }, []);

    async function BuscarInfosEmpresa() {
        try {
            const url = `http://localhost:5001/buscarEmpresa?x-access-token=${token}`;
            const resp = await axios.get(url);
            
            setInfos(resp.data);
        } catch (err) {
            toast.error('Erro ao buscar empresas:', err);
        }
    }
    
    function CardInfo({ item }) {
        const [ativo, setAtivo] = useState(true);

        return (
            <div className="card-info">
                <p className="id">
                    <Link to={`/validarInfos/${item.id_empresa}`}>#{item.id_empresa}</Link>
                </p>

                <div className="item">
                    <img src="/assets/images/apartamento.svg" alt="Nome" />
                    <div className="text">
                        <p className="label">Nome</p>
                        <p className="valor">
                            {ativo ? item.ds_razao_social : '***********'}
                        </p>
                    </div>
                </div>

                <div className="item">
                    <img src="/assets/images/localizacao.svg" alt="Localização" />
                    <div className="text">
                        <p className="label">Localização</p>
                        <p className="valor">
                            {ativo ? item.ds_endereco : '**********'}
                        </p>
                    </div>
                </div>

                <div className="item">
                    <img src="/assets/images/telefone.svg" alt="Contato" />
                    <div className="text">
                        <p className="label">Contato</p>
                        <p className="valor">
                            {ativo ? item.ds_telefone : '(**) *****-****'}
                        </p>
                    </div>
                </div>

                <div className="botoes">
                    <img
                        src="/assets/images/olho.svg"
                        alt="Visualizar"
                        className="icon-eye"
                        onClick={() => setAtivo(!ativo)}
                    />
                    <img
                        src="/assets/images/pupila.svg"
                        alt="Pupila"
                        id="pupila"
                        onClick={() => setAtivo(!ativo)}
                    />
                </div>
            </div>
        );
    }

    return (
    <div className="card-empresa">
        {infos.length === 0 ? (
            <div className="card-info placeholder">
                <p className="id">#-</p>

                <div className="item">
                    <img src="/assets/images/apartamento.svg" alt="Nome" />
                    <div className="text">
                        <p className="label">Nome</p>
                        <p className="valor">------------</p>
                    </div>
                </div>

                <div className="item">
                    <img src="/assets/images/localizacao.svg" alt="Localização" />
                    <div className="text">
                        <p className="label">Localização</p>
                        <p className="valor">------------</p>
                    </div>
                </div>

                <div className="item">
                    <img src="/assets/images/telefone.svg" alt="Contato" />
                    <div className="text">
                        <p className="label">Contato</p>
                        <p className="valor">------------</p>
                    </div>
                </div>
            </div>
        ) : (
            infos.map((item, index) => (
                <CardInfo key={index} item={item} />
            ))
        )}
    </div>
);

}
