import './Map.css';
import React from 'react';
import searchIcon from '../../images/map_search-icon.svg';
import questionMark from '../../images/map_question-mark.svg';
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

const getSelectedStates=(vaccine, quarantine, mask, test, distancing, spaces)=>{
    if(!vaccine && !quarantine && !mask && !test && !distancing && !spaces){
        return [];
    }

    let selectedStates = [...allStates];

    if (vaccine){
        selectedStates = selectedStates.filter(state=>(state.vaccine === vaccine))
    }
    if (quarantine){
        selectedStates = selectedStates.filter(state=>(state.quarantine === quarantine))
    }
    if (mask){
        selectedStates = selectedStates.filter(state=>(state.mask === mask))
    }
    if (test){
        selectedStates = selectedStates.filter(state=>(state.test === test))
    }
    if (distancing){
        selectedStates = selectedStates.filter(state=>(state.distancing === distancing))
    }
    if (spaces){
        selectedStates = selectedStates.filter(state=>(state.spaces === spaces))
    }
    return selectedStates;

}
const getStateColor=(geo, vaccine, quarantine, mask, test, distancing, spaces)=>{
    const selectedStates = getSelectedStates(vaccine, quarantine, mask, test, distancing, spaces);
    return selectedStates.find(state=> state.val ===geo.id)? selectedColor: defaultColor;
}

function Map ({setShowCards,setSelectedStates}) {
    const [vaccineFilter, setVaccineFilter ] = React.useState(false);
    const [quarantineFilter, setQuarantineFilter ] = React.useState(false);
    const [maskFilter, setMaskFilter ] = React.useState(false);
    const [testFilter, setTestFilter ] = React.useState(false);
    const [distancingFilter, setDistancingFilter ] = React.useState(false);
    const [spacesFilter, setSpacesFilter ] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(false);

    const resetFilters = () => {
        setVaccineFilter(false);
        setQuarantineFilter(false);
        setMaskFilter(false);
        setTestFilter(false);
        setDistancingFilter(false);
        setSpacesFilter(false)
    }

    React.useEffect(()=>{
        setShowCards(false);
        if(!vaccineFilter && !quarantineFilter && !maskFilter && !testFilter && !distancingFilter && !spacesFilter){
            setIsChecked(false);
        }else{
            setIsChecked(true);
        }
        setSelectedStates(getSelectedStates(vaccineFilter,quarantineFilter,maskFilter,testFilter,distancingFilter,spacesFilter));

    },[vaccineFilter,quarantineFilter,maskFilter,testFilter,distancingFilter,spacesFilter, setShowCards, setSelectedStates])

    return (
        <section className="map">
            <div className="map__container">
                <div className="map__left-column">
                    <p className="map__title">Check the boxes to tell us what restrictions you are comfortable with:</p>
                    <button className="map__clear-filters" type="button" onClick={resetFilters}>Clear filters</button>
                    <label className="map__checkbox"> no proof of vaccination required
                        <input className="map__input" type="checkbox" id="vaccine" name="vaccine" checked={vaccineFilter}
                        onChange={(event)=>{
                            setVaccineFilter(event.target.checked);
                        }} />
                        <span className="map__checkmark"></span>
                        <img className="map__question-mark" src={questionMark} alt="question"></img>   
                    </label>
                    <label className="map__checkbox"> no quarantine requirements
                        <input type="checkbox" id="quarantine" name="quarantine" checked={quarantineFilter}
                        onChange={(event)=>{
                            setQuarantineFilter(event.target.checked);
                        }} />
                        <span className="map__checkmark"></span> 
                    </label>
                    <label className="map__checkbox">masks are not required indoor
                        <input type="checkbox" id="mask" name="mask" checked={maskFilter}
                        onChange={(event)=>{
                            setMaskFilter(event.target.checked);  
                        }} />
                        <span className="map__checkmark"></span>   
                    </label>
                    <label className="map__checkbox">no testing requirements
                        <input type="checkbox" id="test" name="test" checked={testFilter}
                        onChange={(event)=>{
                            setTestFilter(event.target.checked);
                        }} />
                        <span className="map__checkmark"></span>   
                    </label>
                    <label className="map__checkbox">no social distancing requirements
                        <input type="checkbox" id="distancing" name="distancing" checked={distancingFilter}
                        onChange={(event)=>{
                            setDistancingFilter(event.target.checked);
                        }} />
                        <span className="map__checkmark"></span>   
                    </label>
                    <label className="map__checkbox">public spaces open
                        <input type="checkbox" id="spaces" name="spaces" checked={spacesFilter}
                        onChange={(event)=>{
                            setSpacesFilter(event.target.checked);
                        }} />
                        <span className="map__checkmark"></span>   
                    </label>
                    <button className={`map__button ${isChecked ? "map__button_active" : ""}`} type="submit" disabled={!isChecked} onClick={()=>{setShowCards(true)}}>Check states</button>
                </div>
                <div className="map__right-column">
                    <div className="map__search">
                        <input className="map__search-input" type="search" id="state-search" name="state-search" aria-label="Search a state" placeholder="Search" />
                        <img className="map__search-icon" src={searchIcon} alt="search"></img>
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
            </div>
        </section>
    )
}

export default Map;
