import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function CardEmpresa({ img }) {
    const [ativo, setAtivo] = useState(true);

    function estaAtivo() {
        setAtivo(!ativo);
    }

    return (
        <div className="card-empresa">
            <p className="id"><Link to='/validarInfos'>#1</Link></p>

            <div className="card-info">
                <div className="item">
                    <img src="/assets/images/apartamento.svg" alt="Nome" />

                    <div className="text">
                        <p className="label">Nome</p>
                        <p className="valor">{ativo ? 'Empresa X...' : '***********'}</p>
                    </div>
                </div>

                <div className="item">
                    <img src="/assets/images/localizacao.svg" alt="Localização" />

                    <div className="text">
                        <p className="label">Localização</p>
                        <p className="valor">{ativo ? 'R. Abóbora M...' : '**********'}</p>
                    </div>
                </div>

                <div className="item">
                    <img src="/assets/images/telefone.svg" alt="Contato" />

                    <div className="text">
                        <p className="label">Contato</p>
                        <p className="valor">{ativo ? '(11) 99999-9999' : '(**) *****-****'}</p>
                    </div>
                </div>
            </div>

            <img src="/assets/images/olho.svg" alt="Visualizar" className="icon-eye" onClick={estaAtivo} />
            <img src="/assets/images/pupila.svg" alt="" id='pupila' onClick={estaAtivo} />
        </div>
    );
};
