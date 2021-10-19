import React, { Component } from "react";
import "./Board2.scss";
import Button from "../Buttons/GoEquipment";
import "./index";
import axios from "axios";
import { config } from "../../config";

class Board2 extends Component {
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
    const rID = "prong_equipment";
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
    // console.log(data);
    return (
      <div className="Board2Container">
        <div className="Board2Box">
          <div className="Board2Contents">
            <div className="Board2Data">
              <div className="Board2DataTop">
                <div className="DataTopText">
                  NAME
                </div>
                <div className="DataTop">{data.title}</div>
              </div>
              <div className="Board2DataBottom">
                <div className="BotttomFirstBox">
                  <div className="BottomFirstTitle">
                    DATE
                  </div>
                  <div className="BottomFirstText">{data.date}</div>
                </div>
                <div className="BotttomSecondBox">
                  <div className="BottomSecondTitle">
                    SPACE
                  </div>
                  <div className="BottomSecondText">{data.place}</div>
                </div>
              </div>
            </div>
            <div className="Board2Writing">
              {data.body}
            </div>
          </div>

          <div className="Board2Btn">
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default Board2;
