import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';
import MenuLinks from '../../../components/menuLinks'
import { useEffect } from 'react';

export default function InfosFilial() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);
    return (
        <div className="infos-filial">
            <MenuLateral menuFrei={true}/>
            <MenuEmpresa menuFrei={true} />
            <Cabecalho>
                <div className="conteudo">
                    <div className="text">
                        <div className="link">
                            <Link to='/gerenciarFilial' className='link'><img src="/assets/images/Vector.svg" alt="" />
                                <h1>Voltar</h1>
                            </Link>
                        </div>
                        <h1 id='h1Info'>Informações da Nova Filial</h1>
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