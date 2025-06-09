import './index.scss';
import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';


export default function Contratos() {
    return (
        <div className="contratos">
            <MenuLateral />
            <MenuEmpresa menuFrei={true}/>
            <Cabecalho>
                <div className="content">

                    <h1>Contratos Pendentes</h1>

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