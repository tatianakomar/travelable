import './Main.css';
import React from 'react';
import Map from '../Map/Map';
import CardList from '../CardList/CardList';

function Main () {
    const [showCards, setShowCards] = React.useState(false);
    const [selectedStates, setSelectedStates] = React.useState([]);

    return (
        <main>
            <Map setShowCards={setShowCards} setSelectedStates={setSelectedStates}/>
            {showCards && <CardList selectedStates={selectedStates} />}
        </main>
    )
}

export default Main;
