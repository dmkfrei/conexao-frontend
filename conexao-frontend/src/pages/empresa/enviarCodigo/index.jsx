import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

export default function EnviarCodigo() {
    const [email, setEmail] = useState('');
    const [codigo, setCodigo] = useState('');
    const [codigoEnviado, setCodigoEnviado] = useState(false);
    const navigate = useNavigate();

    async function enviarCodigo() {
        toast.remove();
        try {
            if (!email) {
                toast.error('Digite um e-mail válido.');
                return;
            }

            const resp = await axios.post('http://localhost:5001/enviarCodigo', {
                ds_email: email
            });

            const codigoGerado = resp.data.codigo;

            await emailjs.send(
                'service_fsb4zzv',
                'template_ybb19ni',
                {
                    email: email,
                    passcode: codigoGerado,
                    time: '15 minutos'
                },
                'nHuzb4QV0fcjY9pBf'
            );

            toast.success('Código enviado para o e-mail!');
            setCodigoEnviado(true);

        } catch (err) {
            toast.error(err.response?.data?.erro || 'Erro ao enviar código.');
        }
    }

    async function verificarCodigo() {
        try {
            if (!codigo) {
                toast.error('Digite o código.');
                return;
            }

            const resp = await axios.post('http://localhost:5001/verificarCodigo', {
                email: email,
                codigo: codigo
            });

            const { id_login } = resp.data;
            
            toast.success('Código verificado!');
            navigate('/empresa/redefinirSenha', { state: { id_login } });

        } catch (err) {
            toast.error(err.response?.data?.erro || 'Código inválido ou expirado.');
        }
    }


    return (
        <div className="enviar-codigo">
            <div className="bordaBranca">
                <div className="esquerda">
                    <img src="/assets/images/Rectangle 4464.svg" alt="" />
                </div>

                <div className="direita">
                    <div className="mensagem">
                        <h1>Esqueceu a senha?</h1>
                        <p>Digite seu e-mail para receber o código de verificação</p>
                    </div>

                    <div className="form">
                        {!codigoEnviado && (
                            <div className="inputCodigo">
                                <h1>Email</h1>
                                <input
                                    type="email"
                                    placeholder="exemplo@email.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <button onClick={enviarCodigo}>
                                    Enviar código
                                </button>
                            </div>
                        )}

                        {codigoEnviado && (
                            <>
                                <div className="inputCodigo">
                                    <h1>Código</h1>
                                    <input
                                        type="text"
                                        placeholder="Digite o código"
                                        maxLength={6}
                                        value={codigo}
                                        onChange={e => setCodigo(e.target.value)}
                                    />
                                </div>
                                <button onClick={verificarCodigo}>
                                    Verificar
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
