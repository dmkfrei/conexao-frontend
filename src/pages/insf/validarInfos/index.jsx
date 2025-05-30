import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';

export default function ValidarInfos() {
    return (
        <div className="validar-infos">
            <MenuLateral />
            <MenuEmpresa />
            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <Link to='/validacoes' className='link'><img src="/assets/images/Vector.svg" alt="" />
                            <h1>Voltar</h1>
                        </Link>
                    </div>

                    <h1 id='h1Info'>Informações Cadastradas</h1>

                    <div className="principal">
                        <div className="esquerda">
                            <Formulario botaoTexto='Proximo' botaoDestino='/confirmarInfos' />
                        </div>


                        <div className="direita">
                            <hr />
                            <div className="dados">
                                <h1>Dados da Empresa</h1>
                                <h1 id='ddos'>Dados dos Responsáveis</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}
