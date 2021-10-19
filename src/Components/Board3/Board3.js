import React, { Component } from "react";
import "./Board.scss";
import Button from "../Buttons/GoList";
import "./index";
import axios from "axios";
import { config } from "../../config";
import ApiConfig from "../../config/development";
import nextIcon from "../../_asset/images/pagination/next-icon.svg"
import ConsultingTitle from "../../Pages/Consulting/ConsultingTitle/ConsultingTitle";
import MagazineTitle from "../../Pages/Magazine/MagazineTitle/MagazineTitle";
import EquipmentTitle from "../../Pages/Eqipment/EquipmentTitle/EquipmentTitle";
import Skeleton from "react-loading-skeleton";

class Board3 extends Component {
  state = {
    list: [],
    data: { title: "", date: "", place: "", img: "", text: "" },
    prev: { title: "" },
    next: { title: "" },
    isContentLoading: true,
    isImageLoading: true,
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

  // componentDidUpdate(prevProps, prevState){
  //   if(prevProps.location.state.id !== this.props.location.state.id ||
  //     prevProps.location.state.name !== this.props.location.state.name ||
  //     prevProps.location.state.prev !== this.props.location.state.prev ||
  //     prevProps.location.state.next !== this.props.location.state.next)
  //   {
  //     this.curIdx = this.props.location.state.id;
  //     this.id = this.props.location.state.name;
  //     this.prevId = this.props.location.state.prev;
  //     this.nextId = this.props.location.state.next;
  //   }
  // }
  getAllList = async () => {
    this.getAllList();
  };
  getAllList = async () => {
    const rID = this.props.location.state.rID;//config.rID_consulting;
    const endpoint = `${ApiConfig.API.RESOURCES_SERVICE}?rID=${rID}`;
    this.setState({
      isContentLoading: true,
      isImageLoading: true,
    })
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

          //선택한 데이터? name 
          const data = response.data.data.rows.filter((item) => item.name === this.id)[0];
          if(data.simple_resources.image){
            data.simple_resources.image = `${process.env.REACT_APP_BASE_URL}/resources/${data.simple_resources?.image[0]}`;
          }



          // 선택한 데이터의 이전 데이터
          var morePrevId = null, moreNextId = null;
          const prevData = this.prevId ? response.data.data.rows.filter((item) => item.name === this.prevId) : null;
          if (prevData) {
            morePrevId = response.data.data.rows[this.curIdx - 2]?.name
          }

          // 선택한 데이터의 다음 데이터
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
            morePrevId, moreNextId,
            isContentLoading: false
          });
        } else {
          console.error("error");
        }
      })
      .catch((e) => {
        console.log(e)
        this.setState({
          isContentLoading: false,
          isImageLoading: false,
        })
      });
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
  renderConsulting() {
    const { data } = this.state;
    return (
      <>
        <div className="LineBox">
          <div className="BoxList">
            <div className="Title">NAME</div>
            <div className="SubText">{this.state.isContentLoading ? <Skeleton /> : data.simple_resources?.title}</div>
          </div>
        </div>
        <div className="LineBox">
          <div className="BoxList">
            <div className="Title">DATE</div>
            <div className="SubText">{this.state.isContentLoading ? <Skeleton /> : data.simple_resources?.date}</div>
          </div>
          <div className="BoxList">
            <div className="Title">PLACE</div>
            <div className="SubText">{this.state.isContentLoading ? <Skeleton /> : data.simple_resources?.place}</div>
          </div>
        </div>
      </>

    )
  }
  renderEquipment() {
    const { data } = this.state;
    return (
      <>
        <div className="LineBox">
          <div className="BoxList">
            <div className="Title">NAME</div>
            <div className="SubText">{this.state.isContentLoading ? <Skeleton /> : data.simple_resources?.title}</div>
          </div>
        </div>
        <div className="LineBox">
          <div className="BoxList">
            <div className="Title">DATE</div>
            <div className="SubText">{this.state.isContentLoading ? <Skeleton /> : data.simple_resources?.date}</div>
          </div>
          <div className="BoxList">
            <div className="Title">PLACE</div>
            <div className="SubText">{this.state.isContentLoading ? <Skeleton /> : data.simple_resources?.place}</div>
          </div>
        </div>
      </>

    )
  }

  backToList = () => {
    switch (this.props.location.state.rID) {
      case config.rID_consulting:
        return '/consulting'
      case config.rID_magazine:
        return '/magazine'
      case config.rID_equipment:
        return '/equipment'
      default:
        return '/'
    }
  }

  renderMagazine() {
    const { data } = this.state;
    return (
      <>
        <div className="LineBox">
          <div className="BoxList">
            <div className="Title">NAME</div>
            <div className="SubText">{this.state.isContentLoading ? <Skeleton /> : data.simple_resources?.title}</div>
          </div>
        </div>
        <div className="LineBox">
          <div className="BoxList">
            <div className="Title">DATE</div>
            <div className="SubText">{this.state.isContentLoading ? <Skeleton /> : data.simple_resources?.date}</div>
          </div>
          <div className="BoxList Place">
            <div className="Title">PLACE</div>
            <div className="SubText">{this.state.isContentLoading ? <Skeleton /> : data.simple_resources?.date}</div>
          </div>
          <div className="BoxList">
            <div className="Title">AREA</div>
            <div className="SubText">{this.state.isContentLoading ? <Skeleton /> : data.simple_resources?.area}</div>
          </div>
        </div>
      </>

    )
  }
  handleLoad = (e) => {
    this.setState({
      isImageLoading: false
    })
  }
  render() {
    const { data, prev, next, morePrevId, moreNextId } = this.state;
    return (
      <div className="BoardContainer" style={{ paddingTop: "100px" }}>
        {this.props.location.state.rID === config.rID_consulting && (
          <ConsultingTitle isMobile={this.props.isMobile} {...this.props}></ConsultingTitle>
        )}
        {this.props.location.state.rID === config.rID_magazine && (
          <MagazineTitle isMobile={this.props.isMobile} {...this.props}></MagazineTitle>
        )}
        {this.props.location.state.rID === config.rID_equipment && (
          <EquipmentTitle isMobile={this.props.isMobile} {...this.props}></EquipmentTitle>
        )}
        <div className="Board3Box">
          <div className="BoardContents">
            <div className="BoardData">
              {this.props.location.state.rID === config.rID_consulting && this.renderConsulting()}
              {this.props.location.state.rID === config.rID_magazine && this.renderMagazine()}
              {this.props.location.state.rID === config.rID_equipment && this.renderEquipment()}
            </div>
            <div className="BoardDescBox">
              {this.props.location.state.rID !== config.rID_magazine && (
                <div className="DescImg">
                  <div className="imgContainer">
                    {this.state.isImageLoading && <Skeleton className="skeletonImg" />}
                    <img src={data.simple_resources?.image} onLoad={this.handleLoad} alt="boardimg" />
                  </div>
                </div>
              )}
              <div className="Desc">{data.simple_resources?.body || data.simple_resources?.description}</div>
            </div>
          </div>
          <div className="BoardBtn">
            <Button link={this.backToList} />
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

export default Board3;
