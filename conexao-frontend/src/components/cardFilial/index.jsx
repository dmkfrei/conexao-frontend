import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PopUpDeletar from '../popUpDeletar';
import toast from 'react-hot-toast';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEmpresa } from '../../routes/EmpresaContext';

export default function CardFilial({ tipo }) {
    const [abrirpopUp, setAbrirPopUpDeletar] = useState(false);
    const [idFilialSelecionada, setIdFilialSelecionada] = useState(null);
    const [infos, setInfos] = useState([]);
    const navigate = useNavigate();
    const { tipoUsuario } = useEmpresa();
    const token = localStorage.getItem('token');
    const { id } = useParams();

    useEffect(() => {
        GetInfos();
    }, []);

    async function GetInfos() {
        try {
            if (tipoUsuario == 'adm') {
                if (!id) {
                    toast.error('ID da empresa não informado.');
                    return;
                    
                }

                const urlAdmin = `http://localhost:5001/filial?id_empresa=${id}&x-access-token=${token}`;
                const respAdm = await axios.get(urlAdmin);

                setInfos(respAdm.data.dados);
            } else {
                const urlBase = `http://localhost:5001/filial?x-access-token=${token}`;
                const resp = await axios.get(urlBase);

                setInfos(resp.data.dados);
            }
        } catch (error) {
            toast.remove();
            const mensagem = error.response?.data?.erro || 'Erro inesperado, tente novamente.';
            toast.error(mensagem);
        }
    }

    return (
        <div className="card-filial">
            {infos.length == 0 ? (
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
                    <div key={index} className="card-info">
                        {tipoUsuario == 'adm' ? (
                            <Link className="id" to={`/infosFilial/${item.id_filial}`} state={{ id_empresa: id }}>
                                #{item.id_filial}
                            </Link>
                        ) : (
                            <p className="id">#{item.id_filial}</p>
                        )}

                        <div className="item">
                            <img src="/assets/images/apartamento.svg" alt="Nome" />
                            <div className="text">
                                <p className="label">Nome</p>
                                <p className="valor">{item.ds_razao_social}</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/assets/images/localizacao.svg" alt="Localização" />
                            <div className="text">
                                <p className="label">Localização</p>
                                <p className="valor">{item.ds_endereco}</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/assets/images/telefone.svg" alt="Contato" />
                            <div className="text">
                                <p className="label">Contato</p>
                                <p className="valor">{item.ds_telefone}</p>
                            </div>
                        </div>

                        <img
                            src="/assets/images/lixeira.svg"
                            alt="Deletar"
                            className="icon-lixeira"
                            onClick={() => {
                                setAbrirPopUpDeletar(true);
                                setIdFilialSelecionada(item.id_filial);
                            }}
                        />
                    </div>
                ))
            )}

            {abrirpopUp && (
                <PopUpDeletar
                    fecharPopUp={() => setAbrirPopUpDeletar(false)}
                    id_filial={idFilialSelecionada}
                    atualizarLista={() => {
                        setAbrirPopUpDeletar(false);
                        GetInfos();
                    }}
                />
            )}
        </div>
    );
}
