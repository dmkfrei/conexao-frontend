import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import Formulario from '../../../components/formularioDados';
import MenuLinks from '../../../components/menuLinks';

export default function SalvarInfos() {
    return (
        <div className="salvar-infos">
            <MenuLateral />
            <MenuEmpresa menuEmpresa={true} />
            <Cabecalho>
                <div className="content">
                    <h1 id='h1Info'>Informações Cadastradas</h1>

                    <div className="principal">
                        <div className="meio">
                            <div className="esquerda">
                                <Formulario botaoTexto='Salvar' />
                            </div>

                            <MenuLinks menuEmpresa={true} />
                        </div>

                    </div>
                </div>
            </Cabecalho>


        </div>
    )
}   