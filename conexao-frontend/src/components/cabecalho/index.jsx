import { Link } from 'react-router-dom';
import './index.scss';

export default function Cabecalho({children}) {
    return (
        <div className="cabecalho">
            <div className="cima">
                <div className="infos">
                    <h1>ISNF</h1>
                    <img src="/assets/images/logo-frei-cinza.svg" alt="" />
                </div>
            </div>
            {children}
        </div>
    );
}
