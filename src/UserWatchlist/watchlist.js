import './watchlist.css';
import Heading from '../NavHeader/heading';
import WatchlistBody from './WatchlistBody/watchlistBody';
import Reccomend from './Reccomender/reccomend';

function WatchlistPage() {
  return (
    <>
      <Heading/>
      <Reccomend/>
      <WatchlistBody/>
    </>
  );
}

export default WatchlistPage;