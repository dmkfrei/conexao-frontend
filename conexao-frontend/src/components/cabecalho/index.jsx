import './index.scss';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { EmpresaProvider, useEmpresa } from '../../routes/EmpresaContext.jsx';

export default function Cabecalho({ children }) {
    const { foto, setFoto, nomeEmpresa, setNomeEmpresa, tipoUsuario } = useEmpresa();

    const token = localStorage.getItem('token');

    async function buscarInfosCabecalho() {
        try {
            const fotoResp = await axios.get(`http://localhost:5001/buscarFotoMatriz?x-access-token=${token}`);
            const nomeFoto = fotoResp.data.foto;

            if (!fotoResp || !nomeFoto) return;

            const urlImagem = `http://localhost:5001/imgs/${nomeFoto}`;
            try {
                await axios.head(urlImagem);
                setFoto(nomeFoto);
            } catch {
                setFoto(null);
            }
        } catch {
            setFoto(null);
        }
    }

    async function buscarLogin() {
        try {
            const resp = await axios.get(`http://localhost:5001/login?x-access-token=${token}`);
            const novoNome = resp.data[0]?.ds_usuario;
            setNomeEmpresa(novoNome);
        } catch {
            toast.error("Erro ao buscar nome da empresa.");
        }
    }

    useEffect(() => {
        if (tipoUsuario == 'cliente') {
            if (!foto) buscarInfosCabecalho();
            if (!nomeEmpresa) buscarLogin();
        }
    }, [tipoUsuario]);

    const nomeExibido = nomeEmpresa || '';
    const fotoExibida = foto
        ? `http://localhost:5001/imgs/${foto}`
        : '/assets/images/cinza-claro.jpg';

    return (
        <div className="cabecalho">
            {tipoUsuario == 'cliente' && (
                <>
                    <div className="cima">
                        <div className="infos">
                            <h1>{nomeExibido}</h1>
                            <div className="cabecalho-img">
                                <img src={fotoExibida} alt="Foto Empresa" />
                            </div>
                        </div>
                    </div>
                    {children}
                </>
            )}

            {tipoUsuario == 'adm' && (
                <>
                    <div className="cima">
                        <div className="infos">
                            <h1>INSF</h1>
                            <div className="cabecalho-img">
                                <img src="/assets/images/logo-frei-cinza.png" alt="Logo Frei" />
                            </div>
                        </div>
                    </div>
                    {children}
                </>
            )}
        </div>
    );
}
