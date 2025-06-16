import './index.scss';

export default function EnviarCodigo() {
    return (
        <div className="enviar-codigo">
            <div className="bordaBranca">
                <div className="esquerda">
                    <img src="/assets/images/Rectangle 4464.svg" alt="" />
                </div>

                <div className="direita">

                    <div className="mensagem">
                        <h1>Esqueceu a senha?</h1>

                        <p>Digite o código enviado ao
                            Email associado à conta
                        </p>
                    </div>

                    <div className="form">
                        <div className="inputCodigo">
                            <h1>Código</h1>
                            <input type="text" placeholder='Escreva aqui' maxLength={6}/>
                        </div>

                        <button>Verificar</button>
                    </div>
                </div>


            </div>
        </div>
    )
}