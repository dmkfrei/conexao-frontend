import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';

export default function ConfirmarInfos() {
    return (
        <div className="confirmar-infos">
            <MenuLateral />
            <MenuEmpresa/>
            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <Link to='/validarInfos' className="link">
                            <img src="/assets/images/Vector.svg" alt="" />
                            <h1>Voltar</h1>
                        </Link>
                    </div>


                    <h1 id='h1Info'>Informações Cadastradas</h1>

                    <div className="principal">
                        <div className="lado-esquerdo">
                            <div className="bordaBranca">
                                <div className="infos">
                                    <div className="card">
                                        <img src="/assets/images/pessoa.svg" alt="" />
                                        <h1>Representante Legal</h1>
                                    </div>

                                    <div className="campo">
                                        <h1>Nome</h1>
                                        <input type="text" />
                                    </div>
                                    <div className="campo">
                                        <h1>Cargo</h1>
                                        <input type="text" />
                                    </div>
                                    <div className="campo">
                                        <h1>Email</h1>
                                        <input type="text" />
                                    </div>
                                    <div className="campo">
                                        <h1>Telefone</h1>
                                        <input type="text" />
                                    </div>

                                    <div className="card">
                                        <img src="/assets/images/pessoa.svg" alt="" />
                                        <h1>Supervisor de Estágio</h1>
                                    </div>

                                    <div className="campo">
                                        <h1>Nome</h1>
                                        <input type="text" />
                                    </div>

                                    <div className="campo">
                                        <h1>Cargo</h1>
                                        <input type="text" />
                                    </div>

                                    <div className="campo">
                                        <h1>Email</h1>
                                        <input type="text" />
                                    </div>

                                    <div className="campo">
                                        <h1>Telefone</h1>
                                        <input type="text" />
                                    </div>

                                    <div className="card">
                                        <img src="/assets/images/pessoa.svg" alt="" />
                                        <h1>Contato</h1>
                                    </div>

                                    <div className="campo">
                                        <h1>Nome</h1>
                                        <input type="text" />
                                    </div>

                                    <div className="campo">
                                        <h1>Cargo</h1>
                                        <input type="text" />
                                    </div>

                                    <div className="campo">
                                        <h1>Email</h1>
                                        <input type="text" />
                                    </div>

                                    <div className="campo">
                                        <h1>Telefone</h1>
                                        <input type="text" />
                                    </div>

                                </div>
                            </div>
                            <div className="botao">
                                <button>Recusar</button>
                                <button>Aprovar</button>
                            </div>
                        </div>

                        <div className="direita">
                            <h1 id='ddos'>Dados da Empresa</h1>

                            <div className="dados">
                                <hr />
                                <h1>Dados dos Responsáveis</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}
