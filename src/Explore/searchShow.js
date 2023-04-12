import './searchShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';
import loadingImg from './searchLoading.gif'
import SearchCard from './searchCard';

function SearchShow() {

    const [searchValue, setSearchValue] = useState('')
    const [searchState, setSearchState] = useState('empty')
    const [searchResults, setSearchResults] = useState([])

    const helperSearch = (uid) => {
        const searchText = searchValue.trim().toLowerCase()
        if (searchText.length > 0) {
            axios.post("https://api.akashjena.site/api/v1/searchShows", {
                uid,
                searchText,
                page: 1
            })
                .then((response1) => {
                    if (response1.data.message === 'Success' && response1.data.topMatches.length > 0) {
                        setSearchResults(response1.data.topMatches)
                        setSearchValue('')
                        setSearchState('results')
                    } else {
                        setSearchValue('')
                        setSearchState('no_results')
                    }
                })
                .catch((error1) => {
                    setSearchValue('')
                    setSearchState('no_results')
                })
        } else {
            setSearchValue('')
            alert('Nothing to search')
        }
    }

    const searchThisShow = () => {
        setSearchState('loading')
        const timer = setTimeout(() => {
            helperSearch(localStorage.getItem("UID"));
        }, 1500);
        return () => clearTimeout(timer);
    }

    return (
        <>
            <div className='explore_search_area'>
                <div className='explore_search_query_area'>
                    <input value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} className='explore_search_query_input' type="text" placeholder='Search shows here' />
                    <button className='explore_search_query_sort'>Sort<FontAwesomeIcon icon={faArrowDownShortWide} /></button>
                    <button className='explore_search_query_filter'>Filter<FontAwesomeIcon icon={faFilter} /></button>
                    <button onClick={searchThisShow} className='explore_search_query_submit'>Apply</button>
                </div>
                {(() => {
                    if (searchState === 'results') {
                        return (
                            <div className='explore_search_result_area'>
                                <h1>Top Results</h1>
                                <div className='search_top_results_container'>
                                    {
                                        searchResults.map((singleResult) => {
                                            return (
                                                <SearchCard
                                                    key = {singleResult._id}
                                                    showId = {singleResult._id}
                                                    poster = {singleResult.showPoster}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    } else if (searchState === 'no_results') {
                        return (
                            <div className='explore_search_result_area'>
                                <h1>No Results found</h1>
                            </div>
                        )
                    } else if (searchState === 'loading') {
                        return (
                            <div className='explore_search_result_area'>
                                <div className='search_loading'>
                                    <img src={loadingImg} alt='loading'/>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className='explore_search_result_area'></div>
                        )
                    }
                })()}
                {/* <hr/> */}
            </div>
            <hr />
        </>
    );
}

export default SearchShow;