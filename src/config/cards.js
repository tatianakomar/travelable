import sequoiaImage from '../images/cardlist_sequoia.png';
import bridgeImage from '../images/cardlist_bridge.png';
import mojaveImage from '../images/cardlist_mojave.png';

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
    id:"TX",
    name:"Texas",
    url: "www.texas.com",
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
  }
];
  
export default cards;
  