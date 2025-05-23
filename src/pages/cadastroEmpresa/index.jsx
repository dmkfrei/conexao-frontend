import './index.scss';
import MenuLateral from '../../components/menuLateral';
import Cabecalho from '../../components/cabecalho';
import MenuUsuario from '../../components/menuUsuario';


export default function CadastroEmpresa() {
    return (

        <div className="cadastro-empresa">
            <MenuLateral />
            <MenuUsuario />
            <Cabecalho>

                <div className="content">
                    <div className="bordaBranca">
                        <div className="texto">
                            <h1>Cadastro</h1>
                            <p>Faça o cadastro de uma nova empresa <span>adicionando um nome e senha inicial.</span></p>
                        </div>

                        <div className="inputs">
                            <div className="inputNome">
                                <h1>Nome</h1>
                                <input type="text" placeholder='Escreva aqui' />
                            </div>

                            <div className="inputSenha">
                                <h1>Senha</h1>
                                <input type="text" placeholder='Minímo 8 caractéres' />
                            </div>

                            <div className="inputConfirmar">
                                <h1>Confirmar a Senha</h1>
                                <input type="text" placeholder='Senha' />
                            </div>

                            <div className="botao">
                                <button>Fazer Cadastro</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Cabecalho>


        </div>
    )
}