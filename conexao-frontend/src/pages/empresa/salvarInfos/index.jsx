import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import Formulario from '../../../components/formularioDados';
import MenuLinks from '../../../components/menuLinks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SalvarInfos() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);
    
    return (
        <div className="salvar-infos">
            <MenuLateral />
            <MenuEmpresa menuEmpresa={true} />
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <h1 id='h1Info'>Informações Cadastradas</h1>
                    </div>
                    

                    <div className="principal">
                        <div className="meio">
                            <div className="esquerda">
                                <Formulario botaoTexto='Salvar' />
                            </div>

                            <MenuLinks menuEmpresa={true} />
                        </div>

                    </div>
                </div>
            </Cabecalho>


        </div>
    )
}   