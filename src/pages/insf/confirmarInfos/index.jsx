import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import CardFuncionario from '../../../components/cardFuncionarios';

export default function ConfirmarInfos() {
    return (
        <div className="confirmar-infos">
            <MenuLateral />
            <MenuEmpresa menuFrei={true} />
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <div className="links">
                            <Link to='/validarInfos' className="link">
                                <img src="/assets/images/Vector.svg" alt="" />
                                <h1>Voltar</h1>
                            </Link>
                        </div>
                        <h1 id='h1Info'>Informações Cadastradas</h1>
                    </div>

                    <div className="principal">
                        <div className="lado-esquerdo">
                            <div className="bordaBranca">
                                <CardFuncionario />
                            </div>
                            <div className="botao">
                                <button>Recusar</button>
                                <button>Aprovar</button>
                            </div>
                        </div>

                        <div className="direita">
                            <Link to='/validarInfos'>Dados da Empresa</Link>
                            <div className="dados">
                                <hr />
                                <Link to='/confirmarInfos'>Dados dos Responsáveis</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}
