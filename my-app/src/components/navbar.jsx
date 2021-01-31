import { Component } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  GrFormSearch,
  AiOutlineHome,
  TiDocumentText,
  IoIosContacts,
  FaElementor,
  RiLoginBoxLine,
} from "../pages/icon";
import "../style/navbar.scss";
class NavBar extends Component {
  state = {
    isComplete: false,
  };

  handleToggle = () => {
    this.setState({
      isComplete: !this.state.isComplete,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <ul className="nav-left">
          <li>
            <Link to="/home">
              <AiOutlineHome />
              &nbsp;Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <TiDocumentText />
              &nbsp;About
            </Link>
          </li>
          <li>
            <Link to="/posts">
              <FaElementor />
              &nbsp;Posts
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <IoIosContacts /> &nbsp;Contact
            </Link>
          </li>
        </ul>
        <ul className="nav-right">
          <li>
            <Link to="/login">
              <RiLoginBoxLine />
              &nbsp;LogIn
            </Link>
          </li>
          <li>
            <Link>
              <FaSearch onClick={this.handleToggle} />
              <br />
              <div className="box">
                {this.state.isComplete ? (
                  <div className="search">
                    <div className="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Seacrh here..."
                      />
                      <div class="input-group-append">
                        <span
                          onClick={this.handleToggle}
                          class="input-group-text"
                        >
                          <GrFormSearch />
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
