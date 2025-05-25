import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';

export default function SalvarInfos(params) {
    return (
        <div className="salvar-infos">
            <MenuLateral />
            <MenuEmpresa />
            <Cabecalho>
                <div className="content">
                    <h1 id='h1Info'>Informações da Empresa</h1>

                    <div className="principal">
                        <Formulario botaoTexto='Salvar'/>

                        <div className="direita">
                            <hr />
                            <div className="dados">
                                <h1>Dados da Empresa</h1>
                                <h1 id='ddos'>Dados dos Responsáveis</h1>
                                <h1>Filiais</h1>
                                <h1>Acordo</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>


        </div>
    )
}   