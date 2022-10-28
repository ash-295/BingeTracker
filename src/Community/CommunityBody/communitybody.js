import './communitybody.css';
import PostCard from './PostCard/postCard';
import postList from './PostCard/demoPostsList';

function CommunityBody() {
  return (
    <>
        <section>
        {postList.map((eachPost) => {
            return(
                <div className='post_area'>
                    <PostCard
                        profilePic = {eachPost.profilePic}
                        profileName = {eachPost.profileName}
                        createdAt = {eachPost.createdAt}
                        postImage = {eachPost.postImage}
                        likeCount = {eachPost.likeCount}
                        commentCount =  {eachPost.commentCount}
                        shareCount = {eachPost.shareCount}
                        userliked = {eachPost.userliked}
                        caption = {eachPost.caption}
                    />
                </div>
            );
        })}
        </section>
    </>
  );
}

export default CommunityBody;