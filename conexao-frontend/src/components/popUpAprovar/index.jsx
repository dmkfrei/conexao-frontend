import './index.scss';

export default function PopUpAprovar({ onClose }) {
    return (
        <div className="pop-up-aprovar" onClick={onClose}>
            <div className="bordaBranca" onClick={(e) => e.stopPropagation()}>
                <div className="infos">
                    <img src="/assets/images/lampada.png" alt="" />
                    <h1>Confirmar aprovação?</h1>
                    <p>Tem certeza que deseja aprovar <span>este cadastro?</span></p>

                    <div className="botoes">
                        <button onClick={onClose}>Cancelar</button>
                        <button id="botaoVerde">Aprovar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
