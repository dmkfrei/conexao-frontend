import { useState, useEffect } from 'react';
import './index.scss';
import { IMaskInput } from 'react-imask';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function FormularioFuncionario({ modo }) {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const { id } = useParams();

    useEffect(() => {
        if (modo == 'editar') {
            buscarFuncionario();
        }
    }, [modo]);

    async function buscarFuncionario() {
        try {
            const url = `http://localhost:5001/resp/${id}?x-access-token=${token}`;
            const resp = await axios.get(url);
            const dados = resp.data.infos[0];

            setNome(dados.nm_nome);
            setCargo(dados.ds_cargo);
            setEmail(dados.ds_email);
            setRole(dados.tp_role);
            setTelefone(dados.ds_telefone);
        } catch (error) {
            toast.error('Erro ao buscar dados do funcionário.');
        }
    }

    async function salvarFuncionario() {
        if (telefone.replace(/\D/g, '').length < 11) {
            toast.error(' O telefone está incompleto.');
            return;
        }

        try {
            const obj = {
                nm_nome: nome,
                ds_cargo: cargo,
                ds_email: email,
                ds_telefone: telefone,
                tp_role: role
            };

            if (modo == 'editar') {
                const url = `http://localhost:5001/resp/${id}?x-access-token=${token}`;
                await axios.put(url, obj);

                toast.success('Funcionário atualizado com sucesso!');
            } else {
                const url = `http://localhost:5001/resp?x-access-token=${token}`;
                await axios.post(url, obj);

                toast.success('Funcionário cadastrado com sucesso!');

                setNome('');
                setCargo('');
                setEmail('');
                setTelefone('');
                setRole('');
            }
        } catch (error) {
            const msg = error.response?.data?.erro || 'Erro inesperado.';
            toast.error(msg);
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
                        <h1>Role</h1>
                        <input type="text" placeholder='Escreva aqui' value={role} onChange={e => setRole(e.target.value)} />
                    </div>

                    <div className="campo">
                        <h1>Telefone</h1>
                        <IMaskInput mask='(00) 00000-0000' type="text" value={telefone} onChange={e => setTelefone(e.target.value)} placeholder='Escreva aqui' />
                    </div>
                </div>
            </div>

            <div className="botao">
                <button onClick={salvarFuncionario}>
                    {modo == 'editar' ? 'Salvar' : 'Cadastrar'}
                </button>
            </div>
        </div>
    )
}