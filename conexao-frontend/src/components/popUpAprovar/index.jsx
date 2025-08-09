import './index.scss';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function PopUpAprovar({ fecharPopUp }) {
    const { id } = useParams();
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    async function AprovarEmpresa() {
        try {
            const url = `http://localhost:5001/alterarSituacao/${id}?x-access-token=${token}`;
            let obj = { ds_situacao: 'Aprovada' }

            let resp = await axios.put(url, obj);

            toast.success('A empresa foi aprovada com sucesso.')
            fecharPopUp();
            navigate('/validacoes');
        } catch (error) {
            if (error.response) {
                toast.error(error);
            }
        }
    }
    return (
        <div className="pop-up-aprovar" onClick={fecharPopUp}>
            <div className="bordaBranca" onClick={(e) => e.stopPropagation()}>
                <div className="infos">
                    <img src="/assets/images/lampada.png" alt="" />
                    <h1>Confirmar aprovação?</h1>
                    <p>Tem certeza que deseja aprovar <span>este cadastro?</span></p>

                    <div className="botoes">
                        <button onClick={fecharPopUp}>Cancelar</button>
                        <button id="botaoVerde" onClick={AprovarEmpresa}>Aprovar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
