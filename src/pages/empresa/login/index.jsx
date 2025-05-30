import './index.scss';
import { Link } from 'react-router-dom';

export default function LoginEmpresa() {
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
                        <h1>Nome</h1>
                        <input type="text" placeholder='Insira o seu nome de usuário.' />

                        <h1>Senha</h1>
                        <input type="text" placeholder='Minímo 8 caracteres.' />

                        <div className="senha">
                            <Link to='/empresa/enviarCodigo'>Esqueceu a senha?</Link>
                        </div>

                        <button>Fazer Login</button>
                    </div>
                </div>

                <div className="direita"> 
                    <img src="/assets/images/arte.svg" alt="" />
                </div>
            </div>

        </div>
    )
}