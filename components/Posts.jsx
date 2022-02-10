import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'shashanka97',
    userImg:
      'https://thumbs.dreamstime.com/b/indian-young-boy-face-glasses-profile-picture-avatar-cartoon-character-portrait-vector-illustration-graphic-design-indian-boy-150842813.jpg',
    img: 'https://thumbs.dreamstime.com/b/indian-young-boy-face-glasses-profile-picture-avatar-cartoon-character-portrait-vector-illustration-graphic-design-indian-boy-150842813.jpg',
    caption: 'This is a caption',
  },
  {
    id: '124',
    username: 'shashanka97',
    userImg:
      'https://thumbs.dreamstime.com/b/indian-young-boy-face-glasses-profile-picture-avatar-cartoon-character-portrait-vector-illustration-graphic-design-indian-boy-150842813.jpg',
    img: 'https://thumbs.dreamstime.com/b/indian-young-boy-face-glasses-profile-picture-avatar-cartoon-character-portrait-vector-illustration-graphic-design-indian-boy-150842813.jpg',
    caption: 'This is a caption',
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
