import './index.scss';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function PopUpReprovar({ fecharPopUp }) {
    const { id } = useParams();
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    async function ReprovarEmpresa() {
        try {
            const url = `http://localhost:5001/alterarSituacao/${id}?x-access-token=${token}`;
            let obj = { ds_situacao: 'Reprovada' }

            let resp = await axios.put(url, obj);

            toast.success('A empresa foi reprovada com sucesso.')
            fecharPopUp();
            navigate('/validacoes');
        } catch (error) {
            if (error.response) {
                toast.error(error);
            }
        }
    }

    return (
        <div className="pop-up-reprovar" onClick={fecharPopUp}>
            <div className="bordaBranca" onClick={(e) => e.stopPropagation()}>
                <div className="infos">
                    <img src="/assets/images/lampada.png" alt="" />
                    <h1>Confirmar reprovação?</h1>
                    <p>Tem certeza que deseja reprovar <span>este cadastro?</span></p>

                    <div className="botoes">
                        <button onClick={fecharPopUp}>Cancelar</button>
                        <button id="botaoVermelho" onClick={ReprovarEmpresa}>Reprovar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
