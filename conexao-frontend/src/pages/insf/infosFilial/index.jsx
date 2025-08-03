import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';
import MenuLinks from '../../../components/menuLinks'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function InfosFilial() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);
    
    const location = useLocation();
    const id_empresa = location.state.id_empresa;

    return (
        <div className="infos-filial">
            <MenuLateral />
            <MenuEmpresa />
            <Cabecalho >
                <div className="conteudo">
                    <div className="text">
                        <div className="link">
                            <Link to={`/gerenciarFilial/${id_empresa}`} className='link'>
                                <img src="/assets/images/Vector.svg" alt="" />
                                <h1>Voltar</h1>
                            </Link>
                        </div>
                        <h1 id='h1Info'>Informações da Nova Filial</h1>
                    </div>

                    <div className="principal">
                        <div className="meio">
                            <div className="esquerda">
                                <Formulario tipo='editar-filial' botaoTexto='Salvar' buscar={true} />
                            </div>

                            <MenuLinks id_empresa={id_empresa} />
                        </div>

                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}