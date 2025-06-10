import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import MenuLinks from '../../../components/menuLinks'

export default function CadastroFuncionario() {
    return (
        <div className="cadastro-funcionario">
            <MenuLateral />
            <MenuEmpresa menuEmpresa={true} />
            <Cabecalho>
                <div className="conteudo">
                    <div className="text">
                        <div className="link">
                            <Link to='/empresa/gerenciarFuncionarios' className='link'><img src="/assets/images/Vector.svg" alt="" />
                                <h1>Voltar</h1>
                            </Link>
                        </div>
                        <h1 id='h1Info'>Cadastro de Funcionários</h1>
                    </div>

                    <div className="principal">
                        <div className="bordaBranca">
                            <div className="infos">
                                <div className="card">
                                    <img src="/assets/images/pessoa.svg" alt="" />
                                    <h1>Informações do Profissional</h1>
                                </div>

                                <div className="campo">
                                    <h1>Nome</h1>
                                    <input type="text" placeholder='Escreva aqui' />
                                </div>

                                <div className="campo">
                                    <h1>Cargo</h1>
                                    <input type="text" placeholder='Escreva aqui' />
                                </div>

                                <div className="campo">
                                    <h1>Email</h1>
                                    <input type="text" placeholder='Escreva aqui' />
                                </div>

                                <div className="campo">
                                    <h1>Telefone</h1>
                                    <input type="text" placeholder='Escreva aqui' />
                                </div>
                            </div>
                        </div>

                        <MenuLinks menuEmpresa={true} />
                    </div>
                    <div className="botao">
                        <button>Salvar</button>
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}