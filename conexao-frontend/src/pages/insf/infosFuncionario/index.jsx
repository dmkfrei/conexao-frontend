import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useParams } from 'react-router-dom';
import MenuLinks from '../../../components/menuLinks'
import FormularioFuncionario from '../../../components/formularioFuncionario';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function InfosFuncionario() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);

    const { id } = useParams(); 
    const location = useLocation();
    const id_empresa = location.state?.id_empresa;

    return (
        <div className="infos-funcionario">
            <MenuLateral/>
            <MenuEmpresa/>
            <Cabecalho>
                <div className="conteudo">
                    <div className="text">
                        <div className="link">
                            <Link to={`/gerenciarFuncionario/${id_empresa}`} className='link'><img src="/assets/images/Vector.svg" alt="" />
                                <h1>Voltar</h1>
                            </Link>
                        </div>
                        <h1 id='h1Info'>Cadastro de Funcionários</h1>
                    </div>

                    <div className="principal">
                        <div className="meio">
                            <div className="esquerda">
                                <FormularioFuncionario modo="editar"/>
                            </div>

                            <MenuLinks id_empresa={id_empresa} />
                        </div>

                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}