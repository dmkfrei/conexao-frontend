import './index.scss';
import MenuLateral from '../../../components/menuLateral';
import Cabecalho from '../../../components/cabecalho';
import MenuEmpresa from '../../../components/menuEmpresa';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CadastroEmpresa() {
    const [Usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);

    async function Cadastro() {
        if (senha.length < 6) {
            return toast.error('A senha deve ter no mínimo 6 caracteres.');
        }

        if (senha != confirmarSenha) {
            return toast.error('As senhas não coincidem.')
        }
        try {
            const url = `http://localhost:5001/login?x-access-token=${token}`;

            let obj = {
                ds_usuario: Usuario,
                ds_senha: confirmarSenha
            }

            let resp = await axios.post(url, obj);
            toast.success('Cadastro inicial da empresa realizado com sucesso!');
            setUsuario('');
            setSenha('');
            setConfirmarSenha('');
        } catch (error) {
            if (error.response && error.response.data) {
                toast.remove();
                let mensagemErro = error.response.data.erro;
                toast.error(mensagemErro);

            } else {
                toast.remove();
                toast.error('Erro inesperado, tente novamente.');
            }
        }
    }

    return (

        <div className="cadastro-empresa">
            <MenuLateral/>
            <MenuEmpresa/>
            <Cabecalho >

                <div className="content">
                    <div className="bordaBranca">
                        <div className="texto">
                            <h1>Cadastro</h1>
                            <p>Faça o cadastro de uma nova empresa <span>adicionando um nome e senha inicial.</span></p>
                        </div>

                        <div className="inputs">
                            <div className="inputNome">
                                <h1>Nome</h1>
                                <input type="text" placeholder='Escreva aqui' value={Usuario} onChange={e => setUsuario(e.target.value)} />
                            </div>

                            <div className="inputSenha">
                                <h1>Senha</h1>
                                <input type="password" placeholder='Minímo 8 caractéres' value={senha} onChange={e => setSenha(e.target.value)} />
                            </div>

                            <div className="inputConfirmar">
                                <h1>Confirmar a Senha</h1>
                                <input type="password" placeholder='Senha' value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} />
                            </div>

                            <div className="botao">
                                <button onClick={Cadastro}>Fazer Cadastro</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Cabecalho>

        </div>
    )
}