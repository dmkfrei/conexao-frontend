import './index.scss';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import PopUpDeletar from '../popUpDeletar';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function CardFilial() {
    const [abrirpopUp, setAbrirPopUpDeletar] = useState(false);
    const [idFilialSelecionada, setIdFilialSelecionada] = useState(null);
    const [infos, setInfos] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const decode = jwtDecode(token);
    const id_login = decode.id;
    const tipo = decode.tipo;

    async function BuscarId() {
        if (tipo === 'adm') return null;

        const url = 'http://localhost:5001/buscarEmpresaPeloLogin';
        const resp = await axios.post(url, { id_login });

        return resp.data.id_empresa;
    }


    useEffect(() => {
        GetInfos();
    }, []);

    async function GetInfos() {
        if (tipo == 'adm') return null;
        
        try {
            const id = await BuscarId();

            const url = `http://localhost:5001/filial/${id}`;
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
        <div className="card-filial">
            {infos.map((item, index) => (
                <div key={index} className="card-info">
                    <p className="id">#{item.id_filial}</p>

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
            ))}

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
};
