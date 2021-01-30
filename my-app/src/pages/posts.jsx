import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../components/style/posts.scss";
const Posts = () => {
  const posts = [
    { path: "/posts/olma1" },
    { path: "/posts/2" },
    { path: "/posts/3" },
    { path: "/posts/4" },
  ];
  return (
    <> 
      <h1>Posts Component</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.path}>
            <Link to={post.path}>
              <div className="col-md-6 box">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
                ducimus. Dicta eos at, rem tempora distinctio excepturi?
                Blanditiis, neque corrupti eaque eius sit officia nisi magnam,
                alias facilis hic reiciendis.
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
