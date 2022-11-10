import './seriesCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faStar, faPenToSquare} from '@fortawesome/free-solid-svg-icons';

function SeriesCard(props) {
  return (
    <>
      <div className='watch-card'>
        <img src={props.showImg} alt='watchShow'/>
        <div className='info-area'>
          <h3>{props.name}</h3>
          <h5 className='watch_category'>Plan to Watch</h5>
          <button className='watch_info_btn'><FontAwesomeIcon icon= {faCircleInfo} /></button>
          <div className='watch_progress_area'>
            <div className='watch_total_progress'>
              <div className='watch_current_progress'>
              </div>
            </div>
            <div className='watch_progess_numbers'>
              <h5>40/200</h5>
            </div>
          </div>
          <div className='watch_user_rating'>
            4.8 <FontAwesomeIcon icon= {faStar} />
          </div>
          {/* <button> +1 </button> */}
        </div>
      </div>
    </>
  );
}

export default SeriesCard;