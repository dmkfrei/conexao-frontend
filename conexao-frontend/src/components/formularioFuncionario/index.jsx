import { useState } from 'react';
import './index.scss';
import { IMaskInput } from 'react-imask';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode'

export default function FormularioFuncionario() {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [id_empresa, setIdEmpresa] = useState(0);

    let token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    console.log(decoded);
    let id_login = decoded.id;

    async function BuscarId() {
        let url = 'http://localhost:5001/buscarEmpresaPeloLogin';
        let resp = await axios.post(url, { id_login });

        setIdEmpresa(resp.data.id_empresa);
    }

    async function CadastrarFuncionario() {
        try {
            let url = 'http://localhost:5001/resp';

            const obj = {
                id_empresa: id_empresa,
                nm_nome: nome,
                ds_cargo: cargo,
                ds_email: email,
                ds_telefone: telefone,
                tp_role: cargo
            }

            let resp = await axios.post(url, obj, {
                headers: {
                    'x-access-token': token
                }
            });

            toast.success('Cadastro do responsável realizado com sucesso.');
            setNome('');
            setCargo('');
            setEmail('');
            setTelefone('');

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
        <div className="formulario-funcionario">
            <div className="bordaBranca">
                <div className="infos">
                    <div className="card">
                        <img src="/assets/images/pessoa.svg" alt="" />
                        <h1>Informações do Profissional</h1>
                    </div>

                    <div className="campo">
                        <h1>Nome</h1>
                        <input type="text" placeholder='Escreva aqui' value={nome} onChange={e => setNome(e.target.value)} />
                    </div>

                    <div className="campo">
                        <h1>Cargo</h1>
                        <input type="text" placeholder='Escreva aqui' value={cargo} onChange={e => setCargo(e.target.value)} />
                    </div>

                    <div className="campo">
                        <h1>Email</h1>
                        <input type="text" placeholder='Escreva aqui' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="campo">
                        <h1>Telefone</h1>
                        <IMaskInput mask='(00) 00000-0000' type="text" placeholder='Escreva aqui' value={telefone} onChange={e => setTelefone(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className="botao">
                <button onClick={CadastrarFuncionario}>Salvar</button>
            </div>

            <Toaster
                toastOptions={{
                    style: {
                        font: '500 15px inter',
                    }
                }}
            />
        </div>
    )
}