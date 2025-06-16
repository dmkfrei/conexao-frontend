import './index.scss';

export default function MudarSenha() {
    return (
        <div className="mudar-senha">
            <div className="bordaBranca">
                <div className="esquerda">
                    <img src="/assets/images/Rectangle 4464.svg" alt="" />
                </div>

                <div className="direita">

                    <div className="mensagem">
                        <h1>Redefinir Senha</h1>

                        <p>Digite e confirma sua nova senha. Tente dificultar o máximo adicionando carácteres especiais, números, etc.
                        </p>
                    </div>

                    <div className="form">
                        <div className="inputSenha">
                            <h1>Senha</h1>
                            <input type="text" placeholder='Mínimo 8 carácteres...' />
                        </div>

                        <div className="inputConfirmar">
                            <h1>Confirmar Senha</h1>
                            <input type="text" placeholder='Confirmar a senha...' />
                        </div>

                        <button>Redefinir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}