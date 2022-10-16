import './seriesCard.css';

function SeriesCard(props) {
  return (
    <>
      <div className='watch-card'>
            <img src={props.showImg} alt='watchShow'/>
            <div className='info-area'>
                <h3>{props.name}</h3>
                <h5>{props.watchedEpisode}/200</h5>
                <button> +1 </button>
            </div>
        </div>
    </>
  );
}

export default SeriesCard;