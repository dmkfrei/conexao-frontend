import { createContext, useState, useContext } from "react";

const EmpresaContext = createContext();

export function EmpresaProvider({ children }) {
    const [foto, setFoto] = useState(null);
    const [nomeEmpresa, setNomeEmpresa] = useState(null);
    const [situacao, setSituacao] = useState(null);
    const [tipoUsuario, setTipoUsuario] = useState(null);

    return (
        <EmpresaContext.Provider value={{
            foto, setFoto,
            nomeEmpresa, setNomeEmpresa,
            situacao, setSituacao,
            tipoUsuario, setTipoUsuario
        }}>
            {children}
        </EmpresaContext.Provider>
    );
}

export function useEmpresa() {
    return useContext(EmpresaContext);
}
