import './showpage.css';
import Heading from '../NavHeader/heading';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../Loader/loader';
import { availability } from '../_StaticData/available';

function ShowPage() {
    const { showid } = useParams();
    const [showData, setShowData] = useState({})
    const [watchData, setWatchData] = useState({})
    const [percent, setPercent] = useState('100%');
    const [isloading, setIsLoading] = useState(false);
    const [inWatchlist, setInWatchlist] = useState(false);
    const [incrementBtn, setIncrementBtn] = useState(true)
    const uid = localStorage.getItem("UID")

    const getShowInfoWithoutUid = (showid) => {
        axios.post("https://api.akashjena.site/api/v1/getShowInfo", {
            showId: showid
        })
            .then((response1) => {
                console.log("Here", response1.data);
                setShowData(response1.data.showData);
                setIsLoading(false)
            })
            .catch((error1) => {
                // console.log("Error", error1);
            });
    }

    const incrementEpisode = (showId) => {
        axios.post("https://api.akashjena.site/api/v1/updateWatchlist", {
          uid,
          showId,
          type: "plusOne"
        })
          .then((response1) => {
            console.log("In success", response1.data);
            if (response1.data.status === "success" && response1.data.episode !== null) {
              watchData.episodesWatched = response1.data.episode
              const tmpPercent = (response1.data.episode/showData.episode) * 100
              setPercent(`${tmpPercent}%`)
              if(response1.data.episode === 1) {
                watchData.status = 'Watching'
              }
              if(response1.data.episode === showData.episode) {
                watchData.status = 'Completed'
                setIncrementBtn(false)
              }
              setWatchData(watchData)
            }
            else {
              alert("Something went wrong");
            }
          })
          .catch((error1) => {
            console.log("In error", error1);
          });
      }

    const getShowInfo = (showid) => {
        axios.post("https://api.akashjena.site/api/v1/getShowInfo", {
            showId: showid,
            uid
        })
            .then((response1) => {
                console.log("Here", response1.data);
                setShowData(response1.data.showData);
                setWatchData(response1.data.watchData);
                if (response1.data.watchData.hasOwnProperty('status')) {
                    setInWatchlist(true)
                    const tmpPercent = (response1.data.watchData.episodesWatched / response1.data.showData.episode) * 100
                    setPercent(`${tmpPercent}%`)
                    if (response1.data.watchData.status === 'Completed') {
                        setIncrementBtn(false)
                    }
                }
                setIsLoading(false)
            })
            .catch((error1) => {
                // console.log("Error", error1);
            });
    }

    const removeShow = (showId) => {
        axios.post("https://api.akashjena.site/api/v1/removeShowFromWatchlist", {
            uid,
            showId
        })
            .then((response1) => {
                // console.log("In success", response1.data);
                window.location.reload(true)
            })
            .catch((error1) => {
                // console.log("In error", error1);
            });
    }

    const addShowforUser = (showId) => {
        axios.post("https://api.akashjena.site/api/v1/addShowToWatchlist", {
            uid,
            showId
        })
            .then((response1) => {
                // console.log("In success", response1.data);
                window.location.reload(true)
            })
            .catch((error1) => {
                // console.log("In error", error1);
            });
    }

    useEffect(() => {
        setIsLoading(true)
        if (!uid || uid === undefined || uid.length === 0) {
            const timer = setTimeout(() => {
                getShowInfoWithoutUid(showid);
            }, 1500);
            return () => clearTimeout(timer);
        }
        else {
            const timer = setTimeout(() => {
                getShowInfo(showid);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const getLogo = (platformId) => {
        return availability[platformId].logo
    }

    const showInformation = {
        "type": "Series",
        "category": "Anime",
        "season": 1,
        "episode": 12,
        "status": "Completed",
        "showName": "Noragami",
        "description": "In times of need, if you look in the right place, you just may see a strange telephone number scrawled in red. If you call this number, you will hear a young man introduce himself as the Yato God. Yato is a minor deity and a self-proclaimed 'Delivery God,' who dreams of having millions of worshippers. Without a single shrine dedicated to his name, however, his goals are far from being realized. He spends his days doing odd jobs for five yen apiece, until his weapon partner becomes fed up with her useless master and deserts him. Just as things seem to be looking grim for the god, his fortune changes when a middle school girl, Hiyori Iki, supposedly saves Yato from a car accident, taking the hit for him. Remarkably, she survives, but the event has caused her soul to become loose and hence able to leave her body. Hiyori demands that Yato return her to normal, but upon learning that he needs a new partner to do so, reluctantly agrees to help him find one. And with Hiyori's help, Yato's luck may finally be turning around.",
        "genre": [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        "releasedAt": 1391126400000,
        "showPoster": "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post6.jpg",
        "rating": 0,
        "ratingCount": 0,
        "available": [
            "ott01",
            "ott02",
            "ott06"
        ],
        "wallpaper": [
            'https://images3.alphacoders.com/608/608362.jpg',
            'https://images6.alphacoders.com/548/548268.jpg',
            'https://images2.alphacoders.com/662/662284.jpg',
            'https://wallpapers.com/images/file/yato-noragami-pink-mobile-d21gz6a1dazy7rx6.jpg',
            'https://wallpapers.com/images/file/yukine-yato-hiyori-iki-noragami-n5bcxp2pp3nfuhlb.jpg'
        ]
    }
    return (
        <>
            <Heading />
            <div className='showpage_body_area' id={showid}>
                <div className='showpage_sidebar'>
                    <div className='showpage_sidebar_img'>
                        <img src={showData.showPoster} alt='showPoster' />
                    </div>
                    <div className='showpage_sidebar_heading'>
                        {showData.showName}
                    </div>
                    <div className='showpage_sidebar_button_area'>
                        {(() => {
                            if (inWatchlist) {
                                return (
                                    <button onClick={() => removeShow(showid)}>Remove from watchlist</button>
                                )
                            } else {
                                return (
                                    <button onClick={() => addShowforUser(showid)} >Add to watchlist<FontAwesomeIcon icon={faBookmark} /></button>
                                )
                            }
                        })()}
                    </div>
                </div>
                <div className='showpage_content_area'>
                    {(() => {
                        if (inWatchlist) {
                            return (
                                <>
                                    <h2>Your Status</h2>
                                    <div className='showpage_content_user_status'>
                                        <div className='showpage_content_status_tag'>
                                            <span>{watchData.status}</span>
                                            <button>Edit</button>
                                        </div>
                                        <div className='showpage_content_status_rating'>
                                            {(() => {
                                                console.log('Test', watchData)
                                                if ('rating' in watchData && watchData.rating === 5) {
                                                    return (
                                                        <>
                                                            <span className='status_rating_stars'>
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                            </span>
                                                            <span className='status_rating_numbers'>5 / 5</span>
                                                        </>
                                                    )
                                                } else if ('rating' in watchData && watchData.rating === 4) {
                                                    return (
                                                        <>
                                                            <span className='status_rating_stars'>
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} />
                                                            </span>
                                                            <span className='status_rating_numbers'>4 / 5</span>
                                                        </>
                                                    )
                                                } else if ('rating' in watchData && watchData.rating === 3) {
                                                    return (
                                                        <>
                                                            <span className='status_rating_stars'>
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                            </span>
                                                            <span className='status_rating_numbers'>3 / 5</span>
                                                        </>
                                                    )
                                                } else if ('rating' in watchData && watchData.rating === 2) {
                                                    return (
                                                        <>
                                                            <span className='status_rating_stars'>
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                            </span>
                                                            <span className='status_rating_numbers'>2 / 5</span>
                                                        </>
                                                    )
                                                } else if ('rating' in watchData && watchData.rating === 1) {
                                                    return (
                                                        <>
                                                            <span className='status_rating_stars'>
                                                                <FontAwesomeIcon icon={faStar} className="yellow" />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                            </span>
                                                            <span className='status_rating_numbers'>1 / 5</span>
                                                        </>
                                                    )
                                                } else {
                                                    return (
                                                        <>
                                                            <span className='status_rating_stars yellow'>
                                                                Not Rated Yet
                                                            </span>
                                                        </>
                                                    )
                                                }
                                            })()}
                                        </div>
                                        <div className='showpage_content_status_episode'>
                                            <div className='showpage_content_status_episode_progress_area'>
                                                <div className='progress_graphic_area'>
                                                    <div className='progress_graphic_outer'>
                                                        <div className='progress_graphic_inner' style={{ width: percent }}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='progress_count_area'>
                                                    <span>{watchData.episodesWatched}/{showData.episode}</span>
                                                </div>
                                                <div className='progress_increment_area'>
                                                    {(() => {
                                                        if (incrementBtn) {
                                                            return (
                                                                <button onClick={() => incrementEpisode(showid)}><FontAwesomeIcon icon={faPlus}/></button>
                                                            )
                                                        } else {
                                                            return (
                                                                <button disabled><FontAwesomeIcon icon={faPlus}/></button>
                                                            )
                                                        }
                                                    })()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })()}
                    <h2>Glimpes of the Show</h2>
                    <div className='showpage_content_wallpaper_area'>
                        <img src={showInformation.wallpaper[0]} alt='temp' />
                        <img src={showInformation.wallpaper[1]} alt='temp' />
                        <img src={showInformation.wallpaper[2]} alt='temp' />
                        <img src={showInformation.wallpaper[3]} alt='temp' />
                        <img src={showInformation.wallpaper[4]} alt='temp' />
                    </div>
                    <h2>Basic Information</h2>
                    <div className='showpage_content_hero_area'>
                        <div className='showpage_content_hero_releasedate'>
                            Released: 5th Feb, 2023
                        </div>
                        <div className='showpage_content_hero_genre'>
                            <ul>
                                <li style={{ background: '#b0ffff' }}>Action</li>
                                <li style={{ background: '#ffdeb0' }}>Drama</li>
                                <li style={{ background: '#ffb0d7' }}>Fiction</li>
                                <li style={{ background: '#b9ffb0' }}>Swords</li>
                            </ul>
                        </div>
                        <div className='showpage_content_hero_rating'>
                            Rating:
                            <span> <FontAwesomeIcon icon={faStar} /></span>
                            <span> 4.1 / 5 </span>
                            <span>(12K rating)</span>
                        </div>
                        <div className='showpage_content_hero_status'>
                            Status: Completed
                        </div>
                        <div className='showpage_content_hero_episode'>
                            Episodes: 12
                        </div>
                    </div>
                    <h2>Description</h2>
                    <div className='showpage_content_desc_area'>
                        <p>{showData.description}</p>
                    </div>
                    <h2>Streaming on</h2>
                    <div className='showpage_content_streaming_platform'>
                        {(() => {
                            if (showInformation.available && typeof showInformation.available === 'object' && showInformation.available.length > 0) {
                                return (
                                    <div className='showpage_content_streaming_inner'>
                                        {
                                            showInformation.available.map((eachPlatform) => {
                                                return (
                                                    <div key={eachPlatform} className='showpage_content_streaming_img'>
                                                        <img src={getLogo(eachPlatform)} alt='' />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            } else {
                                return (
                                    <div className='showpage_content_streaming_inner'>
                                        <h4>Not available</h4>
                                    </div>
                                )
                            }
                        })()}
                    </div>
                </div>
            </div>
            {(() => {
                if (isloading) {
                    return (
                        <Loader />
                    )
                }
            })()}
        </>
    );
}

export default ShowPage;