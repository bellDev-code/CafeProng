import React, { Component } from 'react'

import "./CurriculumPage.scss";

import Line from "../Main/LineArea/CurriculumLine";
import { isMobile } from 'react-device-detect'
import banner from '../../_asset/images/curriculum/banner.png';
import NewBanner from "../Main/MainNewBanner/NewBanner";
import img01 from "../../_asset/images/curriculum/reasonimg01.png";
import img02 from "../../_asset/images/curriculum/reasonimg02.png";
import img03 from "../../_asset/images/curriculum/reasonimg03.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CurriculumPage extends Component {
    list = [
        { title: "FIRST", text: "커피머신 능숙하게 다루기 \n<br/>에스프레소 그라인더 \n<br/>에스프레소 기본 이해 및 추출" },
        { title: "FIFTH", text: "추출 수율에 대한 이해 (기본 이해와 조절 방법)" },
        { title: "SECOND", text: "에스프레소 추출 후 품질 평가 방법 \n<br/>(품질평가의 본질적인 이해와 중요 요소 및 순서) \n<br/>추출에 안좋은 영향을 주는 것들에 대해" },
        { title: "SIXTH", text: "브루잉 베이직 (추출의 기본 원리와 추출 수율이해)" },
        { title: "THIRD", text: "밀크 스티밍에 대해 (기본 이해 및  중요요소, 스팀과정) 기본적인 카페 메뉴 만들어보기 (라떼아트 기초)" },
        { title: "SEVENTH", text: "실기시험 준비 /  10분 준비과정 / 10분 시연과정" },
        { title: "FOURTH", text: "에스프레소 센서리트레이닝 \n<br/>(향미를 표현하는 방법과 커핑방법에 대해)" },
        { title: "EIGHTH", text: "실기시험 준비 /  10분 준비과정 / 10분 시연과정" },
    ]
    reasonList = [
        {
            img: img01,
            title: "Full-time\n Lecturer",
            text:
                "과정별 베테랑 전임강사 제도 - 수강생들의 만족감을 최고로 하기 위해 오랜 경력을 가진 강사진이 맞춤형 교육으로 완성도를 높이면서 수강생을 케어합니다.",
        },
        {
            img: img02,
            title: "Personalized\n Training",
            text:
                "모든 교육은 1:1로만 이루어지며 핵심이론과 실습 위주로 눈높이에 따른 맞춤형 교육으로 도와드립니다.",
        },
        {
            img: img03,
            title: "Libericas\n Beans",
            text:
                "취업 및 창업을 준비하시는 분들과 진로를 고민하시는 분들을 위해 실무자들을 초빙한 세미나를 통해 필요한 정보를 공유하고 미래에 대한 계획을 세울 수 있도록 도와드립니다.",
        },
    ];
    renderPc() {
        return (
            <div className="CurriculumLectureContainer">
                {/*  lecture */}
                <div className="CurriculumLectureMain">
                    <Line />
                    <div className="ContentsBox">
                        <div className="RightBox">
                            <div className="Title">
                                Courese<br />
                          Objectives
                        </div>
                            <div className="ContentsList">
                                <div className="RightContents">
                                    <div className="ListTitle">
                                        Theory
                                </div>
                                    <div className="ListText">
                                        커피에 대한 본질적인 이해와 맛을 올바르게 표현하는 방법을 배웁니다.
                               </div>
                                </div>
                                <div className="RightContents">
                                    <div className="ListTitle">
                                        Assessment
                                 </div>
                                    <div className="ListText">
                                        레시피를 정확하게 이해하고 만들 수 있게 도와드립니다.
                                 </div>
                                </div>
                                <div className="RightContents">
                                    <div className="ListTitle">
                                        Systematic
                                     </div>
                                    <div className="ListText">
                                        트렌드 분석과 상권을 고려하여 점주님들이 원하시는 방향에 최대한 맞추어 연구하고 선정합니다.
                                     </div>
                                </div>
                                <div className="RightContents">
                                    <div className="ListTitle">
                                        Nuture
                                     </div>
                                    <div className="ListText">
                                        트렌드 분석과 상권을 고려하여 점주님들이 원하시는 방향에 최대한 맞추어 연구하고 선정합니다.
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="LeftBox">
                            <div className="Title">
                                Courese<br />
                       Outline
                       </div>
                            <div className="ContentsList">
                                <div className="LeftContents a">
                                    <div className="ListTitle">
                                        Schedule
                             </div>
                                    <div className="ListText">
                                        1:1 강의 수시개강
                             </div>
                                </div>
                                <div className="LeftContents">
                                    <div className="ListTitle">
                                        Limit
                                 </div>
                                    <div className="ListText">
                                        6~8명
                                  </div>
                                </div>
                                <div className="LeftContents">
                                    <div className="ListTitle">
                                        Period
                               </div>
                                    <div className="ListText">
                                        1개월 ~ 3개월 과정
                               </div>
                                </div>
                                <div className="LeftContents">
                                    <div className="ListTitle">
                                        Course
                                  </div>
                                    <div className="ListText">
                                        미팅을 통해 결정
                               </div>
                                </div>
                                <div className="LeftContents">
                                    <div className="ListTitle">
                                        Time
                                  </div>
                                    <div className="ListText">
                                        미팅을 통해 결정
                                  </div>
                                </div>
                            </div>
                            <div className="QText">
                                ※정확한 시간은 각 지점에 문의바랍니다.
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderMobile() {
        return (
            <div className="">

            </div>
        );
    }
    render() {
        return (
            <div>
                {/* title  */}
                <div className='CurriculumTitleContainer'>
                    <div className='CurriculumTitleBox'>
                        <div className='CurriculumTitleLeft'>
                            PRONG<br />
                           CURRICULUM
                        </div>
                        <div className='CurriculumTitleRight'>
                            전문가의 체계적인 교육을 통해 보다 더 쉽고 빠르게 이해합니다.
                        </div>
                    </div>
                </div>
                {/* top Banner */}
                <div className="CurriculumTopContainer">
                    <div className="CurriculumTopBox">
                        <img className='ImgBox' src={banner} alt="이미지" />
                        <div className="OurStoryTextBox">
                            <div className="Title">
                                Education
                        </div>
                            <div className="SubText">
                                카페를 운영하는 것은 분명 사업이지만 그 본질은 좋은 재료를 올바르게 전달하는 데에 있습니다.  <br />
                        그 중심에 있는 것은 바리스타입니다. 좋은 바리스타란 원재료, 로스팅과 추출 과정에 대한 이해가 <br />
                        올바르게 되어 있어야 하며 다양한 재료에 맞춰 변화할 수 있어야 진정한 전문가라고 할 수 <br />
                        있습니다. 자격증을 위한 교육만이 아닌 카페 창업뿐 아니라 취업이나 취미를 위해서도 충분한 <br />
                        가치가 있는 교육입니다. 프롱 아카데미에서는 암기식, 주입식 교육이 아닌 커피에 대한 본질적인 <br />
                        이해와 탐구를 통해 바리스타의 꿈을 이루어 드릴 수 있도록 전문적인 교육진과 환경을 제공하고 있습니다.
                          </div>
                        </div>
                    </div>
                </div>

                {/* lecture */}
                {isMobile ? this.renderMobile() : this.renderPc()}

                {/* education */}
                <div className="CurriculumEducationContainer">
                    <div className="CurriculumEducationMain">
                        <Line />
                        <div className="ContentsList">
                            <div className="ContentsBox">
                                <div className="Title">
                                    전임강사의 1:1 <br />
                            체계적인 교육 지원
                            </div>
                                <div className="Text">
                                    모든 교육은 1:1로만 이루어지며 핵심이론과 실습 위주로 눈높이에 따른 맞춤형 교육으로 도와드립니다.
                            </div>
                            </div>
                            <div className="ContentsBox">
                                <div className="Title">
                                    프롱의 <br />
                            수준높은 전임강사
                            </div>
                                <div className="Text">
                                    수강생들의 만족감을 최고로 하기 위해 오랜 경력을 가진 강사진이 맞춤형 교육으로 <br />
                            완성도를 높이면서 수강생을 케어합니다.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* img  */}
                <div className="CurriculumImgContainer">
                    <div className="CurriculumImgMain">
                        <img src={img01} alt="이미지" />
                        <img src={img02} alt="이미지" />
                    </div>
                </div>
                {/* video */}
                <div className="CurriculumnVideo">
                    <div className='CurriculumVideoWrapper'>
                        <div className='CurriculumVideoContainer'>
                            <iframe title="Video" width="1024" height="581" src="https://www.youtube.com/embed/2Jv8yixwMsg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                {/* menu  */}
                {/* <div className="CurriculumMenuContainer">
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
            </div> */}
                {/* reason  */}
                <div className="Reasoncontainer">
                    <div className="ReasonMain">
                        <div className="ReasonTitlebox">
                            <div className="Reasontitle">
                                Why choose <br />
                            Prong Academy
                            </div>
                        </div>
                        <div className="ReasonListbox">
                            {this.reasonList.map((item, index) => {
                                return (
                                    <div className="ReasonBox" key={index}>
                                        <div className="ReasonImg">
                                            <img src={item.img} alt="원두 이미지"></img>
                                        </div>
                                        <div className="ReasonTextBox">
                                            <div className="ReasonTitle_map">
                                                {item.title.split("\n").map((e, index) => (
                                                    <span key={index}>{e}<br /></span>
                                                ))}
                                            </div>
                                            <div className="ReasonText">{item.text}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <NewBanner {...this.props} />
            </div>
        )
    }
}
