import React, { Component } from 'react'
import "./EquipmentPage.scss"
import axios from "axios";
import {
    isBrowser,
} from "react-device-detect";
import { config } from "../../config";
import { Pagination } from "../../Components/Pagination/Pagination";
import ApiConfig from '../../config/development'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
export default class EquipmentPage extends Component {
    state = {
        currentPage: 0,
        cardsPerPage: 9,
        currentPageM: 0,
        cardsPerPageM: 6,
        list: [],
        currentList: [],
        isImageLoading: false,
        isContentLoading: true,
        // cardsperpage -> 보여주고 싶은 박스 개수
    };
    onPageNumberClicked = (newPage) => (event) => {
        this.handlePageNumberClicked(newPage);
    };
    onPreviousPageClicked = (newPage) => (event) => {
        this.handlePreviousPageClicked(newPage);
    };
    onNextPageClicked = (newPage) => (event) => {
        this.handleNextPageClicked(newPage);
    };
    handlePageNumberClicked = (newPage) => {
        // console.log("onPageNumberClicked", newPage);
        this.setState({ currentPage: newPage }, () => this.filterData());
    };
    handlePreviousPageClicked = (newPage) => {
        // console.log("onPreviousPageClicked", newPage);
        this.setState({ currentPage: newPage }, () => this.filterData());
    };
    handleNextPageClicked = (newPage) => {
        //console.log("onNextPageClicked", newPage);
        this.setState({ currentPage: newPage }, () => this.filterData());
    };
    //모바일/////////////////////////////////////////////////////////
    onPageNumberClickedM = (newPage) => (event) => {
        this.handlePageNumberClickedM(newPage);
    };
    onPreviousPageClickedM = (newPage) => (event) => {
        this.handlePreviousPageClickedM(newPage);
    };
    onNextPageClickedM = (newPage) => (event) => {
        this.handleNextPageClickedM(newPage);
    };
    handlePageNumberClickedM = (newPage) => {
        // console.log("onPageNumberClicked", newPage);
        this.setState({ currentPageM: newPage });
        this.setState({ currentPage: newPage }, () => this.filterData2());
    };
    handlePreviousPageClickedM = (newPage) => {
        // console.log("onPreviousPageClicked", newPage);
        this.setState({ currentPageM: newPage });
        this.setState({ currentPage: newPage }, () => this.filterData2());
    };
    handleNextPageClickedM = (newPage) => {
        //console.log("onNextPageClicked", newPage);
        this.setState({ currentPageM: newPage });
        this.setState({ currentPage: newPage }, () => this.filterData2());
    };
    componentDidMount = () => {
        this.getAllList();
    };
    renderSkeletonTheme = (quantity) => {
        return new Array(quantity).fill().map((a, index) => <SkeletonTheme>
            <div
                key={index}
                className="EquipmentBodyBox-container"
            >
                <div className="EquipmentBodyBox-wrapper">
                    <div className="imgContainer">
                        <Skeleton className="skeletonImg" />
                    </div>
                    <Skeleton style={{ marginBottom: 20 }} height={30} />
                    <div className="text">
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
            </div>
        </SkeletonTheme>)
    }
    getAllList = async () => {
        const rID = config.rID_equipment;
        const endpoint = `${ApiConfig.API.RESOURCES_SERVICE}?rID=${rID}`;
        this.setState({
            isImageLoading: true,
            isContentLoading: true
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
                    // console.log(response.data.data.rows);
                    response.data.data.rows = response.data.data.rows.map((item) => {
                        const date = new Date(item.lastUpdateDate);
                        item.lastUpdateDate = `${date.getFullYear()}`;
                        return item;
                    });
                    // console.log(response.data.data.rows);
                    this.setState(
                        {
                            ...this.state,
                            list: response.data.data.rows,
                            isContentLoading: false
                        },
                        () => { isBrowser ? this.filterData() : this.filterData2() }
                    );
                    // console.log(response.data.data.rows);
                } else {
                    console.error("error");

                }
            })
            .catch((e) => {
                console.log(e)
                this.setState({
                    isImageLoading: false,
                    isContentLoading: false

                })
            });
    };

    filterData = () => {
        let getData = this.state.list;
        let startIndex = this.state.currentPage * this.state.cardsPerPage;
        let endIndex = (this.state.currentPage + 1) * this.state.cardsPerPage;
        // console.log(startIndex, endIndex);
        // console.log(getData.slice(startIndex, endIndex));
        // return getData.slice(startIndex, endIndex);
        this.setState({ currentList: getData.slice(startIndex, endIndex) });
    };
    filterData2 = () => {
        let getData = this.state.list;
        let startIndex = this.state.currentPageM * this.state.cardsPerPageM;
        let endIndex = (this.state.currentPageM + 1) * this.state.cardsPerPageM;

        // return getData.slice(startIndex, endIndex);
        this.setState({ currentList: getData.slice(startIndex, endIndex) });
    };
    moveBoardPage = (id, index, prevId, nextId) => {
        this.props.history.push({
            pathname: "/board3",
            state: { rID: config.rID_equipment, id: index, name: id, prev: prevId, next: nextId },
        });
    };
    handleLoad = (e) => {
        this.setState({
            isImageLoading: false
        })
    }
    render() {
        return (
            <div>
                {/* title  */}
                <div className='EquipmentTitleContainer'>
                    <div className='EquipmentTitleBox'>
                        <div className='EquipmentTitleLeft'>
                            EQUIPMENT
                    </div>
                        <div className='EquipmentTitleRight'>
                            공간이라는 내부의 개념을 넘어 전체적인 구조적 체계를 통해 견고하고 안전한 설계와 시공을 <br />
                        진행합니다. 프롱은 구성있고 매력적인 컨설팅을 선호합니다. 모두가 만족할 만한 기획을 통해 <br />
                        최적의 스타일을 부여해 줍니다. 또한 알맞은 비용으로 특색있는 자신만의  카페 프랜차이즈를 <br />
                        운영할 수 있도록 최대한의 도움을 줍니다.
                    </div>
                    </div>
                </div>
                {/* content  */}
                <div className="equipmentContent">
                    <div className="EquipmentBodyMain-container">
                        <div className="photo-list">
                            {this.state.isContentLoading ? this.renderSkeletonTheme(6) : this.state.currentList.map((item, index) => {
                                return (
                                    <div
                                        key={item.id}
                                        className="EquipmentBodyBox-container"
                                        onClick={() => this.moveBoardPage(item.name, index, this.state.currentList[index - 1]?.name, this.state.currentList[index + 1]?.name)}
                                    >
                                        <div className="EquipmentBodyBox-wrapper">
                                            <div className="imgContainer">
                                                {/* <div style={item.latest ? { backgroundColor: "rgb(68, 68, 68)" } : {}}>{item.latest ? "NEW" : ""}</div> */}
                                                {this.state.isImageLoading && <Skeleton className="skeletonImg" />}
                                                <img
                                                    src={`${process.env.REACT_APP_BASE_URL}/resources/${item.simple_resources.image}`}
                                                    alt={"img"}
                                                    onLoad={this.handleLoad}
                                                ></img>
                                            </div>
                                            <div className="titleWrapper">
                                                <div className="title">{item.simple_resources.title}</div>
                                                <div className="date">{item.lastUpdateDate}</div>
                                            </div>
                                            <div className="text">{item.simple_resources.place}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <Pagination
                            currentPage={this.state.currentPage}
                            cardsPerPage={this.state.cardsPerPage}
                            itemCount={this.state.list.length}
                            onPageNumberClicked={this.onPageNumberClicked}
                            onPreviousPageClicked={this.onPreviousPageClicked}
                            onNextPageClicked={this.onNextPageClicked}
                        />
                    </div>

                </div>
            </div>
        )
    }
}
