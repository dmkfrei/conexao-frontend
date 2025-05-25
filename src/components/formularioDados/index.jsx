import './index.scss';
import { Link } from 'react-router-dom';

export default function Formulario({ botaoTexto, botaoDestino }) {
    return (
        <div className="formulario-dados">
            <div className="bordaBranca">
                <div className="infos">
                    <div className="card">
                        <img src="/assets/images/apartamento.svg" alt="" />
                        <h1>Identificação</h1>
                    </div>

                    <div className="campo">
                        <h1>Nome da Empresa</h1>
                        <input type="text" />
                    </div>
                    <div className="campo">
                        <h1>CNPJ</h1>
                        <input type="text" />
                    </div>
                    <div className="campo">
                        <h1>Inscrição</h1>
                        <input type="text" />
                    </div>

                    <div className="card">
                        <img src="/assets/images/localizacao.svg" alt="" />
                        <h1>Localização</h1>
                    </div>

                    <div className="campo">
                        <h1>Endereço</h1>
                        <input type="text" />
                    </div>

                    <div className="campo">
                        <h1>Bairro</h1>
                        <input type="text" />
                    </div>

                    <div className="campo">
                        <h1>CEP</h1>
                        <input type="text" />
                    </div>

                    <div className="campo">
                        <h1>Cidade</h1>
                        <input type="text" />
                    </div>

                    <div className="campo">
                        <h1>Estado</h1>
                        <input type="text" />
                    </div>

                    <div className="card">
                        <img src="/assets/images/telefone.svg" alt="" />
                        <h1>Contato</h1>
                    </div>

                    <div className="campo">
                        <h1>Telefone</h1>
                        <input type="text" />
                    </div>

                    <div className="campo">
                        <h1>Celular</h1>
                        <input type="text" />
                    </div>

                    <div className="card">
                        <img src="/assets/images/cadeado.svg" alt="" />
                        <h1>Login</h1>
                    </div>

                    <div className="campo">
                        <h1>Email</h1>
                        <input type="text" />
                    </div>

                    <div className="campo">
                        <h1>Senha</h1>
                        <input type="password" />
                    </div>
                </div>
            </div>
            <div className="botao">
                <button><Link to={botaoDestino}>{botaoTexto}</Link></button>
            </div>
        </div>
    )
}