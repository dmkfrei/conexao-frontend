import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';
import MenuDireita from '../../../components/menuDireita';
import { useEffect } from 'react';

export default function ValidarInfos() {
    let navigate = useNavigate();

    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);

    return (
        <div className="validar-infos">
            <MenuLateral menuFrei={true}/>
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


                            <MenuDireita />
                        </div>

                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}
