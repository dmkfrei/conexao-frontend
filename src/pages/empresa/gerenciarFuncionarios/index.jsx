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
            <MenuEmpresa />
            <Cabecalho>
                <div className="content">
                    <h1 id='h1Info'>Gerenciamento dos funcionários</h1>

                    <div className="principal">
                        <div className="bordaBranca">
                            <CardFuncionarios />
                            <CardFuncionarios />
                            <CardFuncionarios />
                            <CardFuncionarios />
                            <CardFuncionarios />
                            <CardFuncionarios />
                            <CardFuncionarios />
                        </div>


                        <MenuLinks />
                    </div>
                </div>
            </Cabecalho>


        </div>
    )
}   