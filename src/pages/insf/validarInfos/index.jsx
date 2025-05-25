import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuUsuario from '../../../components/menuUsuario';
import { Link } from 'react-router-dom';

export default function ValidarInfos() {
    return (
        <div className="validar-infos">
            <MenuLateral />
            <MenuUsuario />
            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <Link to='/validacoes' className='link'><img src="/assets/images/Vector.svg" alt="" /> 
                        <h1>Voltar</h1>
                        </Link>
                    </div>

                    <h1 id='h1Info'>Informações Cadastradas</h1>

                    <div className="principal">
                        <div className="lado-esquerdo">
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
                                <button><Link to='/confirmarInfos'>Proximo</Link></button>
                            </div>
                        </div>

                        <div className="direita">
                            <hr />
                            <div className="dados">
                                <h1>Dados da Empresa</h1>
                                <h1 id='ddos'>Dados dos Responsáveis</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}
