import './index.scss';
import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Contratos() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);
    
    return (
        <div className="contratos">
            <MenuLateral menuFrei={true}/>
            <MenuEmpresa menuFrei={true}/>
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <h1>Contratos Pendentes</h1>
                    </div>
                    

                    <div className="bordaBranca">
                        <div className="card-infos">
                            <p id='id'>#1</p>
                            <img src="/assets/images/olho.svg" alt="" />
                            <img src="/assets/images/pupila.svg" alt="" id='pupila'/>
                        </div>
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}