import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';
import CardFuncionarios from '../../../components/cardFuncionarios';

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
                        </div>
                        

                        <div className="direita">
                            <hr />
                            <div className="dados">
                                <Link to='/empresa/salvarInfos'>Dados da Empresa</Link>
                                <Link to='/empresa/gerenciarFuncionarios' >Dados dos Responsáveis</Link>
                                <Link to='/empresa/gerenciarFilial'>Filiais</Link>
                                <Link>Acordo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>


        </div>
    )
}   