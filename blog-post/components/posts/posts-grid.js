import classes from './posts-grid.module.css';
import PostItem from './post-item';

const PostsGrid = (props) => {
  const { posts } = props;

  const renderPosts = posts.map((post) => (
    <PostItem key={post.slug} post={post} />
  ));

  return <ul className={classes.grid}>{renderPosts}</ul>;
};

export default PostsGrid;
