import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import CardFuncionarios from '../../../components/cardFuncionarios';
import MenuLinks from '../../../components/menuLinks'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function Gerenciar() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/empresa/login');
            return;
        }
    }, []);

    return (
        <div className="gerenciar-funcionarios">
            <MenuLateral />
            <MenuEmpresa />
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <h1 id='h1Info'>Gerenciamento dos funcionários</h1>
                    </div>

                    <div className="principal">
                        <div className="esquerda">
                            <div className="addFilial">
                                <Link to='/empresa/cadastrarFuncionarios'><img src="/assets/images/novo.svg" alt="" />
                                    <h1>Novo Cargo</h1>
                                </Link>
                            </div>

                            <div className="meio">
                                <div className="bordaBranca">
                                    <CardFuncionarios tipo='empresa' />
                                </div>
                                <MenuLinks />
                            </div>
                        </div>

                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}   