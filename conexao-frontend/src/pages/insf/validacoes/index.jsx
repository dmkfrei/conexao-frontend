import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link } from 'react-router-dom';
import CardEmpresa from '../../../components/cardEmpresa';
import { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

export default function Validacoes() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);

    return (
        <div className="validacoes">
            <MenuLateral/>
            <MenuEmpresa />

            <Cabecalho >
                <div className="conteudo">

                    <div className="texto">
                        <h1>Validações Pendentes</h1>   
                    </div>


                    <div className="bordaBranca">
                        <CardEmpresa />
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}