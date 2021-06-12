import Banner from './components/Banner/Banner';
import TopPicks from './components/MarketRecap/TopPicks/Toppicks';
import JoinDiscord from './components/JoinDiscord/Joindiscord';
import Youtube from './components/Youtube/Youtube';
import Footor from './components/Footor/Footor';
import './App.css';

function App() {
  const twitterLink ="https://twitter.com/CrypterRoss";
  const youtubeLink ="https://www.youtube.com/channel/UCstIqdk5lHwH4-GFOpwLrOA";
  const discordLink ="https://discord.com/channels/838089115295416331/838808994846867536";

  
  return (
    <div className="App">
      <Banner twitterLink={twitterLink} youtubeLink={youtubeLink}  discordLink={discordLink}/>
      <TopPicks />
      <JoinDiscord discordLink={discordLink} />
      <Youtube />
      <Footor twitterLink={twitterLink} youtubeLink={youtubeLink}  discordLink={discordLink} />
    </div>
  );
}

export default App;
