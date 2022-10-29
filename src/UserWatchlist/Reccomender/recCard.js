import './recCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function RecCard(props) {

    const addShowforUser = (showid) => {
        let userUid = localStorage.getItem("UID"); 
        console.log("Request for showId ", showid, " to be added for User: ", userUid);
        axios.post("http://localhost:4400/api/v1/addShowToWatchlist", {
            uid: userUid,
            showId: showid
        })
        .then((response1) => {
            console.log("In success", response1.data);
        })
        .catch((error1) => {
            console.log("In error", error1);
        });
    }

    return (
        <div className='rec_card'>
            <div className='rec_img'>
                <img src={props.showPoster} alt='showposter'/>
            </div>
            <div className='rec_content'>
                <h1>{props.showName}</h1>
                <div className='rec_rating'>
                    {(() => {
                        switch (props.rating) {
                        case 1:
                            return <>
                                <FontAwesomeIcon icon= {faStar} />
                                <span>({props.ratingCount})</span>
                            </>
                        case 2:
                            return <>
                                <FontAwesomeIcon icon= {faStar} />
                                <FontAwesomeIcon icon= {faStar} />
                                <span>({props.ratingCount})</span>
                            </>
                        case 3:
                            return <>
                                <FontAwesomeIcon icon= {faStar} />
                                <FontAwesomeIcon icon= {faStar} />
                                <FontAwesomeIcon icon= {faStar} />
                                <span>({props.ratingCount})</span>
                            </>
                        case 4:
                            return <>
                                <FontAwesomeIcon icon= {faStar} />
                                <FontAwesomeIcon icon= {faStar} />
                                <FontAwesomeIcon icon= {faStar} />
                                <FontAwesomeIcon icon= {faStar} />
                                <span>({props.ratingCount})</span>
                            </>
                        case 5:
                            return <>
                                <FontAwesomeIcon icon= {faStar} />
                                <FontAwesomeIcon icon= {faStar} />
                                <FontAwesomeIcon icon= {faStar} />
                                <FontAwesomeIcon icon= {faStar} />
                                <FontAwesomeIcon icon= {faStar} />
                                <span>({props.ratingCount})</span>
                            </>
                        default:
                            return <>
                                <span>No Rating Yet</span>
                            </>
                        }
                    })()}
                </div>
                <div className='rec_desc'>{props.description}</div>
                <div className='rec_btn'>
                    <button onClick={() => addShowforUser(props.showid)} className='rec_add_watch'>Add <FontAwesomeIcon icon= {faPlus}/></button>
                </div>
            </div>
        </div>
    );
}

export default RecCard;