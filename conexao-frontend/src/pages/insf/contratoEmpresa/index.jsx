import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ContratoEmpresa() {
    const navigate = useNavigate();
    const { id } = useParams(); 
    const token = localStorage.getItem('token');
    const [imagemContrato, setImagemContrato] = useState(null);

    useEffect(() => {
        if (!token || token == null) {
            navigate('/empresa/login');
        } else {
            buscarAcordo();
        }
    }, []);

    async function buscarAcordo() {
        try {
            const url = `http://localhost:5001/buscarAcordo/${id}?x-access-token=${token}`;
            const resp = await axios.get(url);
            setImagemContrato(resp.data.img); 

        } catch (err) {
            toast.error('Erro ao buscar acordo:');
        }
    }

    return (
        <div className="contrato-empresa">
            <MenuLateral />
            <MenuEmpresa />

            <Cabecalho>
                <div className="content">
                    <div className="text">
                        <h1>Contrato</h1>
                    </div>

                    <div className="principal">
                        <div className="esquerda">
                            <div className="bordaBranca">
                                {imagemContrato ? (
                                    <img src={`http://localhost:5001/imgs/${imagemContrato}`} />

                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Cabecalho>
        </div>
    );
}
