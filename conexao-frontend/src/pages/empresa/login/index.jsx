import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function LoginEmpresa() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    localStorage.removeItem('token');

    async function Login() {
        try {
            const url = 'http://localhost:5001/logar';

            let obj = {
                ds_usuario: usuario,
                ds_senha: senha
            }

            let resp = await axios.post(url, obj);
            let token = localStorage.setItem('token', resp.data.token);

            navigate('/empresa/salvarInfos');
        } catch (error) {
            if (error.response && error.response.data) {
                let mensagemErro = error.response.data.erro;
                toast.error(mensagemErro);
            } else {
                toast.error('Erro inesperado, tente novamente.');
            }
        }
    }

    return (
        <div className="login-empresa">
            <div className="bordaBranca">
                <div className="esquerda">

                    <div className="mensagem">
                        <h1>Bem-vindo(a)!</h1>

                        <p>Encontre novos candidatos que atendam o que procura para seu negócio!
                        </p>
                    </div>

                    <div className="form">
                        <h1>Usuário</h1>
                        <input type="text" placeholder='Insira o seu nome de usuário.' value={usuario} onChange={e => setUsuario(e.target.value)}/>

                        <h1>Senha</h1>
                        <input type="text" placeholder='Minímo 8 caracteres.' value={senha} onChange={e => setSenha(e.target.value)}/>

                        <div className="senha">
                            <Link to='/empresa/enviarCodigo'>Esqueceu a senha?</Link>
                        </div>

                        <button onClick={Login}>Fazer Login</button>
                    </div>
                </div>

                <div className="direita">
                    <img src="/assets/images/arte.svg" alt="" />
                </div>
            </div>

            <Toaster
                toastOptions={{
                    style: {
                        font: '500 15px inter',
                    }
                }}
            />
        </div>
    )
}