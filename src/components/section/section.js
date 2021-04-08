import React from 'react';
import './section.css';

export default function Section() {

    return (
        <section>
            <h2>Minhas opções</h2>

            <div className="containers">
                <div>
                    <h4>Gerencie sua conta</h4>
                    <p>Edite sua conta, mude sua senha e atualize seus dados
                        de pagamento.
                    </p>
                    <span>
                        Gerenciamento de conta
                    </span>
                </div>

                <div>
                    <h4>Venda sua foto</h4>
                    <p>Compartilhe a sua experiência visual com todos e ainda 
                        ganhe alguns trocados.
                    </p>
                    <span>
                        Vender foto
                    </span>
                </div>

                <div>
                    <h4>Alugue sua foto</h4>
                    <p>Empreste sua foto para alguma agência de publicidade.
                        Faremos toda a transação de forma segura e fácil.
                    </p>
                    <span>
                        Alugar foto
                    </span>
                </div>
            </div>

        </section>
    )
}