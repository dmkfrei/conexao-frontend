import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import MenuLinks from '../../../components/menuLinks';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import SignaturePad from 'react-signature-canvas';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function Acordo() {
    const navigate = useNavigate();
    const assinaturaRef = useRef();
    let token = localStorage.getItem('token');

    async function BaixarAcordo() {
        window.open(`http://localhost:5001/baixarAcordo?x-access-token=${token}`, '_blank');
    }

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate('/empresa/login');
        }
    }, []);

    async function enviarAssinatura() {
        try {
            if (assinaturaRef.current.isEmpty()) {
                toast.error('Por favor, assine antes de enviar.');
                return;
            }

            const base64Image = assinaturaRef.current.toDataURL('image/png');

            const blob = await (await fetch(base64Image)).blob();
            const formData = new FormData();
            formData.append('img', blob, 'assinatura.png');

            await axios.put(`http://localhost:5001/enviarAcordo?x-access-token=${token}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success('Acordo enviado com sucesso!');
            assinaturaRef.current.clear();

        } catch (error) {
            toast.error('Erro ao enviar o acordo.');
        }
    }

    return (
        <div className="acordo">
            <MenuLateral />
            <MenuEmpresa />

            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <h1>Acordo</h1>
                    </div>

                    <div className="principal">
                        <div className="esquerda">
                            <div className="bordaBranca">
                                <SignaturePad
                                    ref={assinaturaRef}
                                    canvasProps={{
                                        className: 'assinatura-canvas'
                                    }}
                                />
                            </div>

                            <div className="botoes">
                                <button onClick={BaixarAcordo}>Baixar</button>
                                <button onClick={enviarAssinatura}>Enviar</button>
                            </div>
                        </div>

                        <MenuLinks />
                    </div>
                </div>
            </Cabecalho>
        </div>
    );
}
