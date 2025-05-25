import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuUsuario from '../../../components/menuUsuario';
import { Link } from 'react-router-dom';
import CardEmpresa from '../../../components/cardEmpresa';

export default function Validacoes() {
    return (
        <div className="validacoes">
            <MenuLateral />
            <MenuUsuario />

            <Cabecalho>
                <div className="conteudo">

                    <h1>Validações Pendentes</h1>

                    <div className="bordaBranca">
                        <CardEmpresa />
                        <CardEmpresa />
                        <CardEmpresa />
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}