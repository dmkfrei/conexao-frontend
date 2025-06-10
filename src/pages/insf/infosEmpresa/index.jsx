import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';
import MenuLinks from '../../../components/menuLinks';

export default function InfosEmpresa() {
    return (
        <div className="infos-empresa">
            <MenuLateral />
            <MenuEmpresa menuFrei={true} />
            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <h1 id='h1Info'>Informações Cadastradas</h1>
                    </div>


                    <div className="principal">
                        <div className="meio">
                            <div className="esquerda">
                                <Formulario botaoTexto='Salvar' />
                            </div>


                            <MenuLinks menuFrei={true} />
                        </div>

                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}