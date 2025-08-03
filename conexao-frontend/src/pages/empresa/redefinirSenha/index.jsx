import './index.scss';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MudarSenha() {
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const id_login = location.state.id_login;

    async function MudarSenha() {
        if (!id_login) {
            toast.error('ID do login não encontrado. Refazer o processo.');
            return;
        }
        if (senha.length < 6) {
            toast.error('A senha deve ter no mínimo 8 caracteres.');
            return;
        }
        if (senha != confirmarSenha) {
            toast.error('As senhas não conferem.');
            return;
        }

        try {
            const url = `http://localhost:5001/changePassword/${id_login}`;

            await axios.put(url, {
                nova_senha: senha,
                confirmar_senha: confirmarSenha
            });

            toast.success('Senha atualizada com sucesso.');
            navigate('/empresa/login'); 
        } catch (err) {
            toast.error(err.response.data.erro || 'Erro ao atualizar senha.');
        }
    }

    return (
        <div className="mudar-senha">
            <div className="bordaBranca">
                <div className="esquerda">
                    <img src="/assets/images/Rectangle 4464.svg" alt="" />
                </div>

                <div className="direita">
                    <div className="mensagem">
                        <h1>Redefinir Senha</h1>
                        <p>Digite e confirme sua nova senha. Tente dificultar o máximo adicionando caracteres especiais, números, etc.</p>
                    </div>

                    <div className="form">
                        <div className="inputSenha">
                            <h1>Senha</h1>
                            <input
                                type="password"
                                placeholder="Mínimo 8 caracteres..."
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                            />
                        </div>

                        <div className="inputConfirmar">
                            <h1>Confirmar Senha</h1>
                            <input
                                type="password"
                                placeholder="Confirmar a senha..."
                                value={confirmarSenha}
                                onChange={e => setConfirmarSenha(e.target.value)}
                            />
                        </div>

                        <button onClick={MudarSenha}>Redefinir</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
