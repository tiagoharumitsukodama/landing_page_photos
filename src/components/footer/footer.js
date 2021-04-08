import React from 'react';
import './footer.css';
import iconInsta from './51-513162_viva-logo-social-media-icons-social-media-logos.png';

export default function Footer() {
    return (
        <footer>
            <div className="Logo">Fotos lindas</div>
            
            <div className="containers">
                <div className="container">
                    <h5>
                        Empresa
                    </h5>
                    <h6>Sobre</h6>
                    <h6>Trabalhe</h6>
                    <h6>Opinião</h6>
                </div>

                <div className="container">
                    <h5>
                        Comunidade
                    </h5>
                    <h6>Artistas</h6>
                    <h6>Desenvolvedores</h6>
                    <h6>Investidores</h6>
                    <h6>Vendedores</h6>
                </div>

                <div className="container">
                    <h5>
                        Links
                    </h5>
                    <h6>Suporte</h6>
                    <h6>Download</h6>
                    <h6>Contato</h6>
                </div>

                <div className="container">
                    <img src={iconInsta} alt="iconInsta"></img>
                </div>
            </div>

        </footer>
    )
}