import React from 'react';
import './index.scss';

export default function Login() {
    return (
        <div className="secao-login">
            <div className="bordaBranca">
                <div className="esquerda">
                    <div className="mensagem">
                        <h1>Bem-vindo(a)!</h1>
                        <p>Encontre novos candidatos que atendam o que procura para seu negócio!</p>
                    </div>
                    <form className="form">
                        <h1>Nome</h1>
                        <input type="text" placeholder="Escreva aqui" />

                        <h1>Senha</h1>
                        <input type="password" placeholder="Mínimo 8 caracteres" />

                        <button>Fazer Login</button>
                    </form>
                </div>

                <div className="direita">
                    <img src="/assets/images/Art.svg" alt="" />
                </div>
            </div>
        </div>
    );
};
