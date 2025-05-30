import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import CardFilial from '../../../components/cardFilial';

export default function GerenciarFilial() {
    return (
        <div className="gerenciar-filial">
            <MenuLateral />
            <MenuEmpresa />
            <Cabecalho>
                <div className="content">
                    <h1 id='h1Info'>Gerenciamento de Filiais</h1>

                    <div className="principal">
                        <div className="esquerda">
                            <div className="addFilial">
                                <img src="/assets/images/novo.svg" alt="" />
                                <h1>Nova Filial</h1>
                            </div>

                            <div className="bordaBranca">
                                <CardFilial />
                            </div>
                        </div>


                        <div className="direita">
                            <div className="dados">
                                <Link to='/empresa/salvarInfos'>Dados da Empresa</Link>
                                <Link to='/empresa/gerenciarFuncionarios' >Dados dos Responsáveis</Link>
                                <Link to='/empresa/gerenciarFilial'>Filiais</Link>
                                <Link to='/empresa/acordo'>Acordo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>


        </div>
    )
}   