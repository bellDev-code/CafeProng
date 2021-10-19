import React, { Component } from "react";
import "../Board.scss";
import Button from "../Buttons/GoList";
import axios from "axios";
import { config } from "../../../config";
import ApiConfig from "../../../config/development";
import nextIcon from "../../_asset/images/pagination/next-icon.svg"

class Board extends Component {
  state = {
    list: [],
    data: { title: "", date: "", place: "", img: "", text: "" },
    prev: { title: "" },
    next: { title: "" },
  };

  curIdx;
  id;
  prevId;
  nextId;

  componentDidMount = () => {
    this.curIdx = this.props.location.state.id;
    this.id = this.props.location.state.name;
    this.prevId = this.props.location.state.prev;
    this.nextId = this.props.location.state.next;

    console.log(this.id, this.curIdx, this.prevId, this.nextId)

    this.getAllList();
  };
  getAllList = async () => {
    this.getAllList();
  };
  getAllList = async () => {
    const rID = config.rID_magazine;
    const endpoint = `${ApiConfig.API.RESOURCES_SERVICE}?rID=${rID}`;
    await axios
      .get(endpoint)

      .then((response) => {
        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.rows
        ) {
          console.log(response.data.data.rows);
          response.data.data.rows = response.data.data.rows.map((item) => {
            const date = new Date(item.simple_resources.date);

            item.simple_resources.date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            return item;

          });

          console.log(this.id, this.curIdx, this.prevId, this.nextId)
          const data = response.data.data.rows.filter((item) => item.name === this.id)[0];
          data.simple_resources.image = `${process.env.REACT_APP_BASE_URL}/resources/${data.simple_resources.image[0]}`;

          var morePrevId = null, moreNextId = null;
          const prevData = this.prevId ? response.data.data.rows.filter((item) => item.name === this.prevId) : null;
          if (prevData) {
            morePrevId = response.data.data.rows[this.curIdx - 2]?.name
          }
          const nextData = this.nextId ? response.data.data.rows.filter((item) => item.name === this.nextId) : null;
          if (nextData) {
            moreNextId = response.data.data.rows[this.curIdx + 2]?.name
          }

          console.log('현재: ', data);
          console.log('이전: ', prevData);
          console.log('다음: ', nextData);

          this.setState({
            ...this.state,
            data,
            prev: prevData ? (prevData.length > 0 ? prevData[0] : null) : null,
            next: nextData ? (nextData.length > 0 ? nextData[0] : null) : null,
            morePrevId, moreNextId
          });
        } else {
          console.error("error");
        }
      })
      .catch((e) => console.log(e));
  };

  moveBoardPage = (id, name, prevName, nextName) => {
    this.curIdx = id;
    this.id = name;
    this.prevId = prevName;
    this.nextId = nextName;

    this.getAllList();

    // this.props.history.push({
    //   pathname: "/board3",
    //   state: { id: index, name: id, prev: prevId, next: nextId },
    // });
  };

  render() {
    const { data, prev, next, morePrevId, moreNextId } = this.state;
    return (
      <div className="BoardContainer">
        <div className="Board3Box">
          <div className="BoardContents">
            <div className="BoardData">
              <div className="LineBox">
                <div className="BoxList">
                  <div className="Title">NAME</div>
                  <div className="SubText">{data.simple_resources?.title}</div>
                </div>
              </div>
              <div className="LineBox">
                <div className="BoxList">
                  <div className="Title">DATE</div>
                  <div className="SubText">{data.simple_resources?.date}</div>
                </div>
                <div className="BoxList">
                  <div className="Title">PLACE</div>
                  <div className="SubText">{data.simple_resources?.place}</div>
                </div>
              </div>
            </div>
            <div className="BoardDescBox">
              <div className="DescImg">
                <img src={data.simple_resources?.image} alt="boardimg" />
              </div>
              <div className="Desc">{data.simple_resources?.body}</div>
            </div>
          </div>
          <div className="BoardBtn">
            <Button />
          </div>
          <div className="NextBox">
            {prev && (
              <div className="NextMain">
                <div className="NextBoxList">
                  <div className="TitleBox">
                    <img src={nextIcon} alt='Prev' />
                    <div className="Title">PREV</div>
                  </div>
                  <div className="SubText clickable" onClick={() => {
                    this.moveBoardPage(this.props.location.state.id - 1, prev.name, morePrevId, data.name)
                  }}>
                    {prev.simple_resources?.title}
                  </div>
                </div>
              </div>
            )}

            {next && (
              <div className="NextMain">
                <div className="NextBoxList">
                  <div className="TitleBox">
                    <img src={nextIcon} alt='Next' />
                    <div className="Title">NEXT</div>
                  </div>
                  <div className="SubText clickable" onClick={() => {
                    this.moveBoardPage(this.props.location.state.id + 1, next.name, data.name, moreNextId)
                  }}>
                    {next.simple_resources?.title}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    );
  }
}

export default Board;
