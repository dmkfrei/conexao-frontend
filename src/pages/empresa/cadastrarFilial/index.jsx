import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';
import MenuLinks from '../../../components/menuLinks'

export default function CadastroFilial() {
    return (
        <div className="cadastro-filial">
            <MenuLateral />
            <MenuEmpresa />
            <Cabecalho>
                <div className="conteudo">
                    <div className="text">
                        <Link to='/empresa/gerenciarFilial' className='link'><img src="/assets/images/Vector.svg" alt="" />
                            <h1>Voltar</h1>
                        </Link>
                    </div>

                    <h1 id='h1Info'>Informações da Nova Filial</h1>

                    <div className="principal">
                        <div className="esquerda">
                            <Formulario botaoTexto='Salvar'/>
                        </div>
                        

                        <MenuLinks />
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}