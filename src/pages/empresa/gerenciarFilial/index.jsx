import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import CardFilial from '../../../components/cardFilial';
import MenuLinks from '../../../components/menuLinks'

export default function GerenciarFilial() {
    return (
        <div className="gerenciar-filial">
            <MenuLateral />
            <MenuEmpresa menuEmpresa={true} />
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <h1 id='h1Info'>Gerenciamento de Filiais</h1>
                    </div>


                    <div className="principal">
                        <div className="esquerda">
                            <div className="addFilial">
                                <img src="/assets/images/novo.svg" alt="" />
                                <h1>Nova Filial</h1>
                            </div>

                            <div className="meio">
                                <div className="bordaBranca">
                                    <CardFilial rota='/empresa/cadastrarFilial' />
                                </div>
                                <MenuLinks menuEmpresa={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>


        </div>
    )
}   