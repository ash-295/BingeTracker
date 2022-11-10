import './watchlist.css';
import Heading from '../NavHeader/heading';
import WatchlistBody from './WatchlistBody/watchlistBody';
import Recommend from './Reccomender/reccomend';
import { useNavigate } from "react-router-dom";
import Loader from '../Loader/loader';

function WatchlistPage() {
  const navigate = useNavigate();
  if(localStorage.getItem("UID") === "" || localStorage.getItem("UID") === null || localStorage.getItem("UID") === undefined) {
    return(
      <>
        <Heading/>
        <button onClick={() => navigate("/profile")} class="button login__submit" style={{width: "100%"}}>
          <span class="button__text">Go to Login</span>
        </button>
      </>
    );
  }
  else{
    return(
      <>
        <Heading/>
        <Recommend/>
        <WatchlistBody/>
        {/* <Loader/> */}
      </>
    );
  }
}

export default WatchlistPage;