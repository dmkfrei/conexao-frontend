import './index.scss';
import { Link } from 'react-router-dom';

export default function CardFuncionarios({ rota }) {
    return (
        <div className="card-funcionarios">
            <p className="id"><Link to={rota}>#1</Link></p>

            <div className="card-info">
                <div className="item">
                    <img src="/assets/images/apartamento.svg" alt="Nome" />

                    <div className="text">
                        <p className="label">Nome</p>
                        <p className="valor">Empresa X...</p>
                    </div>
                </div>

                <div className="item">
                    <img src="/assets/images/Briefcase.svg" alt="Localização" />

                    <div className="text">
                        <p className="label">Cargo</p>
                        <p className="valor">Supervisor...</p>
                    </div>
                </div>

                <div className="item">
                    <img src="/assets/images/telefone.svg" alt="Contato" />

                    <div className="text">
                        <p className="label">Contato</p>
                        <p className="valor">(11) 99999-9999</p>
                    </div>
                </div>

                <div className="item">
                    <img src="/assets/images/email.svg" alt="Contato" />

                    <div className="text">
                        <p className="label">Email</p>
                        <p className="valor">func123@...</p>
                    </div>
                </div>
            </div>

            <img src="/assets/images/lixeira.svg" alt="Visualizar" className="icon-lixeira" />
        </div>
    );
};
