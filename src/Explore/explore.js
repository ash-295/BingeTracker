import './explore.css';
import Heading from '../NavHeader/heading';
import SearchShow from './searchShow';
import RecommendationShow from './recommendationShows';

function ExplorePage() {
    return (
        <>
            <Heading/>
            <SearchShow/>
            <RecommendationShow/>
        </>
    );
}

export default ExplorePage;