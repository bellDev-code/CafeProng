import React, { Component } from 'react'
import './IngredientsPage.scss';
import viewbox from "../../_asset/images/Ingredients/view-box.png";
import MoreViewBttn from "../../Components/Buttons/MoreView";
import axios from "axios";
import arrowiconimg from "../../_asset/images/Ingredients/arrow-icon.png";
import IngredientsTitle from './IngredientsTitle/IngredientsTitle';
import config from '../../config/development';
export default class IngredientsPage extends Component {
    constructor(props) {
        super(props);

        this.loadMore = this.loadMore.bind(this);
    }
    state = {
        items: [],
        visible: 4,
        list: [],
    };
    loadMore;
    componentDidMount = () => {
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
                    console.log(response.data.data.rows);
                    response.data.data.rows = response.data.data.rows.map((item) => {
                        const date = new Date(item.lastUpdateDate);
                        item.lastUpdateDate = `${date.getFullYear()}-${date.getMonth()}`;
                        return item;
                    });
                    // console.log(response.data.data.rows);
                    this.setState({
                        ...this.state,
                        list: response.data.data.rows,
                    });
                    // console.log(response.data.data.rows);
                } else {
                    console.error("error");
                }
            })
            .catch((e) => console.log(e));
    };
    moveBoardPage = (id, index) => {
        this.props.history.push({
            pathname: "/board",
            state: { id: index, name: id },
        });
    };
    loadMore() {
        console.log("af")
        this.setState((prev) => {
            return { visible: prev.visible + 2 };
        });
    }
    render() {
        return (
            <div>
                {/* title  */}
               <IngredientsTitle {...this.props} />
                {/* content  */}
                <div className="IngredientsContentsContainer">
                    <div className="IngredientsContentsBox">
                        {this.state.list.slice(0, this.state.visible).map((item, index) => {
                            return (
                                <div
                                    className="IngredientsContentsZone"
                                    onClick={() => this.moveBoardPage(item.name, index)}
                                    key={item.id}
                                >
                                    <div className="IngredientsImgBox">
                                        <div
                                            className="New"
                                            style={item.latest ? { backgroundColor: "#444444" } : {}}
                                        >
                                            {item.latest ? "NEW" : ""}
                                        </div>
                                        <img
                                            className="IngredientsContentsImgBox"
                                            src={`${process.env.REACT_APP_BASE_URL}/resources/${item.simple_resources.image}`}
                                            alt="이미지"
                                        ></img>
                                    </div>
                                    <div className="IngredientsContentsTextBox">
                                        <div lang="kr1" className="IngredientsContentsTitleBox">
                                            {item.simple_resources.title}
                                        </div>
                                        <div className="IngredientsContentsText">
                                            {item.simple_resources.body}
                                        </div>
                                        <div
                                            className="Clickbox"
                                            onClick={() => this.moveBoardPage(item.name, index)}
                                        >
                                            <img
                                                className="IngredientsArrowImgBox"
                                                src={arrowiconimg}
                                                alt=""
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="IngredientsViewBox">
                            {this.state.visible < this.state.list.length ?
                                <MoreViewBttn onClick={this.loadMore}>
                                    <img src={viewbox} alt="뷰 이미지 아이콘"></img>
                                </MoreViewBttn>
                                :
                                null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
