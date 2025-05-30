import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';

export default function SalvarInfos() {
    return (
        <div className="salvar-infos">
            <MenuLateral />
            <MenuEmpresa />
            <Cabecalho>
                <div className="content">
                    <h1 id='h1Info'>Informações Cadastradas</h1>

                    <div className="principal">
                        <div className="esquerda">
                            <Formulario botaoTexto='Salvar'/>
                        </div>
                        
                        <div className="direita">
                            <hr />
                            <div className="dados">
                                <Link>Dados da Empresa</Link>
                                <Link to='/empresa/gerenciarFuncionarios'>Dados dos Responsáveis</Link>
                                <Link to='/empresa/gerenciarFilial'>Filiais</Link>
                                <Link to='/empresa/Acordo'>Acordo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>


        </div>
    )
}   