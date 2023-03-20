import './searchShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';

function SearchShow() {
    return (
        <>
            <div className='explore_search_area'>
                <div className='explore_search_query_area'>
                    <input className='explore_search_query_input' type="text" placeholder='Search shows here'/>
                    <button className='explore_search_query_sort'>Sort<FontAwesomeIcon icon={faArrowDownShortWide} /></button>
                    <button className='explore_search_query_filter'>Filter<FontAwesomeIcon icon={faFilter} /></button>
                    <button className='explore_search_query_submit'>Apply</button>
                </div>
                <div className='explore_search_result_area'></div>
                {/* <hr/> */}
            </div>
            <hr/>
        </>
    );
}

export default SearchShow;