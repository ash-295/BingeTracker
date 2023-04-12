import './searchCard.css'
import { useNavigate } from "react-router-dom";

function SearchCard(props) {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/watchlist/show/" + props.showId)} id={props.showId} className="search_card_container">
            <img src={props.poster} alt="single_search_card"/>
        </div>
    )
}

export default SearchCard;