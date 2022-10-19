import './reccomend.css';
import RecCard from './recCard';
import allShows from '../../showsData/showsData';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Reccomend() {
  return (
    <>
        <section className='reccomend_container'>
            <div className='reccomend_content'>
                <input className='search_reccomend' type="text" placeholder='Search shows here'/>
                <div className='search_results'></div>
                <h3>Our Reccomendations</h3>
                <div className='reccomend-shows'>
                  <Carousel autoPlay= {true} infiniteLoop= {true}>
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

export default Reccomend;