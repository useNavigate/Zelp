function PostIndex({ posts }) {
  return (
   <ul>
  {posts.map(post => {
    return (
      <li key={post.id}>
        <h2>{post.title}</h2>
        {post?.imageUrls?.map(imageUrl => (
          <img key={imageUrl} src={`${imageUrl}`} alt="" />
        ))}
        {/* <img key={`${post.photoUrl}`} src={`${post.photoUrl}`} alt="" /> */}
      </li>
    );
  })}
</ul>
  );
}

export default PostIndex;
