import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';
import MenuLinks from '../../../components/menuLinks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function InfosEmpresa() {
    const navigate = useNavigate();
    let token = localStorage.getItem('token');
    const { id } = useParams();

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/')
        }
    }, []);

    return (
        <div className="infos-empresa">
            <MenuLateral />
            <MenuEmpresa />
            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <h1 id='h1Info'>Informações Cadastradas</h1>
                    </div>


                    <div className="principal">
                        <div className="meio">
                            <div className="esquerda">
                                <Formulario tipo='editar-matriz' botaoTexto='Salvar' buscar={true} />
                            </div>


                            <MenuLinks id_empresa={id}/>
                        </div>

                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}