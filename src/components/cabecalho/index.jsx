import { Link } from 'react-router-dom';
import './index.scss';

export default function Cabecalho({children}) {
    return (
        <div className="cabecalho">
            <div className="cima">
                <div className="infos">
                    <h1>Bruno O Status </h1>
                    <img src="/assets/images/semfoto.svg" alt="" />
                </div>
            </div>
            {children}
        </div>
    );
}
