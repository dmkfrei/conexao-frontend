import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PopUpDeletarResponsavel from '../popUpDeletarResponsavel';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function CardFuncionarios({ tipo }) {
    const [abrirPopUpDeletar, setAbrirPopUpDeletar] = useState(false);
    const [idRespSelecionada, setIdRespSelecionada] = useState(null);
    const [infos, setInfos] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const { id } = useParams();

    useEffect(() => {
        GetInfos();
    }, []);

    async function GetInfos() {
        try {
            let url = `http://localhost:5001/buscarResp?x-access-token=${token}`;

            if (id) {
                url += `&id_empresa=${id}`;
            }

            const resp = await axios.get(url);
            setInfos(resp.data.infos);
        } catch (error) {
            if (error.response && error.response.data) {
                toast.remove();
                const mensagemErro = error.response.data.erro;
                toast.error(mensagemErro);
            } else {
                toast.error('Erro inesperado, tente novamente.');
            }
        }
    }

    return (
        <div className="card-funcionarios">
            {infos.map((item) => (
                <div className="card-info" key={item.id_responsavel}>
                    {tipo == 'adm' ? (
                        <Link
                            to={`/infosFuncionario/${item.id_responsavel}`}
                            state={{ id_empresa: id }}
                            className="id"
                        >
                            #{item.id_responsavel}
                        </Link>
                    ) : (
                        <p className="id">#{item.id_responsavel}</p>
                    )}

                    <div className="item">
                        <img src="/assets/images/pessoa.svg" alt="Nome" />
                        <div className="text">
                            <p className="label">Nome</p>
                            <p className="valor">{item.nm_nome}</p>
                        </div>
                    </div>

                    <div className="item">
                        <img src="/assets/images/Briefcase.svg" alt="Cargo" />
                        <div className="text">
                            <p className="label">Cargo</p>
                            <p className="valor">{item.ds_cargo}</p>
                        </div>
                    </div>

                    <div className="item">
                        <img src="/assets/images/telefone.svg" alt="Contato" />
                        <div className="text">
                            <p className="label">Contato</p>
                            <p className="valor">{item.ds_telefone}</p>
                        </div>
                    </div>

                    <div className="item">
                        <img src="/assets/images/email.svg" alt="Email" />
                        <div className="text">
                            <p className="label">Email</p>
                            <p className="valor">{item.ds_email}</p>
                        </div>
                    </div>

                    <img
                        src="/assets/images/lixeira.svg"
                        alt="Deletar"
                        className="icon-lixeira"
                        onClick={() => {
                            setAbrirPopUpDeletar(true);
                            setIdRespSelecionada(item.id_responsavel);
                        }}
                    />
                </div>
            ))}

            {abrirPopUpDeletar && (
                <PopUpDeletarResponsavel
                    id_responsavel={idRespSelecionada}
                    fecharPopUp={() => setAbrirPopUpDeletar(false)}
                    atualizarLista={() => {
                        setAbrirPopUpDeletar(false);
                        GetInfos();
                    }}
                />
            )}
        </div>
    );
}
