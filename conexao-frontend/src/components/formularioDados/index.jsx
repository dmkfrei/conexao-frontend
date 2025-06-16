import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { IMaskInput } from 'react-imask';
import { jwtDecode } from 'jwt-decode';

export default function Formulario({ botaoTexto, botaoDestino }) {
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
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function CadastrarEmpresa() {
        try {
            let token = localStorage.getItem('token');
            const decoded = jwtDecode(token);
            let id = decoded.id;

            const url = 'http://localhost:5001/matriz';

            let obj = {
                id_login: id,
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

            let resp = await axios.post(url, obj, {
                headers: {
                    'x-access-token': token
                }
            });

            toast.success('Cadastro da empresa realizado com sucesso.');
            
            setNome('');
            setCelular('');
            setBairro('');
            setCep('');
            setCidade('');
            setEmail('');
            setCnpj('');
            setNumero('');
            setNome('');
            setInscricao('');
            setEstado('');
            setSenha('');
            setTelefone('');
            setEndereco('');

        } catch (error) {
            if (error.response && error.response.data) {
                let mensagemErro = error.response.data.erro;
                toast.error(mensagemErro);
            } else {
                toast.error('Erro inesperado, tente novamente.');
            }
        }
    }

    async function buscarCep(cepDigitado) {
        try {
            const cepLimpo = cepDigitado.replace(/\D/g, '');
            if (cepLimpo.length != 8) {
                return;
            }

            const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);

            if (response.data.erro) {
                toast.error('CEP não encontrado');
                return;
            }

            setBairro(response.data.bairro);
            setCidade(response.data.localidade);
            setEstado(response.data.uf);
            setEndereco(response.data.logradouro);
        } catch (error) {
            toast.error('Erro ao buscar CEP');
        }
    }

    return (
        <div className="formulario-dados">
            <div className="bordaBranca">
                <div className="infos">
                    <div className="card">
                        <img src="/assets/images/apartamento.svg" alt="" />
                        <h1>Identificação</h1>
                    </div>

                    <div className="campo">
                        <h1>Nome da Empresa</h1>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className="campo">
                        <h1>CNPJ</h1>
                        <IMaskInput mask='00.000.000/0000-00' type="text" value={cnpj} onChange={e => setCnpj(e.target.value)} />
                    </div>
                    <div className="campo">
                        <h1>Inscrição</h1>
                        <input type="text" value={inscricao} onChange={e => setInscricao(e.target.value)} />
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
                                if (value.replace(/\D/g, '').length == 8) {
                                    buscarCep(value);
                                }
                            }}
                        />
                    </div>

                    <div className="campo">
                        <h1>Endereço</h1>
                        <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} />
                    </div>

                    <div className="campo">
                        <h1>Número</h1>
                        <input type="text" value={numero} onChange={e => setNumero(e.target.value)} />
                    </div>

                    <div className="campo">
                        <h1>Bairro</h1>
                        <input type="text" value={bairro} onChange={e => setBairro(e.target.value)} />
                    </div>

                    <div className="campo">
                        <h1>Cidade</h1>
                        <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} />
                    </div>

                    <div className="campo">
                        <h1>Estado</h1>
                        <input type="text" value={estado} onChange={e => setEstado(e.target.value)} maxLength={2} />
                    </div>

                    <div className="card">
                        <img src="/assets/images/telefone.svg" alt="" />
                        <h1>Contato</h1>
                    </div>

                    <div className="campo">
                        <h1>Telefone</h1>
                        <IMaskInput mask='(00) 00000-0000' type="text" value={telefone} onChange={e => setTelefone(e.target.value)} maxLength={15} />
                    </div>

                    <div className="campo">
                        <h1>Celular</h1>
                        <IMaskInput mask='(00) 00000-0000' type="text" value={celular} onChange={e => setCelular(e.target.value)} maxLength={15} />
                    </div>

                    <div className="card">
                        <img src="/assets/images/cadeado.svg" alt="" />
                        <h1>Login</h1>
                    </div>

                    <div className="campo">
                        <h1>Email</h1>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="campo">
                        <h1>Senha</h1>
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="botao">
                <button onClick={CadastrarEmpresa}><Link to={botaoDestino}>{botaoTexto}</Link></button>
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