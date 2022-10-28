import './postCard.css';
import post01 from '../../PostsImg/post01.jpeg';
import prof1 from '../../ProfileImg/pro1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

function PostCard(props) {
    return (
      <div className='postCard'>
        <div className='post_head'>
            <img src={props.profilePic} alt=''/>
            <h4>{props.profileName}</h4>
        </div>
        <div className='post_img_area' style={{backgroundImage: `url(${props.postImage})`, backgroundPosition: `center`}}>
            <img src={props.postImage} alt=''/>
        </div>
        <div className='post_info_area'>
            <div className='post_icon_area'>
                <div className='post_icon'>
                    <button className='like_btn'>
                        <FontAwesomeIcon icon= {faHeart} />
                    </button>
                    <span>5</span>
                </div>
                <div className='post_icon'>
                    <button className='comment_btn'>
                        <FontAwesomeIcon icon= {faComment} />
                    </button>
                    <span>5</span>
                </div>
                <div className='post_icon'>
                    <button className='share_btn'>
                        <FontAwesomeIcon icon= {faShare} />
                    </button>
                    <span>5</span>
                </div>
            </div>
            <div className='post_caption_area'>
                <p>We cannot solve our problems with the same thinking we used when we created them. #albert #life</p> 
                <p className='post_time'> 52 mins ago </p>   
            </div>
        </div>
      </div>
    );
  }
  
  export default PostCard;