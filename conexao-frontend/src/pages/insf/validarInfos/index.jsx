import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Formulario from '../../../components/formularioDados';
import MenuDireita from '../../../components/menuDireita';
import { useEffect } from 'react';

export default function ValidarInfos() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { id } = useParams();

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <div className="validar-infos">
            <MenuLateral />
            <MenuEmpresa />
            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <div className="seta-voltar">
                            <Link to='/validacoes' className='link'>
                                <img src="/assets/images/Vector.svg" alt="Voltar" />
                                <h1>Voltar</h1>
                            </Link>
                        </div>

                        <h1 id='h1Info'>Informações Cadastradas</h1>
                    </div>

                    <div className="principal">
                        <div className="meio">
                            <div className="esquerda">
                                <Formulario 
                                    tipo='visualizar' 
                                    botaoTexto='Próximo' 
                                    botaoDestino={`/confirmarInfos/${id}`}
                                    buscar={true} 
                                />
                            </div>

                            <MenuDireita />
                        </div>
                    </div>
                </div>
            </Cabecalho>
        </div>
    )
}
