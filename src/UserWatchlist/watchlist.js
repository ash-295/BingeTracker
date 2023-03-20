import './watchlist.css';
import Heading from '../NavHeader/heading';
import WatchlistBody from './WatchlistBody/watchlistBody';
import { useNavigate } from "react-router-dom";

function WatchlistPage() {
  const navigate = useNavigate();
  if(localStorage.getItem("UID") === "" || localStorage.getItem("UID") === null || localStorage.getItem("UID") === undefined) {
    return(
      <>
        <Heading/>
        <div className="container">
          <button onClick={() => navigate("/profile")} className="button login__submit" style={{width: "300px"}}>
            <span className="button__text">Go to Login</span>
          </button>
        </div>
      </>
    );
  }
  else{
    return(
      <>
        <Heading/>
        <WatchlistBody/>
      </>
    );
  }
}

export default WatchlistPage;