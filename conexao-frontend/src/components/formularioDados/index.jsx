import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { IMaskInput } from 'react-imask';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Formulario({ tipo, botaoTexto, botaoDestino, buscar }) {
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [inscricao, setInscricao] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');
    const [celular, setCelular] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    let token = localStorage.getItem('token');

    function criarObjetoEmpresa() {
        return {
            ds_razao_social: nome,
            ds_cnpj: cnpj,
            ds_inscricao: inscricao,
            ds_endereco: endereco,
            ds_numero: numero,
            ds_bairro: bairro,
            ds_cep: cep,
            ds_cidade: cidade,
            ds_estado: estado,
            ds_telefone: telefone,
            ds_celular: celular
        };
    }

    async function cadastrarMatriz() {
        const url = `http://localhost:5001/matriz?x-access-token=${token}`;
        return await axios.post(url, criarObjetoEmpresa());
    }

    async function cadastrarFilial() {
        const url = `http://localhost:5001/filial?x-access-token=${token}`;
        return await axios.post(url, criarObjetoEmpresa());
    }

    async function EditarMatriz() {
        const url = `http://localhost:5001/matriz/${id}?x-access-token=${token}`;
        return await axios.put(url, criarObjetoEmpresa());
    }

    async function EditarFilial() {
        const url = `http://localhost:5001/filial/${id}?x-access-token=${token}`;
        return await axios.put(url, criarObjetoEmpresa());
    }

    async function buscarMatriz() {
        const url = `http://localhost:5001/buscarEmpresaPorId/${id}?x-access-token=${token}`;
        const resp = await axios.get(url);
        preencherCampos(resp.data[0]);
    }

    async function buscarFilial() {
        const url = `http://localhost:5001/filial?id_empresa=${id}&x-access-token=${token}`;
        const resp = await axios.get(url);
        preencherCampos(resp.data.dados[0]);
    }

    async function buscarFilialPorId() {
        const url = `http://localhost:5001/buscarFilialPorId/${id}?x-access-token=${token}`;
        const resp = await axios.get(url);
        preencherCampos(resp.data[0]);
    }


    function preencherCampos(empresa) {
        if (!empresa) return;
        setNome(empresa.ds_razao_social);
        setCnpj(empresa.ds_cnpj);
        setInscricao(empresa.ds_inscricao);
        setCep(empresa.ds_cep);
        setEndereco(empresa.ds_endereco);
        setNumero(empresa.ds_numero);
        setBairro(empresa.ds_bairro);
        setCidade(empresa.ds_cidade);
        setEstado(empresa.ds_estado);
        setTelefone(empresa.ds_telefone);
        setCelular(empresa.ds_celular);
    }

    useEffect(() => {
        if (token == null) return null;

        if (buscar) {
            if (tipo == 'editar-filial') {
                buscarFilialPorId();
            } else if (tipo == 'editar-matriz' || tipo == 'visualizar') {
                buscarMatriz();
            }
        }
    }, [buscar, tipo]);

    async function cadastrar() {
        try {
            let resp;

            if (tipo == 'matriz') {
                resp = await cadastrarMatriz();
                toast.success('Matriz cadastrada com sucesso.');
                navigate('/empresa/gerenciarFuncionarios');
            } else if (tipo == 'filial') {
                resp = await cadastrarFilial();
                toast.success('Filial cadastrada com sucesso.');
            } else if (tipo == 'editar-matriz') {
                resp = await EditarMatriz();
                toast.success('Matriz editada com sucesso.');
            } else if (tipo == 'editar-filial') {
                resp = await EditarFilial();
                toast.success('Filial editada com sucesso.');
            } else {
                toast.error('Tipo inválido.');
                return;
            }
            
            setNome('');
            setCelular('');
            setBairro('');
            setCep('');
            setCidade('');
            setCnpj('');
            setNumero('');
            setInscricao('');
            setEstado('');
            setTelefone('');
            setEndereco('');
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.erro);
            } else {
                toast.error('Erro inesperado, tente novamente.');
            }
        }
    }

    async function buscarCep(cepDigitado) {
        try {
            const cepLimpo = cepDigitado.replace(/\D/g, '');
            if (cepLimpo.length != 8) return;

            const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            if (response.data.erro) {
                toast.error('CEP não encontrado');
                return;
            }

            setBairro(response.data.bairro);
            setCidade(response.data.localidade);
            setEstado(response.data.uf);
            setEndereco(response.data.logradouro);
        } catch {
            toast.error('Erro ao buscar CEP');
        }
    }

    return (
        <div className="formulario-dados">
            <div className="bordaBranca">
                <div className="infos">
                    <div className="card">
                        <img src="/assets/images/apartamento.svg" alt="" />
                        <h1>{tipo.includes('matriz') ? 'Cadastro da Matriz' : 'Cadastro da Filial'}</h1>
                    </div>

                    <div className="campo">
                        <h1>Nome da Empresa</h1>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} disabled={tipo == 'visualizar'} minLength={2} />
                    </div>
                    <div className="campo">
                        <h1>CNPJ</h1>
                        <IMaskInput mask='00.000.000/0000-00' type="text" value={cnpj} onChange={e => setCnpj(e.target.value)} disabled={tipo == 'visualizar'}/>
                    </div>
                    <div className="campo">
                        <h1>Inscrição</h1>
                        <input type="text" value={inscricao} onChange={e => setInscricao(e.target.value)} disabled={tipo == 'visualizar'} />
                    </div>

                    <div className="card">
                        <img src="/assets/images/localizacao.svg" alt="" />
                        <h1>Localização</h1>
                    </div>

                    <div className="campo">
                        <h1>CEP</h1>
                        <IMaskInput
                            mask="00000-000"
                            value={cep}
                            onAccept={(value) => {
                                setCep(value);
                                if (value.replace(/\D/g, '').length === 8) {
                                    buscarCep(value);
                                }
                            }}
                            disabled={tipo == 'visualizar'}
                        />
                    </div>
                    <div className="campo">
                        <h1>Número</h1>
                        <input type="text" value={numero} onChange={e => setNumero(e.target.value)} disabled={tipo == 'visualizar'} />
                    </div>

                    <div className="campo">
                        <h1>Endereço</h1>
                        <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} disabled={true} />
                    </div>

                    <div className="campo">
                        <h1>Bairro</h1>
                        <input type="text" value={bairro} onChange={e => setBairro(e.target.value)} disabled={true} />
                    </div>

                    <div className="campo">
                        <h1>Cidade</h1>
                        <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} disabled={true} />
                    </div>

                    <div className="campo">
                        <h1>Estado</h1>
                        <input type="text" value={estado} onChange={e => setEstado(e.target.value)} maxLength={2} disabled={true} />
                    </div>

                    <div className="card">
                        <img src="/assets/images/telefone.svg" alt="" />
                        <h1>Contato</h1>
                    </div>

                    <div className="campo">
                        <h1>Telefone</h1>
                        <IMaskInput mask='(00) 00000-0000' type="text" value={telefone} onChange={e => setTelefone(e.target.value)} maxLength={15} disabled={tipo == 'visualizar'} minLength={14} />
                    </div>

                    <div className="campo">
                        <h1>Celular</h1>
                        <IMaskInput mask='(00) 00000-0000' type="text" value={celular} onChange={e => setCelular(e.target.value)} maxLength={15} disabled={tipo == 'visualizar'} minLength={14} />
                    </div>
                </div>
            </div>

            {tipo != 'visualizar' && (
                <div className="botao">
                    <button onClick={cadastrar}>
                        <Link to={botaoDestino}>{botaoTexto}</Link>
                    </button>
                </div>
            )}

            {tipo == 'visualizar' && (
                <div className="botao">
                    <Link to={botaoDestino}>
                        <button>{botaoTexto}</button>
                    </Link>
                </div>
            )}
        </div>
    );
}
