import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { EmpresaProvider, useEmpresa } from "../routes/EmpresaContext.jsx"; 

function PrivateRouteInterno({ tipo }) {
    const token = localStorage.getItem('token');
    const { setTipoUsuario } = useEmpresa();
    const [tipoUsuario, setTipoUsuarioLocal] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function buscarTipo() {
            try {
                const resp = await axios.get(`http://localhost:5001/usuario/tipo?x-access-token=${token}`);
                setTipoUsuarioLocal(resp.data.tipo);
                setTipoUsuario(resp.data.tipo);
            } catch {
                setTipoUsuarioLocal(null);
            } finally {
                setCarregando(false);
            }
        }

        if (token) buscarTipo();
        else setCarregando(false);
    }, [token]);

    if (carregando) return null;

    const redirecionarPara = tipo == 'cliente' ? '/empresa/login' : '/';

    if (!token || tipoUsuario != tipo) {
        return <Navigate to={redirecionarPara} replace />;
    }

    return <Outlet />;
}

export default function PrivateRoute(props) {
    return (
        <EmpresaProvider>
            <PrivateRouteInterno {...props} />
        </EmpresaProvider>
    );
}
