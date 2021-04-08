import React from 'react';
import './header.css';

export default function Header() {

    return (
        <header>
            <div className="options">
                <p className='options1'>
                    Procuro uma foto
                </p>
                <p className="options2">
                    Adiquira Fotos lindas para o seu site.
                </p>
                <button><a href='/collection'>VER COLEÇÃO</a></button>
            </div>
            <div className="albuns">
                <div className="album" id="album1">
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <span>Que tal?</span>
                </div>
                <div className="album" id="album2">
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <span>Que tal?</span>
                </div>
                <div className="album" id="album3">
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <span>Que tal?</span>
                </div>
                <div className="album" id="album4">
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <span>Que tal?</span>
                </div>
                <div className="album" id="album5">
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <span>Que tal?</span>
                </div>
                <div className="album" id="album6">
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <span>Que tal?</span>
                </div>
            </div>
        </header>
    )
}
