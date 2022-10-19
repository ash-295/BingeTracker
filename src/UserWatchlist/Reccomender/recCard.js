import './recCard.css';
import allShows from '../../showsData/showsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';

function RecCard(props) {
  return (
    <div className='rec_card'>
        <div className='rec_img'>
            <img src={props.showPoster}/>
        </div>
        <div className='rec_content'>
            <h1>{props.showName}</h1>
            <div className='rec_rating'>
                <FontAwesomeIcon icon= {faStar} />
                <FontAwesomeIcon icon= {faStar} />
                <FontAwesomeIcon icon= {faStar} />
                <FontAwesomeIcon icon= {faStar} />
                <FontAwesomeIcon icon= {faStar} />
            </div>
            <div className='rec_desc'>{props.description}</div>
            <div className='rec_btn'>
                <button className='rec_add_watch'>Add <FontAwesomeIcon icon= {faPlus}/></button>
            </div>
        </div>
    </div>
  );
}

export default RecCard;