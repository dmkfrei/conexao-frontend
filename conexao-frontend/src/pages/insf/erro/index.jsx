import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Erro() {
    const navigate = useNavigate();
    const [tipoUsuario, setTipoUsuario] = useState('');
    const token = localStorage.getItem('token');
    useEffect(() => {
        async function buscarTipo() {
            const resp = await axios.get(`http://localhost:5001/usuario/tipo?x-access-token=${token}`);
            setTipoUsuario(resp.data.tipo);
        }

        if (token) {
            buscarTipo();
        }
    }, [token]);

    function irParaInicio() {
        if (tipoUsuario == 'cliente') {
            navigate('/empresa/login');
        } else if (tipoUsuario == 'adm') {
            navigate('/');
        } else {
            navigate('/empresa/login');
        }
    }

    return (
        <div className="erro">
            <div className="conteudo">
                <h1>404</h1>
                <h2>Página não encontrada</h2>
                <p>A página que você está procurando não existe ou foi removida.</p>
                <button onClick={irParaInicio}>Voltar para o início</button>
            </div>
        </div>
    );
}
