import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import MenuLinks from '../../../components/menuLinks';


export default function Acordo() {
    return (
        <div className="acordo">
            <MenuLateral />
            <MenuEmpresa menuEmpresa={true}/>

            <Cabecalho>
                <div className="content">
                    <h1>Acordo</h1>
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