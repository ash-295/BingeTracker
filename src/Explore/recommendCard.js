import './recommendCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

function RecommendationCard(props) {
    const navigate = useNavigate();
    const [isAdded, setisAdded] = useState(false);

    const addShowforUser = (showid) => {
        let userUid = localStorage.getItem("UID");
        axios.post("https://api.akashjena.site/api/v1/addShowToWatchlist", {
            uid: userUid,
            showId: showid
        })
            .then((response1) => {
                console.log("In success", response1.data);
                setisAdded(true);

            })
            .catch((error1) => {
                console.log("In error", error1);
            });
    }

    if (isAdded) {
        return (
            <>
                <div className='rec_confirmation_area'>
                    <div className='rec_confirmation_card'>
                        <div className='rec_confirm_inner'>
                            <span className='rec_confirm_icon'>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span>
                            <h2 >Successfully Added to list</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='explore_rec_card'>
                    <div className='explore_rec_card_poster_area'>
                        <img src={props.showPoster} alt='temp_poster' />
                    </div>
                    <div className='explore_rec_card_content_marea'>
                        <h1 onClick={() => navigate("/watchlist/show/" + props.showid)} className='explore_rec_card_content_heading'>{props.showName}</h1>
                        <div className='explore_rec_card_content_rating'>
                            {(() => {
                                switch (props.rating) {
                                    case 1:
                                        return <>
                                            <FontAwesomeIcon icon={faStar} />
                                            <span>({props.ratingCount})</span>
                                        </>
                                    case 2:
                                        return <>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <span>({props.ratingCount})</span>
                                        </>
                                    case 3:
                                        return <>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <span>({props.ratingCount})</span>
                                        </>
                                    case 4:
                                        return <>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <span>({props.ratingCount})</span>
                                        </>
                                    case 5:
                                        return <>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <span>({props.ratingCount})</span>
                                        </>
                                    default:
                                        return <>
                                            <span>No Rating Yet</span>
                                        </>
                                }
                            })()}
                        </div>
                        <div className='explore_rec_card_content_btn_area'>
                            <button onClick={() => addShowforUser(props.showid)} className='explore_rec_card_content_btn'>Add <FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                    <div className='explore_rec_card_content_area'>
                        <h1 onClick={() => navigate("/watchlist/show/" + props.showid)} className='explore_rec_card_content_heading'>{props.showName}</h1>
                        <div className='explore_rec_card_content_rating'>
                            {(() => {
                                switch (props.rating) {
                                    case 1:
                                        return <>
                                            <FontAwesomeIcon icon={faStar} />
                                            <span>({props.ratingCount})</span>
                                        </>
                                    case 2:
                                        return <>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <span>({props.ratingCount})</span>
                                        </>
                                    case 3:
                                        return <>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <span>({props.ratingCount})</span>
                                        </>
                                    case 4:
                                        return <>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <span>({props.ratingCount})</span>
                                        </>
                                    case 5:
                                        return <>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <span>({props.ratingCount})</span>
                                        </>
                                    default:
                                        return <>
                                            <span>No Rating Yet</span>
                                        </>
                                }
                            })()}
                        </div>
                        <div className='explore_rec_card_content_description'>{props.description}</div>
                        <div className='explore_rec_card_content_btn_area'>
                            <button onClick={() => addShowforUser(props.showid)} className='explore_rec_card_content_btn'>Add <FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default RecommendationCard;