import './Map.css';
import React from 'react';
import searchIcon from '../../images/map_search-icon.svg';
import { geoCentroid } from 'd3-geo';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from 'react-simple-maps';

import allStates from '../../config/allstates.json';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};
const defaultColor = "#DDD";
const selectedColor = "#CC8528";
const getStateColor=(geo, vaccine, quarantine, mask, test, distancing, spaces)=>{

    if(!vaccine && !quarantine && !mask && !test && !distancing && !spaces){
        return defaultColor;
    }

    let filteredStates = [...allStates];

    if (vaccine){
        filteredStates = filteredStates.filter(state=>(state.vaccine === vaccine))
    }
    if (quarantine){
        filteredStates = filteredStates.filter(state=>(state.quarantine === quarantine))
    }
    if (mask){
        filteredStates = filteredStates.filter(state=>(state.mask === mask))
    }
    if (test){
        filteredStates = filteredStates.filter(state=>(state.test === test))
    }
    if (distancing){
        filteredStates = filteredStates.filter(state=>(state.distancing === distancing))
    }
    if (spaces){
        filteredStates = filteredStates.filter(state=>(state.spaces === spaces))
    }

    return filteredStates.find(state=> state.val ===geo.id)? selectedColor: defaultColor;
}

function Map () {
    const [vaccineFilter, setVaccineFilter ] = React.useState(false);
    const [quarantineFilter, setQuarantineFilter ] = React.useState(false);
    const [maskFilter, setMaskFilter ] = React.useState(false);
    const [testFilter, setTestFilter ] = React.useState(false);
    const [distancingFilter, setDistancingFilter ] = React.useState(false);
    const [spacesFilter, setSpacesFilter ] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <section className="map">
            <p className="map__title">Check the boxes to tell us what restrictions you are comfortable with, and we'll tell you what states are available to you. Or use the search so that we can show you information about the restrictions in your chosen state.</p>
            <div className="map__container">
                <div className="map__left-column">
                    <div className="map__search">
                        <input className="map__search-input" type="search" id="state-search" name="state-search" aria-label="Search a state" placeholder="Search" />
                        <img className="map__search-icon" src={searchIcon} alt="search"></img>
                    </div>
                    <label className="map__checkbox">proof of vaccination required
                        <input className="map__input" type="checkbox" id="vaccine" name="vaccine" 
                            onClick={(event)=>{
                                setVaccineFilter(event.target.checked);
                                setIsChecked(true);
                            }} />
                        <span className="map__checkmark"></span>   
                    </label>
                    <label className="map__checkbox">quarantine required
                        <input type="checkbox" id="quarantine" name="quarantine"
                            onClick={(event)=>{
                                setQuarantineFilter(event.target.checked);
                                setIsChecked(true);
                            }} />
                        <span className="map__checkmark"></span>   
                    </label>
                    <label className="map__checkbox">mask-wearing enforced
                        <input type="checkbox" id="mask" name="mask"
                        onClick={(event)=>{
                            setMaskFilter(event.target.checked);
                            setIsChecked(true);
                        }} />
                        <span className="map__checkmark"></span>   
                    </label>
                    <label className="map__checkbox">testing required
                        <input type="checkbox" id="test" name="test"
                        onClick={(event)=>{
                            setTestFilter(event.target.checked);
                            setIsChecked(true);
                        }} />
                        <span className="map__checkmark"></span>   
                    </label>
                    <label className="map__checkbox">social distancing required
                        <input type="checkbox" id="distancing" name="distancing"
                        onClick={(event)=>{
                            setDistancingFilter(event.target.checked);
                            setIsChecked(true);
                        }} />
                        <span className="map__checkmark"></span>   
                    </label>
                    <label className="map__checkbox">public spaces open
                        <input type="checkbox" id="spaces" name="spaces"
                        onClick={(event)=>{
                            setSpacesFilter(event.target.checked);
                            setIsChecked(true);
                        }} />
                        <span className="map__checkmark"></span>   
                    </label>
                </div>
                <ComposableMap className="map__chart" projection="geoAlbersUsa">
                    <Geographies geography={geoUrl}>
                        {({ geographies }) => (
                        <>
                            {geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                stroke="#FFF"
                                outline="none"
                                geography={geo}
                                fill={getStateColor(geo, vaccineFilter, quarantineFilter, maskFilter, testFilter, distancingFilter, spacesFilter)}
                            />
                            ))}
                            {geographies.map(geo => {
                            const centroid = geoCentroid(geo);
                            const cur = allStates.find(s => s.val === geo.id);
                            return (
                                <g key={geo.rsmKey + "-name"}>
                                {cur &&
                                    centroid[0] > -160 &&
                                    centroid[0] < -67 &&
                                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                                    <Marker coordinates={centroid}>
                                        <text y="2" fontSize={14} fontFamily='Roboto' textAnchor="middle" >
                                        {cur.id}
                                        </text>
                                    </Marker>
                                    ) : (
                                    <Annotation
                                        subject={centroid}
                                        dx={offsets[cur.id][0]}
                                        dy={offsets[cur.id][1]}
                                    >
                                        <text x={4} fontSize={14} fontFamily='Roboto' alignmentBaseline="middle">
                                        {cur.id}
                                        </text>
                                    </Annotation>
                                    ))}
                                </g>
                            );
                            })}
                        </>
                        )}
                    </Geographies>
                </ComposableMap>
            </div>
            <button className={`map__button ${isChecked ? "map__button_active" : ""}`} type="submit" disabled={!isChecked} >check states</button>
        </section>
    )
}

export default Map;
