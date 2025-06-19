import './index.scss';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function PopUpDeletar({ fecharPopUp, id_responsavel, atualizarLista }) {
    let token = localStorage.getItem('token');

    async function DeletarResp() {
        try {
            const url = `http://localhost:5001/resp/${id_responsavel}`;

            let resp = await axios.delete(url, {
                headers: {
                    'x-access-token': token
                }
            });
            toast.success('O funcionário foi deletado com sucesso.');
            atualizarLista();
        } catch (error) {
            if (error.response && error.response.data) {
                let mensagemErro = error.response.data.erro;
                toast.error(mensagemErro);
            } else {
                toast.error('Erro inesperado, tente novamente.');
            }
        }

    }
    return (
        <div className="pop-up-deletar" onClick={fecharPopUp}>
            <div className="borda-branca" onClick={(e) => e.stopPropagation()}>
                <div className="infos">
                    <img src="/assets/images/lixeira.svg" alt="" />
                    <h1>Deletar cadastro?</h1>
                    <p>Tem certeza que deseja deletar <span>este cadastro?</span></p>

                    <div className="botoes">
                        <button onClick={fecharPopUp}>Cancelar</button>
                        <button id="botaoVermelho" onClick={DeletarResp}>Deletar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
