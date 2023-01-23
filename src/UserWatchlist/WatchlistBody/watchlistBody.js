import { useEffect, useState } from 'react';
import './watchlistBody.css';
import SeriesCard from './seriesCard';
import axios from 'axios';
import Loader from '../../Loader/loader';

function WatchlistBody() {
    const [tabState, setTab] = useState(1);
    const [isloading, setIsLoading] = useState(false);
    const [userWatchList, setUserWatchList] = useState([]);
    
    const toggleTab = (tabIndex) => {
        setTab(tabIndex);
    };

    const getWatchlists = (uid) => {
        axios.get("https://api.akashjena.site/api/v1/userWatchlist", {
          headers: {
            uid: uid
          }
        })
        .then((response1) => {
          console.log("Here", response1.data.data);
          setUserWatchList(response1.data.data);
          setIsLoading(false);
        })
        .catch((error1) => {
          console.log("Error", error1);
          setIsLoading(false);
        });
      }

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            getWatchlists(localStorage.getItem("UID"));
          }, 1500);
          return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <h1 className='watchlist-heading'>My Watchlist</h1>
            <section className='series-container'>
                <div className='nav-area'>
                    <div className={tabState === 1 ? 'tabs active-tab' : 'tabs'} onClick={() => toggleTab(1)}>
                        All
                    </div>
                    <div className={tabState === 2 ? 'tabs active-tab' : 'tabs'} onClick={() => toggleTab(2)}>
                        Watching
                    </div>
                    <div className={tabState === 3 ? 'tabs active-tab' : 'tabs'} onClick={() => toggleTab(3)}>
                        Completed
                    </div>
                    <div className={tabState === 4 ? 'tabs active-tab' : 'tabs'} onClick={() => toggleTab(4)}>
                        Plan to Watch
                    </div>
                    <div className={tabState === 5 ? 'tabs active-tab' : 'tabs'} onClick={() => toggleTab(5)}>
                        Dropped
                    </div>
                </div>
                <div className='content-area'>
                    <div className={tabState === 1 ? 'contents active-content' : 'contents'}>
                    {userWatchList.map((eachData) => {
                        return(
                            <SeriesCard
                                showImg = {eachData.showDetails[0].showPoster}
                                name = {eachData.showDetails[0].showName}
                                watchedEpisode = {eachData.episodesWatched}
                                statusType = {eachData.status}
                                addTime = {eachData.addedToList}
                                lastUpdateTime = {eachData.lastUpdatedTime}
                                showId = {eachData.showId}
                                totalEpisode = {eachData.showDetails[0].episode}
                                completionPercentage = {(eachData.episodesWatched/eachData.showDetails[0].episode)*100}
                            />
                        )
                    })}
                    </div>
                    <div className={tabState === 2 ? 'contents active-content' : 'contents'}>
                    {userWatchList.map((eachData) => {
                        if(eachData.status === "Watching"){
                            return(
                                <SeriesCard
                                    showImg = {eachData.showDetails[0].showPoster}
                                    name = {eachData.showDetails[0].showName}
                                    watchedEpisode = {eachData.episodesWatched}
                                    statusType = {eachData.status}
                                    addTime = {eachData.addedToList}
                                    lastUpdateTime = {eachData.lastUpdatedTime}
                                    showId = {eachData.showId}
                                    totalEpisode = {eachData.showDetails[0].episode}
                                    completionPercentage = {(eachData.episodesWatched/eachData.showDetails[0].episode)*100}
                                />
                            )
                        }
                        else{
                            return( <></>)
                        }
                    })}
                    </div>
                    <div className={tabState === 3 ? 'contents active-content' : 'contents'}>
                    {userWatchList.map((eachData) => {
                        if(eachData.status === "Completed"){
                            return(
                                <SeriesCard
                                    showImg = {eachData.showDetails[0].showPoster}
                                    name = {eachData.showDetails[0].showName}
                                    watchedEpisode = {eachData.episodesWatched}
                                    statusType = {eachData.status}
                                    addTime = {eachData.addedToList}
                                    lastUpdateTime = {eachData.lastUpdatedTime}
                                    showId = {eachData.showId}
                                    totalEpisode = {eachData.showDetails[0].episode}
                                    completionPercentage = {(eachData.episodesWatched/eachData.showDetails[0].episode)*100}
                                />
                            )
                        }
                        else{
                            return( <></>)
                        }
                    })}
                    </div>
                    <div className={tabState === 4 ? 'contents active-content' : 'contents'}>
                    {userWatchList.map((eachData) => {
                        if(eachData.status === "PlanToWatch"){
                            return(
                                <SeriesCard
                                    showImg = {eachData.showDetails[0].showPoster}
                                    name = {eachData.showDetails[0].showName}
                                    watchedEpisode = {eachData.episodesWatched}
                                    statusType = {eachData.status}
                                    addTime = {eachData.addedToList}
                                    lastUpdateTime = {eachData.lastUpdatedTime}
                                    showId = {eachData.showId}
                                    totalEpisode = {eachData.showDetails[0].episode}
                                    completionPercentage = {(eachData.episodesWatched/eachData.showDetails[0].episode)*100}
                                />
                            )
                        }
                        else{
                            return( <></>)
                        }
                    })}
                    </div>
                    <div className={tabState === 5 ? 'contents active-content' : 'contents'}>
                        Coming Soon...
                        {userWatchList.map((eachData) => {
                            if(eachData.status === "Dropped"){
                                return(
                                    <SeriesCard
                                        showImg = {eachData.showDetails[0].showPoster}
                                        name = {eachData.showDetails[0].showName}
                                        watchedEpisode = {eachData.episodesWatched}
                                        statusType = {eachData.status}
                                        addTime = {eachData.addedToList}
                                        lastUpdateTime = {eachData.lastUpdatedTime}
                                        showId = {eachData.showId}
                                        totalEpisode = {eachData.showDetails[0].episode}
                                        completionPercentage = {(eachData.episodesWatched/eachData.showDetails[0].episode)*100}
                                    />
                                )
                            }
                            else{
                                return( <></>)
                            }
                        })}
                    </div>
                </div>
            </section>
            {(() => {
                if(isloading){
                    return(
                        <Loader/>
                    )
                }
            })()}
        </>
    );
}

export default WatchlistBody;