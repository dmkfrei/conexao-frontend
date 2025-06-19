import './index.scss';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import PopUpDeletarResponsavel from '../popUpDeletarResponsavel';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function CardFuncionarios() {
    const [abrirPopUpDeletar, setAbrirPopUpDeletar] = useState(false);
    const [idRespSelecionada, setIdRespSelecionada] = useState(null);
    const [infos, setInfos] = useState([]); 
    const navigate = useNavigate();
    
    const token = localStorage.getItem('token');
    const decode = jwtDecode(token);
    const id_login = decode.id;

    useEffect(() => {
        GetInfos();
    }, []);

    async function BuscarId() {
        const url = 'http://localhost:5001/buscarEmpresaPeloLogin';
        const resp = await axios.post(url, { id_login });

        return resp.data.id_empresa;
    }

    async function GetInfos() {
        try {
            const id = await BuscarId();
            const url = `http://localhost:5001/buscarResp/${id}`;

            const resp = await axios.get(url, {
                headers: {
                    'x-access-token': token
                }
            });

            setInfos(resp.data.infos);
        } catch (error) {
            if (error.response && error.response.data) {
                toast.remove();
                let mensagemErro = error.response.data.erro;
                toast.error(mensagemErro);
                
                if (mensagemErro == 'Cadastre a empresa primeiro') {
                    navigate('/empresa/salvarInfos');
                }   
            } else {
                toast.error('Erro inesperado, tente novamente.');
            }
        }
    }

    return (
        <div className="card-funcionarios">
            {infos.map((item, index) => (
                <div className="card-info" key={index}>
                    <p className="id">#{item.id_responsavel}</p>

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
