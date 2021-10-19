import React, { Component } from 'react';
import "./Magazine.scss"
import { config } from "../../config";
// import {list} from './Data/Data'
// import Pagination from '../../Components/GridPagination/Pagination'
import { Pagination } from "../../Components/Pagination/Pagination";
import { PaginationM } from "../../Components/Pagination/PaginationM";
import axios from "axios";
import ApiConfig from '../../config/development'
import MagazineTitle from './MagazineTitle/MagazineTitle';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const limit = 13;
const pageGroup = 3;
class Magazine extends Component {
    state = {
        renderContents: [],
        currentPage: 0,
        cardsPerPage: 13,
        currentPageM: 0,
        list: [],
        currentList: [],
        isContentLoading: true,
        // cardsperpage -> 보여주고 싶은 박스 개수
    }
    onPageNumberClicked = (newPage) => (event) => {
        this.setState({ currentPage: newPage }, () => this.filterData());
    };
    onPreviousPageClicked = (newPage) => (event) => {
        this.setState({ currentPage: newPage }, () => this.filterData());
    };
    onNextPageClicked = (newPage) => (event) => {
        this.setState({ currentPage: newPage }, () => this.filterData());
    };

    //모바일/////////////////////////////////////////////////////////
    onPageNumberClickedM = (newPage) => (event) => {
        this.setState({ currentPageM: newPage });
        this.setState({ currentPage: newPage }, () => this.filterData2());
    };
    onPreviousPageClickedM = (newPage) => (event) => {
        this.setState({ currentPageM: newPage });
        this.setState({ currentPage: newPage }, () => this.filterData2());
    };
    onNextPageClickedM = (newPage) => (event) => {
        this.setState({ currentPageM: newPage });
        this.setState({ currentPage: newPage }, () => this.filterData2());
    };

    componentDidMount() {
        this.getAllList();

    }

    getAllList = async () => {
        const rID = config.rID_magazine;
        const endpoint = `${ApiConfig.API.RESOURCES_SERVICE}?rID=${rID}`;
        this.setState({
            isContentLoading: true,
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

                    // response.data.data.rows = response.data.data.rows.map((item) => {
                    //     return item.simple_resources;
                    // });
                    console.log(response.data.data.rows);
                    this.setState({
                        ...this.state,
                        list: response.data.data.rows,
                        isContentLoading: false
                    },
                        () => { this.filterData(); }
                    );

                    // console.log(response.data.data.rows);
                } else {
                    console.error("error");
                }
            })
            .catch((e) => {
                console.log(e)
                this.setState({
                    isContentLoading: false,
                })
            });
    };

    // changePage = (startPage = 0) => {
    //     const {list} = this.state;
    //     const end = (startPage*limit) >= list.length ? list.length-1 : (startPage*limit)+limit;
    //     this.setState({
    //         renderContents: list.slice((startPage*limit), end)
    //     })
    // }

    getDate = (date) => {
        date = new Date(date);
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);

        return year + "." + month + "." + day;
    }
    filterData = () => {
        let getData = this.state.list;
        let startIndex = this.state.currentPage * this.state.cardsPerPage;
        let endIndex = (this.state.currentPage + 1) * this.state.cardsPerPage;
        // console.log(startIndex, endIndex);
        // console.log(getData.slice(startIndex, endIndex));
        // return getData.slice(startIndex, endIndex);
        this.setState({ currentList: getData.slice(startIndex, endIndex) });
    };

    moveBoardPage = (id, index, prevId, nextId) => {
        console.log(id, index, prevId, nextId)
        this.props.history.push({
            pathname: "/board3",
            state: { rID: config.rID_magazine, id: index, name: id, prev: prevId, next: nextId },
        });
    };
    renderSkeletonTheme = (quantity) => {
        return new Array(quantity).fill().map((a, index) => <SkeletonTheme key={index}>
            <Skeleton style={{ marginTop: 10 }} height={50} />
        </SkeletonTheme>)
    }
    render() {
        console.log("리스트갯수 : ", this.state.list.length)
        return (
            <div className="MagazineContainer">
                <div className="MagazineMain">
                    {/* <MagazineTitle/> */}
                    <div className="MagazineTitleContainer">
                        <div className="MagazineTitleBox">
                            <div className="Title">
                                MAGAZINE
                        </div>
                            <div className="SubText">
                                공간이라는 내부의 개념을 넘어 전체적인 구조적 체계를 통해 견고하고 안전한 설계와 시공을 <br />
                            진행합니다. 프롱은 구성있고 매력적인 컨설팅을 선호합니다. 모두가 만족할 만한 기획을 통해 <br />
                            최적의 스타일을 부여해 줍니다.
                        </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-header">
                            <div className="title Date">DATE</div>
                            <div className="title Name">NAME</div>
                            <div className="title Space">SPACE</div>
                            <div className="title Area Right">AREA</div>
                        </div>
                        <div className="grid-contents">
                            {this.state.isContentLoading ? this.renderSkeletonTheme(12) : this.state.currentList.map((item, index) => {
                                console.log(item)
                                return (
                                    <div
                                        key={item.id}
                                        className="grid-list"
                                        onClick={() => this.moveBoardPage(item.name, index, this.state.list[index - 1]?.name, this.state.list[index + 1]?.name)}
                                    >
                                        <div className="item Date">{this.getDate(item.simple_resources.date)}</div>
                                        <div className="item Name">{item.simple_resources.title}</div>
                                        <div className="item Space">{item.simple_resources.space}</div>
                                        <div className="item Area Right">{item.simple_resources.area}</div>
                                    </div>
                                )
                            })}
                        </div>
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
        );
    }
}

export default Magazine;