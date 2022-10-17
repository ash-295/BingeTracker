import { useState } from 'react';
import './watchlistBody.css';
import userWatchList from './userWatchlist';
import SeriesCard from './seriesCard';

function WatchlistBody() {
    const [tabState, setTab] = useState(1);
    
    const toggleTab = (tabIndex) => {
        setTab(tabIndex);
    };
    return (
        <>
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
                                showImg = {eachData.showImg}
                                name = {eachData.name}
                                watchedEpisode = {eachData.watchedEpisode}
                            />
                        )
                    })}
                    </div>
                    <div className={tabState === 2 ? 'contents active-content' : 'contents'}>
                    {userWatchList.map((eachData) => {
                        if(eachData.showStatus === "Watching"){
                            return(
                                <SeriesCard
                                    showImg = {eachData.showImg}
                                    name = {eachData.name}
                                    watchedEpisode = {eachData.watchedEpisode}
                                />
                            )
                        }
                    })}
                    </div>
                    <div className={tabState === 3 ? 'contents active-content' : 'contents'}>
                    {userWatchList.map((eachData) => {
                        if(eachData.showStatus === "Completed"){
                            return(
                                <SeriesCard
                                    showImg = {eachData.showImg}
                                    name = {eachData.name}
                                    watchedEpisode = {eachData.watchedEpisode}
                                />
                            )
                        }
                    })}
                    </div>
                    <div className={tabState === 4 ? 'contents active-content' : 'contents'}>
                    {userWatchList.map((eachData) => {
                        if(eachData.showStatus === "Plan to Watch"){
                            return(
                                <SeriesCard
                                    showImg = {eachData.showImg}
                                    name = {eachData.name}
                                    watchedEpisode = {eachData.watchedEpisode}
                                />
                            )
                        }
                    })}
                    </div>
                    <div className={tabState === 5 ? 'contents active-content' : 'contents'}>
                    {userWatchList.map((eachData) => {
                        if(eachData.showStatus === "Dropped"){
                            return(
                                <SeriesCard
                                    showImg = {eachData.showImg}
                                    name = {eachData.name}
                                    watchedEpisode = {eachData.watchedEpisode}
                                />
                            )
                        }
                    })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default WatchlistBody;