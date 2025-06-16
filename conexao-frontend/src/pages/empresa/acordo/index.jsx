import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import MenuLinks from '../../../components/menuLinks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Acordo() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);
    
    return (
        <div className="acordo">
            <MenuLateral />
            <MenuEmpresa menuEmpresa={true}/>

            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <h1>Acordo</h1>
                    </div>
                    
                    <div className="principal">
                        <div className="esquerda">
                            <div className="bordaBranca">
                                <input id='assinatura' placeholder='Assine aqui ' />
                            </div>

                            <div className="botoes">
                                <button>Ver</button>
                                <button>Baixar</button>
                            </div>
                        </div>

                        <MenuLinks menuEmpresa={true} />
                    </div>

                </div>

            </Cabecalho>

        </div>
    )
}