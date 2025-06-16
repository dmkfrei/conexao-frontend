import './index.scss';

export default function PopUpDeletar({ onClose }) {
    return (
        <div className="pop-up-deletar" onClick={onClose}>
            <div className="borda-branca" onClick={(e) => e.stopPropagation()}>
                <div className="infos">
                    <img src="/assets/images/lixeira.svg" alt="" />
                    <h1>Deletar cadastro?</h1>
                    <p>Tem certeza que deseja deletar <span>este cadastro?</span></p>

                    <div className="botoes">
                        <button onClick={onClose}>Cancelar</button>
                        <button id="botaoVermelho">Deletar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
