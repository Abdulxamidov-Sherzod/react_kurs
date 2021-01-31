import { Component } from "react";
import "../style/posts.scss";
import { Link, Route, Switch } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Post1 from "./post1";

class Posts extends Component {
  render() {
    return (
      <div className="container">
        <h2>Popular product</h2>

        <div className="row mt-5">
          <div className="col-md-3">
            <Link to="/post/1">
              <div className="card">
                <div className="card-body">
                  <img
                    class="foo img-fluid"
                    src="https://olcha.uz/image/200x200/products/svxXIsPmoNu8NNOuux8ZgRrDAiECLh005Y1OhsubKQDcZ8dsDi4UeW28SfWl.jpeg"
                  />
                </div>
                <div className="card-header box">
                  <span>
                    <a href="#">Смартфоны</a>
                  </span>
                  <h6>
                    <a href="#">
                      Samsung Galaxy A31 4/64GB, Prism Crush Black A315
                    </a>
                  </h6>
                  <span>
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                  </span>{" "}
                  <br />
                  <span style={{ color: "grey" }}>206000 сум/мес</span>
                  <br /> <br />
                  <p>1 667 000 сум</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/post/2">
              <div className="card">
                <div className="card-body">
                  <img
                    class="foo img-fluid"
                    src="https://olcha.uz/image/200x200/products/pewCgwJk4SHHAC07Fee0LAyu8DUipdwSJopvv9h9Bd77v2zqun3lWUWRmpE6.jpeg"
                  />
                </div>
                <div className="card-header box">
                  <span>
                    <a href="#">Смартфоны</a>
                  </span>
                  <h6>
                    <a href="#">
                      Samsung Galaxy A31 4/64GB, Prism Crush Black A315
                    </a>
                  </h6>
                  <span>
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                  </span>{" "}
                  <br />
                  <span style={{ color: "grey" }}>206000 сум/мес</span>
                  <br /> <br />
                  <p>1 667 000 сум</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/post/3">
              <div className="card">
                <div className="card-body">
                  <img
                    class="foo img-fluid"
                    src="https://olcha.uz/image/200x200/products/oGBDPiozoAZLLKGKXKhOrStwwDoQkH6JBJ0FHj0l8G1CiKmGMyPZRny8v8Es.jpeg"
                  />
                </div>
                <div className="card-header box">
                  <span>
                    <a href="#">Смартфоны</a>
                  </span>
                  <h6>
                    <a href="#">
                      Samsung Galaxy A31 4/64GB, Prism Crush Black A315
                    </a>
                  </h6>
                  <span>
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                  </span>{" "}
                  <br />
                  <span style={{ color: "grey" }}>206000 сум/мес</span>
                  <br /> <br />
                  <p>1 667 000 сум</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/post/4">
              <div className="card">
                <div className="card-body">
                  <img
                    class="foo img-fluid"
                    src="https://olcha.uz/image/200x200/products/6BCAI2AaIvvCDzJ0N5KFACtZpR4T1BtjhNnW8XnVu3fiu6wwVHMWVEfeYBz5.jpeg"
                  />
                </div>
                <div className="card-header box">
                  <span>
                    <a href="#">Смартфоны</a>
                  </span>
                  <h6>
                    <a href="#">
                      Samsung Galaxy A31 4/64GB, Prism Crush Black A315
                    </a>
                  </h6>
                  <span>
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                    <AiFillStar style={{ color: "#FF7C0B" }} />
                  </span>{" "}
                  <br />
                  <span style={{ color: "grey" }}>206000 сум/мес</span>
                  <br /> <br />
                  <p>1 667 000 сум</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
