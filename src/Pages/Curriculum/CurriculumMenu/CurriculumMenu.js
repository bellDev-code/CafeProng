import React, { Component } from "react";
import "./CurriculumMenu.scss";

class CurriculumMenu extends Component {
  list = [
    {title: "FIRST", text: "커피머신 능숙하게 다루기 \n<br/>에스프레소 그라인더 \n<br/>에스프레소 기본 이해 및 추출"},
    {title: "FIFTH", text: "추출 수율에 대한 이해 (기본 이해와 조절 방법)"},
    {title: "SECOND", text: "에스프레소 추출 후 품질 평가 방법 \n<br/>(품질평가의 본질적인 이해와 중요 요소 및 순서) \n<br/>추출에 안좋은 영향을 주는 것들에 대해"},
    {title: "SIXTH", text: "브루잉 베이직 (추출의 기본 원리와 추출 수율이해)"},
    {title: "THIRD", text: "밀크 스티밍에 대해 (기본 이해 및  중요요소, 스팀과정) 기본적인 카페 메뉴 만들어보기 (라떼아트 기초)"},
    {title: "SEVENTH", text: "실기시험 준비 /  10분 준비과정 / 10분 시연과정"},
    {title: "FOURTH", text: "에스프레소 센서리트레이닝 \n<br/>(향미를 표현하는 방법과 커핑방법에 대해)"},
    {title: "EIGHTH", text: "실기시험 준비 /  10분 준비과정 / 10분 시연과정"},
  ]
  render() {
    return (
      <div className="CurriculumMenuContainer">
        <div className="CurriculumMenuBox">
          <div className="CurriculumMenuTextBox">
            <div className="MenuTitle">
              바리스타 1급 자격증 실기메뉴
            </div>
            <div className="MenuText">
              바리스타 자격증 실기시험을 대비하여 커피 그라인더 선택과
              에스프레소, 카퓌노 추출 기술을 배우는<br/>
              실습과정을 중심으로 커리큘럼이 진행되며 위의 모든 과정을 완벽히
              습득해야합니다.
            </div>
          </div>
          <div className="ContentsList">
            {this.list.map((item, index) => {
              return (
                <div key={index} className="ContentsBox">
                  <div className="Title">{item.title}</div>
                  <div className='Text' dangerouslySetInnerHTML={ {__html: item.text} } />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CurriculumMenu;
