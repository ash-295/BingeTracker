import './reccomend.css';
import RecCard from './recCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Recommend() {
  const [recommendedShows, setrecommendedShows] = useState([]);

  const getRecommendations = (uid) => {
    axios.get("https://api.akashjena.site/api/v1/reccomendations", {
      headers: {
        uid: uid
      }
    })
    .then((response1) => {
      if(response1.status === 200 && response1.data.status === "success"){
        setrecommendedShows(response1.data.recommendations);
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
            <Carousel autoPlay= {true} infiniteLoop= {true} interval= {10000}>
              {
                recommendedShows.map((eachRecShow) => {
                  return(
                    <RecCard
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
        </div>
      </section>
    </>
  );
}

export default Recommend;