import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import {MdDone} from "react-icons/md"
import "../style/post1.scss";
class Post4 extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card-img">
              <img
                className="img-fluid"
                src="https://olcha.uz/image/600x600/products/jA13Zso1By1fuSAoDz7oA0dOwkafaDNaj2ht9Bd51dxp2BwNwvP4a1dTfmyl.jpeg"
                alt="Rasm topilmadi"
              />
            </div>
          </div>
          <div className="col-md-6 text">
            <div className="model">
              <a href="#">Samsung</a>
              <h2>Samsung Galaxy A51 6/128GB, Prism Crush Blue A515</h2>
              <div className="div">
                <span>
                  <AiFillStar style={{ color: "#FF7C0B" }} />
                  <AiFillStar style={{ color: "#FF7C0B" }} />
                  <AiFillStar style={{ color: "#FF7C0B" }} />
                  <AiFillStar style={{ color: "#FF7C0B" }} />
                  <AiFillStar style={{ color: "#FF7C0B" }} />
                </span>
                <span>Отзывы (3)</span>
                <span>
                  <a href="#">
                    <BsBook /> В сравнение{" "}
                  </a>
                </span>
              </div>
              <hr />
              <h6>Коротко о товаре</h6>
              <ul>
                <li>Гарантийный срок (месяц): 12</li>
                <li>Версия ОС: Android 10.0</li>
                <li>Объем встроенной памяти: 128GB</li>
                <li>Датчик Face ID: Есть</li>
                <li>Производитель смартфона: Вьетнам</li>
              </ul>
              <div className="price">
                <h4>3 165 000 сум</h4>
                <p>
                  391000 сум/мес{" "}
                  <span>
                    {" "}
                    в рассрочку{" "}
                    <RiErrorWarningLine
                      style={{ fontSize: 20 }}
                      title="В персональном кабинете нужно заполнить личные данные"
                    />
                  </span>
                </p>
                <div className="button-group mt-5">
                  <button className="btn btn-danger btn-md">Купить</button> &nbsp;
                  <button className="btn btn-outline-warning btn-md">Купить в рассрочку</button> &nbsp;
                  <button className="btn btn-outline-danger btn-md">Купить в один клик</button>
                </div>
                <p className='mt-4'>
                  <MdDone style={{color: 'green'}}/>
                  &nbsp;
                  Доставка по Узбекистану
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post4;
