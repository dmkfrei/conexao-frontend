import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CardFilial from '../../../components/cardFilial';
import MenuLinks from '../../../components/menuLinks'
import { useEffect } from 'react';

export default function GerenciarFilialINSF() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);

    const { id } = useParams();

    return (
        <div className="gerenciar-filial-insf">
            <MenuLateral />
            <MenuEmpresa />
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <h1 id='h1Info'>Gerenciamento de Filiais</h1>
                    </div>

                    <div className="principal">
                        <div className="esquerda">
                            <div className="addFilial">
                                <Link>
                                    <img src="/assets/images/novo.svg" alt="" />
                                    <h1>Nova Filial</h1>
                                </Link>
                            </div>

                            <div className="meio">
                                <div className="bordaBranca">
                                    <CardFilial tipo='adm'/>
                                </div>

                                <MenuLinks id_empresa={id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}