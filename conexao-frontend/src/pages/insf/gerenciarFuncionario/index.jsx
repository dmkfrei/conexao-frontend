import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CardFilial from '../../../components/cardFilial';
import MenuLinks from '../../../components/menuLinks'
import CardFuncionarios from '../../../components/cardFuncionarios';
import { useEffect } from 'react';

export default function GerenciarFuncionarioINSF() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');
    const { id } = useParams();

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);
    
    return (
        <div className="gerenciar-funcionario-insf">
            <MenuLateral menuFrei={true} />
            <MenuEmpresa menuFrei={true} />
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <h1 id='h1Info'>Gerenciamento de Funcionários</h1>
                    </div>


                    <div className="principal">
                        <div className="esquerda">
                            <div className="addFilial">
                                <Link>
                                    <img src="/assets/images/novo.svg" alt="" />
                                    <h1>Novo Cargo</h1>
                                </Link>
                            </div>

                            <div className="meio">
                                <div className="bordaBranca">
                                    <CardFuncionarios tipo='adm'/>
                                </div>
                                <MenuLinks menuFrei={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}