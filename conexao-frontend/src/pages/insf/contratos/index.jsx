import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import MenuLateral from '../../../components/menuLateral';
import MenuEmpresa from '../../../components/menuEmpresa';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function CardAcordo({ id }) {
    return (
        <div className="card-infos">
            <Link to={`/contratoEmpresa/${id}`} id="id">#{id}</Link>
            <img src="/assets/images/olho.svg" alt="Ver" />
            <img src="/assets/images/pupila.svg" alt="Pupila" id="pupila" />
        </div>
    );
}

export default function Contratos() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        if (!token) {
            navigate('/');
        } else {
            buscarEmpresas();
        }
    }, []);

    async function buscarEmpresas() {
        try {
            const url = `http://localhost:5001/buscarEmpresa?x-access-token=${token}`;
            const resp = await axios.get(url);
            setEmpresas(resp.data);
        } catch (err) {
            toast.error('Erro ao buscar empresas:', err);
        }
    }

    return (
        <div className="contratos">
            <MenuLateral />
            <MenuEmpresa />
            <Cabecalho>
                <div className="content">
                    <div className="texto">
                        <h1>Contratos Pendentes</h1>
                    </div>

                    <div className="bordaBranca">
                        {empresas.length === 0 ? (
                            <CardAcordo id="-" />
                        ) : (
                            empresas.map((item, index) => (
                                <CardAcordo key={index} id={item.id_empresa} />
                            ))
                        )}
                    </div>
                </div>
            </Cabecalho>
        </div>
    );
}
