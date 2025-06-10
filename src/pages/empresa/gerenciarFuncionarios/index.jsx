import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';
import CardFuncionarios from '../../../components/cardFuncionarios';
import MenuLinks from '../../../components/menuLinks'

export default function Gerenciar() {
    return (
        <div className="gerenciar-funcionarios">
            <MenuLateral />
            <MenuEmpresa menuEmpresa={true} />
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <h1 id='h1Info'>Gerenciamento dos funcionários</h1>
                    </div>
                    

                    <div className="principal">
                        <div className="esquerda">
                            <div className="addFilial">
                                <img src="/assets/images/novo.svg" alt="" />
                                <h1>Novo Cargo</h1>
                            </div>

                            <div className="meio">
                                <div className="bordaBranca">
                                    <CardFuncionarios rota='/empresa/cadastrarFuncionarios' />
                                </div>
                                <div className="lado-esquerdo">
                                    <MenuLinks menuEmpresa={true} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Cabecalho>


        </div>
    )
}   