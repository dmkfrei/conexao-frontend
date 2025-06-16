import './index.scss';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import CardFuncionario from '../../../components/cardFuncionarios';
import MenuDireita from '../../../components/menuDireita';
import PopUpAprovar from '../../../components/popUpAprovar';
import PopUpReprovar from '../../../components/popUpReprovar';

export default function ConfirmarInfos() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [abrirPopUpAprovar, setAbrirPopUpAprovar] = useState(false);
    const [abrirPopUpReprovar, setAbrirPopUpReprovar] = useState(false);

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, []);

    return (
        <div className="confirmar-infos">
            <MenuLateral />
            <MenuEmpresa menuFrei={true} />
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <div className="links">
                            <Link to='/validarInfos' className="link">
                                <img src="/assets/images/Vector.svg" alt="" />
                                <h1>Voltar</h1>
                            </Link>
                        </div>
                        <h1 id='h1Info'>Informações Cadastradas</h1>
                    </div>

                    <div className="principal">
                        <div className="lado-esquerdo">
                            <div className="bordaBranca">
                                <CardFuncionario />
                            </div>
                            <div className="botao">
                                <button onClick={() => setAbrirPopUpReprovar(true)}>Recusar</button>
                                <button onClick={() => setAbrirPopUpAprovar(true)}>Aprovar</button>
                            </div>
                        </div>

                        <MenuDireita />
                    </div>
                </div>
            </Cabecalho>

            {abrirPopUpAprovar && (
                <PopUpAprovar onClose={() => setAbrirPopUpAprovar(false)} />
            )}
            {abrirPopUpReprovar && (
                <PopUpReprovar onClose={() => setAbrirPopUpReprovar(false)} />
            )}
        </div>
    );
}
