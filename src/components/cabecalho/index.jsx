import { Link } from 'react-router-dom';
import './index.scss';

export default function Cabecalho() {
    return (
        <div className="cabecalho">
            <div className="cima">
                <div className="infos">
                    <h1>Bruno O <span>Status</span> </h1>
                    <img src="/assets/images/semfoto.svg" alt="" />
                </div>
            </div>
        </div>
    );
}
