import './seriesCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faStar, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SeriesCard(props) {
  const navigate = useNavigate();
  let categoryColor = "#400000";

  const [currentEpisode, setcurrentEpisode] = useState(props.watchedEpisode);
  let tmpComp = false;
  if(props.statusType === "Completed") {
    tmpComp = true;
  }
  else {
    tmpComp = false;
  }
  const [iscompleted, setisCompleted] = useState(tmpComp);
  const [progress, setProgress] = useState(props.completionPercentage);

  // if(props.watchedEpisode === props.totalEpisode) {
  //   setisCompleted(true);
  // }

  switch (props.statusType) {
    case "PlanToWatch":
      categoryColor = "#3c0f66";
      break;
    case "Watching":
      categoryColor = "#a30c69";
      break;
    case "Completed":
      categoryColor = "#07623b";
      // setisCompleted(true);
      break;
    case "Dropped":
      categoryColor = "#114282";
      break;
    default:
      categoryColor = "#555555";
      break;
  }

  const incrementEpisode = (showId) => {
    let userUid = localStorage.getItem("UID");
    axios.post("https://api.akashjena.site/api/v1/updateWatchlist", {
      uid: userUid,
      showId: showId,
      type: "plusOne"
    })
      .then((response1) => {
        console.log("In success", response1.data);
        if (response1.data.status === "success" && response1.data.episode !== null) {
          setcurrentEpisode(response1.data.episode);
          setProgress((response1.data.episode/props.totalEpisode)*100);
          if(response1.data.episode === props.totalEpisode) {
            setisCompleted(true);
          }
        }
        else {
          alert("Something went wrong");
        }
      })
      .catch((error1) => {
        console.log("In error", error1);
      });
  }

  return (
    <>
      <div id={"watch_" + props.statusType + "_" + props.showId} className='watch-card'>
        <img src={props.showImg} alt='watchShow' />
        <div className='info-area'>
          <h3 onClick={() => navigate("/watchlist/show/" + props.showId)} >{props.name}</h3>
          <h5 className='watch_category' style={{ backgroundColor: categoryColor }}>{props.statusType}</h5>
          <button onClick={() => navigate("/watchlist/show/" + props.showId)} className='watch_info_btn'><FontAwesomeIcon icon={faCircleInfo} /></button>
          <div className='watch_progress_area'>
            <div className='watch_total_progress'>
              <div className='watch_current_progress' style={{ width: progress + "%" }}>
              </div>
            </div>
            <div className='watch_progess_numbers'>
              <h5>{currentEpisode}/{props.totalEpisode}</h5>
            </div>
          </div>
          <div className='watch_user_rating'>
            4.8 <FontAwesomeIcon icon={faStar} />
            <div className='watch_user_btns'>
              <button className='watch_btn_plusone' disabled={iscompleted} onClick={() => incrementEpisode(props.showId)}>+1</button>
              <button className='watch_btn_edit' disabled={true}><FontAwesomeIcon icon={faPenToSquare} /></button>
            </div>
          </div>
          <div className='watch_time_area'>
            <div className='watch_time_added'>Added: 2 days ago</div>
            <div className='watch_time_updated'>Updated: 32 mins ago</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeriesCard;