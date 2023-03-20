import './explore.css';
import Heading from '../NavHeader/heading';
import SearchShow from './searchShow';
import RecommendationShow from './recommendationShows';
import { useNavigate } from "react-router-dom";

function ExplorePage() {
    const navigate = useNavigate();
    if (localStorage.getItem("UID") === "" || localStorage.getItem("UID") === null || localStorage.getItem("UID") === undefined) {
        return (
            <>
                <Heading />
                <div className="container">
                    <button onClick={() => navigate("/profile")} className="button login__submit" style={{ width: "300px" }}>
                        <span className="button__text">Go to Login</span>
                    </button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Heading />
                <SearchShow />
                <RecommendationShow />
            </>
        );
    }
}

export default ExplorePage;