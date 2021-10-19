import React, { Component } from "react";
import "./Board.scss";
import Button from "../Buttons/GoIngredient";
import axios from "axios";
import config from "../../config/development";

class Board extends Component {
  state = {
    list: [],
    data: { title: "", date: "", place: "", img: "", text: "" },
  };
  componentDidMount = () => {
    this.getAllList();
  };
  getAllList = async () => {
    this.getAllList();
  };
  getAllList = async () => {
    const rID = "prong_ingredients";
    const endpoint = `${config.API.RESOURCES_SERVICE}?rID=${rID}`;
    await axios
      .get(endpoint)
      .then((response) => {

        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.rows
        ) {
          response.data.data.rows = response.data.data.rows.map((item) => {
            const date = new Date(item.simple_resources.date);
            item.simple_resources.date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            return item;

          });
          const id = this.props.location.state.name;

          const data = response.data.data.rows.filter(
            (item) => item.name === id
          )[0].simple_resources;
          this.setState({
            ...this.state,
            data,
          });
        } else {
          console.error("error");
        }
      })
      .catch((e) => console.log(e));
  };
  render() {
    const data = this.state.data;
    return (
      <div className="BoardContainer">
        <div className="BoardBox">
          <div className="BoardContents">
            <div className="BoardData">
              <div className="BoardDataTop">
                <div lang="kr1" className="DataTopText">
                  NAME
                </div>
                <div className="DataTop">{data.title}</div>
              </div>
              <div className="BoardDataBottom">
                <div className="BotttomFirstBox">
                  <div lang="kr1" className="BottomFirstTitle">
                    DATE
                  </div>
                  <div className="BottomFirstText">{data.date}</div>
                </div>
                <div className="BotttomSecondBox">
                  <div lang="kr1" className="BottomSecondTitle">
                    SPACE
                  </div>
                  <div className="BottomSecondText">{data.place}</div>
                </div>
              </div>
            </div>
            <div lang="kr" className="BoardWriting">
              {data.body}
            </div>
          </div>

          <div className="BoardBtn">
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
