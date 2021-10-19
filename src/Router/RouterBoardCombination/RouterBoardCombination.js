import React, { Component } from 'react'
import Board from '../../Components/Board/Board'
import IngredientsTitle from '../../Pages/Ingredients/IngredientsTitle/IngredientsTitle'
import BoardPreview from '../../Components/Board/BoardPreview';
import { data } from '../../Components/Board'
import EquipmentTitle from '../../Pages/Eqipment/EquipmentTitle/EquipmentTitle';
import Board2 from '../../Components/Board2/Board2'
import Board3 from '../../Components/Board3/Board3'
import { RoutesString } from '../../constants/routesString';
export default class RouterBoardCombination extends Component {
    state = {
        boardData: {},
        index: this.props.location.state.id,
        nextTitle: "",
        previousTitle: ""
    }
    toScrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    componentDidMount = () => {
        let { index } = this.state
        this.getData(data, index);
        this.setPreviewTitle(index);
        this.toScrollTop();
    }
    setPreviewTitle = (index) => {
        let nextIndex = index + 1;
        let preIndex = index - 1;
        if (preIndex < 0) {
            preIndex = 0
        }
        if (nextIndex >= data.length) {
            nextIndex = data.length - 1
        }
        let nextTitle = data[nextIndex]?.name;
        let previousTitle = data[preIndex]?.name;

        this.setState({
            nextTitle: nextTitle,
            previousTitle: previousTitle
        })
    }
    //// 첫 번째 데이터(index에서) 가져오는 함수
    getData = (data, index) => {
        let Data = this.filterData(data, index);
        this.setState({
            boardData: Data
        })
    }
    //// 가져온 데이터 가공
    filterData = (data, index) => {
        let list = data[index]
        return list
    }
    movePrevious = () => {
        const { index } = this.state
        if (index === 0) alert("첫번째 게시물 입니다.")
        let PeviousIndex = index - 1;
        this.setState({ boardData: data[PeviousIndex], index: PeviousIndex }, () => {
            this.setPreviewTitle(PeviousIndex)
        })
        this.toScrollTop()
    }
    moveNext = () => {
        const { index } = this.state
        let nextIndex = index + 1;
        let dataLegth = data.length;
        if (dataLegth === nextIndex) alert("마지막 게시물 입니다.")
        this.setState({ boardData: data[nextIndex], index: nextIndex }, () => {
            this.setPreviewTitle(nextIndex)
        })
        this.toScrollTop()
    }
    renderBoard = (path) => {
        const { boardData, index, previousTitle, nextTitle } = this.state;
        switch (path) {
            case RoutesString.Board:
                return <>
                    <IngredientsTitle isMobile={this.props.isMobile} {...this.props}></IngredientsTitle>
                    {
                        boardData &&
                        <Board
                            name={boardData?.name}
                            data={boardData?.data}
                            space={boardData?.space}
                            area={boardData?.area}
                            text={boardData?.text}
                            isMobile={this.props.isMobile}
                            {...this.props} />
                    }
                    <BoardPreview previousTitle={previousTitle} nextTitle={nextTitle} dataLength={data.length} index={index} onPreviousClick={this.movePrevious} onNextClick={this.moveNext} isMobile={this.props.isMobile} {...this.props}></BoardPreview>
                </>
            case RoutesString.Board2:
                return <>
                    <EquipmentTitle isMobile={this.props.isMobile} {...this.props}></EquipmentTitle>
                    {
                        this.state.boardData &&
                        <Board2
                            name={boardData?.name}
                            data={boardData?.data}
                            space={boardData?.space}
                            area={boardData?.area}
                            text={boardData?.text}
                            isMobile={this.props.isMobile}
                            {...this.props} />
                    }
                    <BoardPreview previousTitle={previousTitle} nextTitle={nextTitle} dataLength={data.length} index={index} onPreviousClick={this.movePrevious} onNextClick={this.moveNext} isMobile={this.props.isMobile} {...this.props}></BoardPreview>
                </>
            case RoutesString.Board3:
                return <Board3
                    isMobile={this.props.isMobile}
                    {...this.props}
                />
            default:
                return <div />;
        }
    }
    render() {
        return (
            <div>
                {this.renderBoard(this.props.location?.pathname)}
            </div>
        )
    }
}
