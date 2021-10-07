import './Map.css';
import React from 'react';
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

    return (
        <section className="map">
            <div className="map__filters">
                <div className="map__checkbox">
                    <input type="checkbox" id="vaccine" name="vaccine" 
                    onClick={(event)=>{
                        setVaccineFilter(event.target.checked);
                    }} />
                    <label for="vaccine">proof of vaccination required</label>
                </div>
                <div className="map__checkbox">
                    <input type="checkbox" id="quarantine" name="quarantine"
                    onClick={(event)=>{
                        setQuarantineFilter(event.target.checked);
                    }} />
                    <label for="quarantine">quarantine required</label>
                </div>
                <div className="map__checkbox">
                    <input type="checkbox" id="mask" name="mask"
                    onClick={(event)=>{
                        setMaskFilter(event.target.checked);
                    }} />
                    <label for="mask">mask-wearing enforced</label>
                </div>
                <div className="map__checkbox">
                    <input type="checkbox" id="test" name="test"
                    onClick={(event)=>{
                        setTestFilter(event.target.checked);
                    }} />
                    <label for="test">testing required</label>
                </div>
                <div className="map__checkbox">
                    <input type="checkbox" id="distancing" name="distancing"
                    onClick={(event)=>{
                        setDistancingFilter(event.target.checked);
                    }} />
                    <label for="distancing">social distancing required</label>
                </div>
                <div className="map__checkbox">
                    <input type="checkbox" id="spaces" name="spaces"
                    onClick={(event)=>{
                        setSpacesFilter(event.target.checked);
                    }} />
                    <label for="spaces">public spaces open</label>
                </div>
            </div>
            <ComposableMap className="map__container" projection="geoAlbersUsa">
                <Geographies geography={geoUrl}>
                    {({ geographies }) => (
                    <>
                        {geographies.map(geo => (
                        <Geography
                            key={geo.rsmKey}
                            stroke="#FFF"
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
                                    <text y="2" fontSize={14} textAnchor="middle">
                                    {cur.id}
                                    </text>
                                </Marker>
                                ) : (
                                <Annotation
                                    subject={centroid}
                                    dx={offsets[cur.id][0]}
                                    dy={offsets[cur.id][1]}
                                >
                                    <text x={4} fontSize={14} alignmentBaseline="middle">
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
        </section>
    )
}

export default Map;
