import React from 'react';
import mapMarker from '../images/map-marker.svg'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


import '../styles/pages/Orphanages-map.css'

function OrphanagesMap(){
    return(
    <div id="page-map">
        <aside>
            <header>
                <img src={mapMarker} alt="Happy"/>
                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>
            <footer>
                <strong>
                    Rio Grande do Norte
                </strong>
                <span>Apodi</span>
            </footer>
        </aside>
        <Map
            center={[-5.658155,-37.798149]}
            zoom={15}
            style={{width: '100%', height: '100%'}}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            </Map>

        <Link to="" className= "create-orphanage">
            <FiPlus size={32} color="#fff" />
        </Link>
    </div>
    );
}
export default OrphanagesMap;