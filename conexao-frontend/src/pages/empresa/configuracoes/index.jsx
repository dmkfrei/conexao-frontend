import './index.scss';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import Cabecalho from '../../../components/cabecalho';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Configuracoes() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaAntiga, setSenhaAntiga] = useState('');
    const [foto, setFoto] = useState(null);
    const [arquivoImagem, setArquivoImagem] = useState(null);
    const navigate = useNavigate();
    const [preview, setPreview] = useState('');

    const token = localStorage.getItem('token');

    async function buscarLogin() {
        const url = `http://localhost:5001/login?x-access-token=${token}`;
        const resp = await axios.get(url);
        setUsuario(resp.data[0].ds_usuario);
    }

    async function buscarFoto() {
        try {
            const url = `http://localhost:5001/buscarFotoMatriz?x-access-token=${token}`;
            const resposta = await axios.get(url);

            if (resposta == null || resposta == undefined) return null;

            if (resposta.data?.foto) {
                setFoto(resposta.data.foto);
            }
        } catch (err) {
            setFoto(null);
        }
    }

    async function salvarConfiguracoes(e) {
        e.preventDefault();

        if (arquivoImagem) {
            const formData = new FormData();
            formData.append('img', arquivoImagem);

            try {
                const url = `http://localhost:5001/addFotoMatriz?x-access-token=${token}`
                await axios.put(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                toast.success("Foto atualizada com sucesso!");
                setArquivoImagem(null);
                buscarFoto();
            } catch (err) {
                toast.error("Erro ao atualizar foto.");
            }
        }
        if (senha && senhaAntiga) {
            const url = `http://localhost:5001/login/senha?x-access-token=${token}`;

            let obj = {
                ds_senha: senhaAntiga,
                nova_senha: senha,
                ds_usuario: usuario
            }

            try {
                await axios.put(url, obj);

                toast.success('As configurações foram atualizadas com sucesso.');
                setUsuario('');
                setSenhaAntiga('');
                setSenha('');
            } catch (err) {
                toast.error(err.response.data.erro || 'Erro ao atualizar login.');
            }
        }
    }

    useEffect(() => {
        if (!token || token == null) {
            navigate('/empresa/login');
        } 
        else {
            buscarLogin();
            buscarFoto();
        }
    }, []);

    const previewFoto = preview
        ? preview
        : foto
            ? `http://localhost:5001/imgs/${foto}`
            : '/assets/images/cinza-claro.jpg';

    return (
        <div className="configuracoes">
            <MenuLateral />
            <MenuEmpresa />

            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <h1 id='h1Info'>Configurações</h1>
                    </div>

                    <div className="container">
                        <div className="logo-section">
                            <div className="logo-container">
                                <div className="bordaBranca">
                                    <img
                                        src={previewFoto}
                                        className="logo"
                                    />
                                </div>

                                <label className="borda" htmlFor="upload-imagem">
                                    <img src="/assets/images/square.svg" alt="Editar" className="editar" />
                                </label>

                                <input
                                    id="upload-imagem"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={e => {
                                        const arquivo = e.target.files[0];
                                        setArquivoImagem(arquivo);
                                        if (arquivo) {
                                            const urlPreview = URL.createObjectURL(arquivo);
                                            setPreview(urlPreview);
                                        }
                                    }}
                                />
                            </div>
                            <span>{usuario.length > 8 ? usuario.substring(0, 20) + '...' : usuario}</span>
                        </div>

                        <form className="formulario" onSubmit={salvarConfiguracoes}>
                            <div className="grupo">
                                <label>Usuário</label>
                                <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
                            </div>

                            <hr />

                            <label className="titulo">Alterar Senha</label>

                            <div className="grupo">
                                <label>Senha Atual</label>
                                <input type="password" value={senhaAntiga} onChange={e => setSenhaAntiga(e.target.value)} />
                            </div>

                            <div className="grupo">
                                <label>Nova Senha</label>
                                <input type="password" value={senha} onChange={e => setSenha(e.target.value)} minLength={6} />
                            </div>

                            <button type="submit" className="salvar">Salvar</button>
                        </form>
                    </div>
                </div>
            </Cabecalho>
        </div>
    );
}
