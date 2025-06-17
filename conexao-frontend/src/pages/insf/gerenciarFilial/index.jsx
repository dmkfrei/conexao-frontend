import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate } from 'react-router-dom';
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
    return (
        <div className="gerenciar-filial-insf">
            <MenuLateral menuFrei={true}/>
            <MenuEmpresa menuFrei={true} />
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <h1 id='h1Info'>Gerenciamento de Filiais</h1>
                    </div>


                    <div className="principal">
                        <div className="esquerda">
                            <div className="addFilial">
                                <Link to='/infosFilial'>
                                    <img src="/assets/images/novo.svg" alt="" />
                                    <h1>Nova Filial</h1>
                                </Link>
                            </div>

                            <div className="meio">
                                <div className="bordaBranca">
                                    <CardFilial />
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