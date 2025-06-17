import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';
import MenuLinks from '../../../components/menuLinks';
import { useEffect } from 'react';

export default function InfosEmpresa() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);
    
    return (
        <div className="infos-empresa">
            <MenuLateral menuFrei={true}/>
            <MenuEmpresa menuFrei={true} />
            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <h1 id='h1Info'>Informações Cadastradas</h1>
                    </div>


                    <div className="principal">
                        <div className="meio">
                            <div className="esquerda">
                                <Formulario botaoTexto='Salvar' />
                            </div>


                            <MenuLinks menuFrei={true} />
                        </div>

                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}