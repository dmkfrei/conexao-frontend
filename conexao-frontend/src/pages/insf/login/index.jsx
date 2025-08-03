import { useState } from 'react';
import './index.scss';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    localStorage.removeItem('token');
    
    async function Login(e) {
        e.preventDefault();

        try {
            const url = `http://localhost:5001/loginAdm`;

            let obj = {
                ds_usuario: nome,
                ds_senha: senha
            };

            let resp = await axios.post(url, obj);
            let token = localStorage.setItem('token', resp.data.token);

            navigate('/cadastroEmpresa');
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
        <div className="secao-login">
            <div className="bordaBranca">
                <div className="esquerda">
                    <div className="mensagem">
                        <h1>Bem-vindo(a)!</h1>
                        <p>Encontre novos candidatos que atendam o que procura para seu negócio!</p>
                    </div>
                    <form className="form">
                        <h1>Nome</h1>
                        <input type="text" placeholder="Escreva aqui" value={nome} onChange={e => setNome(e.target.value)} />

                        <h1>Senha</h1>
                        <input type="password" placeholder="Mínimo 8 caracteres" value={senha} onChange={e => setSenha(e.target.value)} />

                        <button onClick={Login}>Fazer Login</button>
                    </form>
                </div>

                <div className="direita">
                    <img src="/assets/images/Art.svg" alt="" />
                </div>
            </div>
        </div>
    );
};
