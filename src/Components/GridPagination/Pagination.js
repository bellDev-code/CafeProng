import React from 'react'
import './Pagination.scss'

import leftIcon from '../../_asset/images/pagination/left-icon.svg'
import rightIcon from '../../_asset/images/pagination/right-icon.svg'

//페이지가 무수히 많을 때 (20개 페이지 넘는 등)
//페이지네이션에서 최대로 표현할 수 있는 페이지 갯수
var pageGroup = 0;
class Pagination extends React.Component{
    state={
        //페이지 당 출력되는 데이터 갯수제한
        limit: 3,      

        //전체 데이터 갯수
        totalCount: 0,
        
        //포커싱된 페이지 인덱스
        focusStart: 0,

        //현재 페이지 인덱스 (선택한 인덱스)
        curPage: 0, 
        
        //현재 페이지 그룹
        curGroup: 0, 
        
    }
    
    componentDidMount(){
        // console.log("totalcount: ", this.props.totalCount);
        // console.log("limit:", this.props.limit);
        if(this.props.totalCount > 0){
            pageGroup = this.props.pageGroup;
            this.setState({
                limit: this.props.limit,
                totalCount: this.props.totalCount,
                focusStart: 0,
                curPage: 0,
                curGroup: 0,
            })
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.totalCount !== prevProps.totalCount){
            if(this.props.totalCount > 0){
                pageGroup = this.props.pageGroup;
                this.setState({
                    limit: this.props.limit,
                    totalCount: this.props.totalCount,
                    focusStart: 0,
                    curPage: 0,
                    curGroup: 0,
                })
            }
        }
    }

    getMaxPage = () =>{
        const max = Math.ceil(this.state.totalCount / this.state.limit)
        return max === 0 ? max+1 : max;
    }

    getMaxGroup = () =>{
        return Math.ceil(this.state.totalCount / this.state.limit / pageGroup)
    }

    //페이지 클릭 이벤트
    changePage = (page) => {
        // 페이지네이션 사용하는 컴포넌트에 선택한 페이지 번호를 보내줌 > 컴포넌트에서 페이지 번호 받아서 limit갯수만큼 출력.
        this.props.changePage(page);
        this.setState({curPage: page})
    }

    //왼쪽 화살표 이벤트
    handlePrev = () =>{
        //이전으로 돌아갈 페이지가 있을 경우에만 페이지변동
        console.log("현재 그룹 : ", this.state.curGroup)
        if(this.state.curGroup > 0){
            
            const focus = (this.state.curGroup-1) * this.state.limit;
            console.log("이전페이지 포커스 : ", focus);
            this.setState({focusStart: focus, curPage: focus, curGroup: this.state.curGroup-1})

            this.changePage(focus);
        }
    }

    //오른쪽 화살표 이벤트
    handleNext = () =>{
        //실제 페이지 갯수
        const maxPage = this.getMaxPage();
        const maxGroup = this.getMaxGroup();

        console.log("현재 그룹 : ", this.state.curGroup)
        console.log("최대 그룹: ",maxGroup-1);
        // 다음으로 넘어갈 페이지가 있을 경우에만 페이지변동
        if(this.state.curGroup < maxGroup - 1){
            // 옵션1 : 기본
            const focus = (this.state.curGroup + 1) * pageGroup;
            // 옵션2 : 최대페이지 관계없이 무조건 페이지 그룹갯수를 출력하고 싶을 때
            // const focus = maxPage - ((this.state.curGroup + 1) * pageGroup);
            console.log("다음페이지 포커스 : ", focus);
            this.setState({focusStart: focus, curPage: focus, curGroup: this.state.curGroup+1})

            this.changePage(focus);
        }
        
    }

    renderPage(){
        //실제 페이지 갯수
        const maxPage = this.getMaxPage();

        //페이지 그룹 갯수만큼 페이지 출력
        var arr = [];
        var cnt = (maxPage - this.state.focusStart) < pageGroup ? (maxPage - this.state.focusStart) : pageGroup;

        for(let loop = 0; loop < cnt; loop++){
            arr.push(this.state.focusStart+loop);
        }

        // 선택한 페이지 하이라이트
        return arr.map(item => <div className={(item===this.state.curPage?"select":"")} onClick={() =>{this.changePage(item)}}>{item+1}</div>)
    }
    render(){
        return(
            <div className="pagination">
                <img className="left-arrow" src={leftIcon} onClick={this.handlePrev}></img>
                <div className="page">
                    {this.renderPage()}
                </div>
                <img className="right-arrow" src={rightIcon} onClick={this.handleNext}></img>
            </div>
        )
    }
}

export default Pagination;