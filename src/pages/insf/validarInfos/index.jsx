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
            <MenuEmpresa menuFrei={true} />
            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <div className="seta-voltar">
                            <Link to='/validacoes' className='link'>
                            <img src="/assets/images/Vector.svg" alt="" />
                                <h1>Voltar</h1>
                            </Link>
                        </div>

                        <h1 id='h1Info'>Informações Cadastradas</h1>
                    </div>



                    <div className="principal">
                        <div className="meio">
                            <div className="esquerda">
                                <Formulario botaoTexto='Proximo' botaoDestino='/confirmarInfos' />
                            </div>


                            <div className="direita">
                                <hr />
                                <div className="dados">
                                    <Link to='/validarInfos'>Dados da Empresa</Link>
                                    <Link to='/confirmarInfos'>Dados dos Responsáveis</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}
