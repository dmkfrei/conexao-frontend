import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import CardFilial from '../../../components/cardFilial';
import MenuLinks from '../../../components/menuLinks'
import CardFuncionarios from '../../../components/cardFuncionarios';

export default function GerenciarFuncionarioINSF() {
    return (
        <div className="gerenciar-funcionario-insf">
            <MenuLateral />
            <MenuEmpresa menuFrei={true} />
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <h1 id='h1Info'>Gerenciamento de Funcionários</h1>
                    </div>


                    <div className="principal">
                        <div className="esquerda">
                            <div className="addFilial">
                                <img src="/assets/images/novo.svg" alt="" />
                                <h1>Novo Cargo</h1>
                            </div>

                            <div className="meio">
                                <div className="bordaBranca">
                                    <CardFuncionarios rota='/infosFuncionario' />
                                </div>
                                    <MenuLinks menuFrei={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}