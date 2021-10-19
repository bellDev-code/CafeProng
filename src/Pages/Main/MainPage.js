import React, { Component } from 'react'
import './MainPage.scss';
import BrandingImg from "../../_asset/images/main/valueimg.png";
import Line from "./LineArea/Line";
import effortsimg01 from "../../_asset/images/main/image-1.png";
import effortsimg02 from "../../_asset/images/main/image-2.png";
import effortsimg03 from "../../_asset/images/main/image-3.png";
import NewBanner from './MainNewBanner/NewBanner';
import MainImage from "../../_asset/images/main/brandingvalue.png";

export default class MainPage extends Component {
    list = [
        {
            title: "Planning Design\n Team",
            text:
                "고객님의 모든 여건을 고려하여 프롱이 가진 인프라, 경험을 동원해 위치, 장비, 원두 등 브랜딩의 가장 기초부터 탄탄히 만들어 드립니다.",
        },
        {
            title: "Architectural Interior\n Team",
            text:
                "브랜딩 기본 베이스작업이 끝나면 그에 맞는 올바른 공간을 구상합니다. 나아갈 방향이 맞게 구성하는 전문가 팀입니다.",
        },
        {
            title: "Equipment\n Team",
            text:
                "좋은 재료들을 오롯이 살려낼 수 있는 최적의 장비들을 엄격하게 검수하고 추천해 드립니다.",
        },
        {
            title: "R&D\n Team",
            text:
                "매 시간 빠르게 변화하는 트랜드에 맞춰 끊임없는 연구를 통해 탄생한 맞춤형 시그니처 메뉴들을 완성해 드립니다.",
        },
        {
            title: "Coffee Beans\n Team",
            text:
                "원재료의 중요성은 늘 강조되어 왔습니다. 최적의 원두를 위한 전문가팀 '특별한 것을 더 특별하게' 제공합니다.",
        },
        {
            title: "Design Marketing\n Team ",
            text:
                "브랜드의 가치를 올바르게 전달하는 일은 매우 중요합니다. 완성된 브랜드를 보다 많은 사람이 제대로 알 수 있게 도와드립니다.",
        },
    ];
    effortsList = [
        {
            img: effortsimg01,
            title: "Bean's \nQuality",
            text:
                "신선하고 좋은 생두들을 엄선하여 선정합니다. 프롱에서 추구하는 깨끗함과 섬세함을 중점으로 생각합니다.",
        },
        {
            img: effortsimg03,
            title: "Quality \nEvaluation",
            text:
                "팀원들의 지속적인 회의와 품질 평가로 최적의 로스팅 프로파일을 완성합니다.",
        },
        {
            img: effortsimg02,
            title: "Maintaining \nQuality",
            text:
                "언제나 좋은 품질을 유지한다는것은 매우 어려운 일입니다. 프롱은 지속적인 사후 관리를 통해 더 나은 방향으로 완성시켜갑니다.",
        },
    ];
    render() {
        return (
            <div>
                {/* top banner  */}
                <div className="Main_topcontainer">
                    <div className="Main_Box">
                        <div className="Topbanner_Text">
                            <div className="Reason_en_box">
                                We help Everything <br />
                            Related to the Cafe
                            </div>
                            <div className="Reason_ko_box">
                                프롱의 시스템은 모든 것을 하나로 묶는 것에서 시작합니다. 카페를 시작할 자리가 정해지면, <br />
                            컨셉과 머신, 교육과 메뉴, 신선한 원두까지. 각 파트의 전문가들이 만들어내는 시너지는 카페를 <br />
                            준비하는 여러분에게 편안하고 믿을 수 있는 서비스를 제공합니다.
                            </div>
                        </div>
                        <img className="Main_Imagebox" src={MainImage} alt="메인 이미지" />
                        <div className="Reason_interial">
                            <div className="Reason_interial_en">
                                Prong Interior
                            </div>
                            <div className="Reason_inteial_text">
                                카페 공간은 브랜드의 아이덴티티를 표현하는 가장 확실한 방법입니다. 프롱은 오랜 노하우를 <br />
                            바탕으로 특별함을 느낄 수 있는 장소를 만들어 갑니다. 커피를 마시고 쉬는 공간뿐만 아니라 <br />
                            브랜드를 이해하고 함게 녹아들어 오롯이 즐길 수 있게 되길 바라는 마음으로 함께하겠습니다.
                            </div>
                        </div>
                    </div>
                </div>
                {/* branding  */}
                <div className="MainBranding_container">
                    <div className="MainBranding_Box">
                        <Line />
                        <div className="Branding_Wrap">
                            <div className="Branding_textbox">
                                <div className="Branding_title_en">
                                    Branding <br />
                            Value Beyond
                        </div>
                                <div className="Branding_text_ko">
                                    수많은 카페 속에서 살아남는 방법은 자신만의 개성이 잘 드러나있는<br />
                            브랜딩입니다. 자신만의 브랜드, 독창적인 아이덴티티, 프롱이 함께 <br />
                            도와드립니다. 생각하신 모든 것들이 전문가들의 손에서 새롭게 태어납니다.<br />
                                </div>
                            </div>
                            <div className="Branding_Imagebox">
                                <img src={BrandingImg} alt="브랜딩 메인사진"></img>
                            </div>
                        </div>
                    </div>
                </div>
                {/* about banner  */}
                <div className="MainAboutBanner_container">
                    <div className="MainAboutBanner_Box">
                        <Line />
                        <div className="Why_Wrap">
                            <div className="Why_textbox">
                                <div className="Why_title_en">
                                    Why <br />
                            PRONG
                        </div>
                                <div className="Why_text_ko">
                                    매일매일 수많은 카페가 생겨나고, 또 없어집니다. 이런 상황에서는 <br />
                            브랜드의 정체성을 확립하고, 소비자들과의 올바른 소통을 유도하는 <br />
                            것이 가장 중요합니다. 체계적인 맞춤형 교육과 엄격한 품질관리 후 <br />
                            공급하는 원두, 오랜 노하우를 바탕으로 진행하는 창업 컨설팅, 카페에 <br />
                            관한 모든 것을 도와드립니다.
                        </div>
                            </div>
                            <div className="Why_Imagebox">
                                <img src={BrandingImg} alt="브랜딩 메인사진"></img>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Swiper scene  */}
                <div className="ProngTeam_container">
                    <div className="ProngTeam_Box">
                        <Line />
                        <div className="Team_Titlebox">
                            <div className="Team_title_area">
                                The Super Exports Have <br />
                    All Joined The Team
                    </div>
                        </div>
                        <div className="Team_Listbox">
                            {this.list.map((item, index) => {
                                return (
                                    <div className="Team_List" key={index}>
                                        <div className="Team_Title">
                                            {item.title.split("\n").map((e, index) => (
                                                <span key={index}>{e}<br /></span>
                                            ))}
                                        </div>
                                        <div className="Team_Text">{item.text}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* efforts  */}
                <div className="Efforts_container">
                    <div className="Efforts_Main">
                        <div className="Efforts_Titlebox">
                            <div className="Efforts_title">
                                Prong's <br />
                    Efforts In The Beans
                    </div>
                        </div>
                        <div className="Efforts_Listbox">
                            {this.effortsList.map((item, index) => {
                                return (
                                    <div className="Efforts_Box" key={index}>
                                        <div className="Efforts_img">
                                            <img src={item.img} alt="원두 이미지"></img>
                                        </div>
                                        <div className="Efforts_TextBox">
                                            <div className="Efforts_Title_map">
                                                {item.title.split("\n").map((e, index) => (
                                                    <span key={index}>{e}<br /></span>
                                                ))}
                                            </div>

                                            <div className="Efforts_Text">{item.text}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* new banner  */}
                <NewBanner {...this.props} />
            </div>
        )
    }
}
