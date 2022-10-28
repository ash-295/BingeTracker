import './reccomend.css';
import RecCard from './recCard';
import allShows from '../../showsData/showsData';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Recommend() {
  const [recommendedShows, setrecommendedShows] = useState([]);

  const getRecommendations = (uid) => {
    axios.get("http://localhost:4400/api/v1/reccomendations", {
      headers: {
        uid: uid
      }
    })
    .then((response1) => {
      console.log("Checkpoint 1", response1);
      if(response1.status === 200 && response1.data.status === "success"){
        console.log("Checkpoint 2", response1.data.recommendations);
        setrecommendedShows(recommendedShows => [...recommendedShows, response1.data.recommendations[0]]);
        console.log("Checkpoint 3", recommendedShows);
      }
      else{
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
      <section className='reccomend_container'>
        <div className='reccomend_content'>
          <input className='search_reccomend' type="text" placeholder='Search shows here'/>
          <div className='search_results'></div>
          <h3>Our Recommendations</h3>
          <div className='reccomend-shows'>
            <Carousel showThumbs={false} autoPlay= {true} infiniteLoop= {true}>
              {
                allShows.map((eachRecShow) => {
                  return(
                    <RecCard
                      showName = {eachRecShow.showName}
                      showPoster = {eachRecShow.showPoster}
                      rating = {eachRecShow.rating}
                      description = {eachRecShow.description}
                    />
                  )
                })
              }
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recommend;