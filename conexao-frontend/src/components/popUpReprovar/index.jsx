import './index.scss';

export default function PopUpReprovar({ onClose }) {
    return (
        <div className="pop-up-reprovar" onClick={onClose}>
            <div className="bordaBranca" onClick={(e) => e.stopPropagation()}>
                <div className="infos">
                    <img src="/assets/images/lampada.png" alt="" />
                    <h1>Confirmar reprovação?</h1>
                    <p>Tem certeza que deseja reprovar <span>este cadastro?</span></p>

                    <div className="botoes">
                        <button onClick={onClose}>Cancelar</button>
                        <button id="botaoVermelho">Reprovar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
