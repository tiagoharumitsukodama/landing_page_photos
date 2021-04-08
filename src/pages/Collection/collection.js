import React from 'react';
import './Collection.css';

export default function Collection() {
    return (
        <div className='AllCollections'>

            <div className="Collection">
                <h3>Autor</h3>
                <div className="album" id="album1">
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                </div>
            </div>

            <div className="Collection">
                <h3>Autor</h3>
                <div className="album" id="album1">
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                </div>
            </div>

            <div className="Collection">
                <h3>Autor</h3>
                <div className="album" id="album1">
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                    <img src={"https://picsum.photos/200/" + (parseInt(Math.random()*300))} alt="album"></img>
                </div>
            </div>
        </div>
    );
}