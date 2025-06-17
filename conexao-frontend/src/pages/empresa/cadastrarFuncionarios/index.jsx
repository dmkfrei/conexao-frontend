import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate } from 'react-router-dom';
import MenuLinks from '../../../components/menuLinks'
import FormularioFuncionario from '../../../components/formularioFuncionario';
import { useEffect } from 'react';

export default function CadastroFuncionario() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/empresa/login');
        }
    }, []);
    
    return (
        <div className="cadastro-funcionario">
            <MenuLateral menuEmpresa={true}/>
            <MenuEmpresa menuEmpresa={true} />
            <Cabecalho>
                <div className="conteudo">
                    <div className="text">
                        <div className="link">
                            <Link to='/empresa/gerenciarFuncionarios' className='link'><img src="/assets/images/Vector.svg" alt="" />
                                <h1>Voltar</h1>
                            </Link>
                        </div>
                        <h1 id='h1Info'>Cadastro de Funcionários</h1>
                    </div>

                    <div className="principal">
                        <div className="meio">
                            <div className="esquerda">
                                <FormularioFuncionario />
                            </div>

                            <MenuLinks menuEmpresa={true} />
                        </div>

                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}