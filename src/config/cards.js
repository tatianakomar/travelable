import sequoiaImage from '../images/cardlist_sequoia.png';
import bridgeImage from '../images/cardlist_bridge.png';
import mojaveImage from '../images/cardlist_mojave.png';
import antelopeImage from '../images/cardlist_antelope.png';
import grandImage from '../images/cardlist_grand.png';
import waveImage from '../images/cardlist_wave.png';

const cards = [
  {
    id:"CA",
    name:"California",
    url: "www.california.com",
    cards:[
    {
      image: sequoiaImage,
      title: "Sequoia park",
    },
    {
        image: bridgeImage,
        title: "Golden gate bridge",
    },
    {
        image: mojaveImage,
        title: "Mojave",
    }]
  },
  {
    id:"AZ",
    name:"Arizona",
    url: "www.arizona.com",
    cards:[
    {
      image: antelopeImage,
      title: "Antelope canyon",
    },
    {
        image: grandImage,
        title: "Grand canyon",
    },
    {
        image: waveImage,
        title: "Wave canyon",
    }]
  }
];
  
export default cards;
  