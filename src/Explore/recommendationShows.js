import './recommendationShows.css';
import RecommendationCard from './recommendCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import axios from 'axios';

function RecommendationShow() {
    const [recommendedShows, setrecommendedShows] = useState([]);

    const getRecommendations = (uid) => {
        axios.get("https://api.akashjena.site/api/v1/reccomendations", {
            headers: {
                uid: uid
            }
        })
            .then((response1) => {
                if (response1.status === 200 && response1.data.status === "success") {
                    setrecommendedShows(response1.data.recommendations);
                } else {
                    setrecommendedShows([]);
                }
            })
            .catch((error1) => {
                setrecommendedShows([]);
            });
    }

    useEffect(() => {
        getRecommendations(localStorage.getItem("UID"));
    }, []);
    return (
        <>
            <div className='explore_rec_area'>
                <h2 className='explore_rec_heading'>Recommended Shows For You</h2>
                <Carousel autoPlay={false} infiniteLoop={true} interval={10000}>
                    {
                        recommendedShows.map((eachRecShow) => {
                            return (
                                <RecommendationCard
                                    key = {eachRecShow._id}
                                    showid = {eachRecShow._id}
                                    showName = {eachRecShow.showName}
                                    showPoster = {eachRecShow.showPoster}
                                    rating = {eachRecShow.rating}
                                    ratingCount = {eachRecShow.ratingCount}
                                    description = {eachRecShow.description}
                                />
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    );
}

export default RecommendationShow;