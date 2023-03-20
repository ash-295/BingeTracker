import './communitybody.css';
import PostCard from './PostCard/postCard';
import postList from './PostCard/demoPostsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function CommunityBody() {
  return (
    <>
        <section className='community_posts'>
            {postList.map((eachPost) => {
                return(
                    <div className='post_area'>
                        <PostCard
                            profilePic = {eachPost.profilePic}
                            profileName = {eachPost.profileName}
                            createdAt = {eachPost.createdAt}
                            postImage = {eachPost.postImage}
                            likeCount = {eachPost.likeCount}
                            commentCount = {eachPost.commentCount}
                            shareCount = {eachPost.shareCount}
                            userliked = {eachPost.userliked}
                            caption = {eachPost.caption}
                        />
                    </div>
                );
            })}
            {/* <div className='loadmore_area'>
                <button>Show more</button>
            </div> */}
        </section>
        <button className='create_post'><FontAwesomeIcon icon= {faPlus} /></button>
    </>
  );
}

export default CommunityBody;