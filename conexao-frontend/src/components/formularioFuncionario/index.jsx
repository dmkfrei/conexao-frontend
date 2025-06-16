import './index.scss';
import { IMaskInput } from 'react-imask';

export default function FormularioFuncionario() {
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
                        <input type="text" placeholder='Escreva aqui' />
                    </div>

                    <div className="campo">
                        <h1>Cargo</h1>
                        <input type="text" placeholder='Escreva aqui' />
                    </div>

                    <div className="campo">
                        <h1>Email</h1>
                        <input type="text" placeholder='Escreva aqui' />
                    </div>

                    <div className="campo">
                        <h1>Telefone</h1>
                        <IMaskInput mask='(00) 00000-0000' type="text" placeholder='Escreva aqui' />
                    </div>
                </div>
            </div>

            <div className="botao">
                <button>Salvar</button>
            </div>
        </div>
    )
}