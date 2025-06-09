import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import CardEmpresa from '../../../components/cardEmpresa';

export default function Validacoes() {
    return (
        <div className="validacoes">
            <MenuLateral />
            <MenuEmpresa menuFrei={true}/>

            <Cabecalho>
                <div className="conteudo">

                    <h1>Validações Pendentes</h1>

                    <div className="bordaBranca">
                        <CardEmpresa />
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}