import './index.scss';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="secao-login">
            <div className="bordaBranca">
                <div className="esquerda">

                    <div className="mensagem">
                        <h1>Bem-vindo(a)!</h1>

                        <p>Encontre novos candidatos que atendam o que procura para seu negócio!
                        </p>
                    </div>

                    <div className="form">
                        <h1>Usuário</h1>
                        <input type="text" placeholder='Insira o seu nome de usuário.' />

                        <h1>Senha</h1>
                        <input type="text" placeholder='Minímo 8 caracteres.' />

                        <div className="senha">
                            <h1>Esqueceu a senha?</h1>
                        </div>


                        <button>Fazer Login</button>
                    </div>
                </div>

                <div className="direita"> 
                    <img src="/assets/images/Art.svg" alt="" />
                </div>
            </div>

        </div>
    )
}