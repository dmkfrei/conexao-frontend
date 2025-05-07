import './index.scss';
import { Link } from 'react-router-dom';

export default function Cadastro() {
    return (
        <div className="secao-cadastro">
            <div className="esquerda">
                <img src=""/>
            </div>

            <div className="direita">
                <div className="mensagem">
                    <h1>Cadastre-se agora</h1>

                    <p>Crie uma conta para sua empresa e encontre novos
                    <span>candidatos para cooperar!</span>
                    </p>
                </div>

                <div className="form">
                    <div className="inputUsuario">
                        <h1>Usuário</h1>
                        <input type="text" id='usuario' placeholder='Insira o seu nome de usuário.' />
                    </div>

                    <div className="inputSenha">
                        <h1>Senha</h1>
                        <input type="text" placeholder='Minímo 8 caracteres.' />
                    </div>

                    <div className="inputConfirmar">
                        <h1>Confirme a senha</h1>
                        <input type="text" placeholder='Minímo 8 caracteres.' />
                    </div>
                </div>

                <div className="botao">
                    <button>Fazer Cadastro</button>

                    <h1>Já Possui conta? <Link to='/'>Entrar</Link></h1>
                </div>
            </div>
        </div>
    )
}