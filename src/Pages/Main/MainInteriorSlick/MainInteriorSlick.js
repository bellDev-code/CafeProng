import React, { Component } from 'react';
import Slider from "react-slick";
import './MaininteriorSlick.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../../../_asset/images/main/image-1.png'
import Img2 from '../../../_asset/images/main/image-2.png'
import Img3 from '../../../_asset/images/main/image-3.png'
import { NavLink } from 'react-router-dom';
import MoreViewBttn from '../../../Components/Buttons/MoreView'


class MainInteriorSlick extends Component {

    list = [
        { img: Img2, number : '01', link : '/consulting', titletext: '온라인 견적 문의 및 고객센터 상담', titletextbottom: ['희망지역, 컨셉 등 다양한 조건에 맞는 기초적인 상담이 통화로 이뤄집니다.'] },
        { img: Img3, number : '02', link : '/consulting',  titletext: '현장 방문을 통한 상세 상담', titletextbottom: ['온라인 및 고객센터 상담내용을 기초 토대로 원하는 지역의 입점 후보지역의 상권 심사 및 상세한 상담이 이뤄집니다.'] },
        { img: Img1, number : '03', link : '/consulting',  titletext: '인테리어 및 매장 컨셉 확정', titletextbottom: ['가장 최적의 입점지를 확정 후 위치 특성과 상권연령층을 기반으로 고객이 원하는 인테리어를 참고하고 조율하여 인테리어 방향성을 확정합니다.'] },
        { img: Img2, number : '04', link : '/consulting',  titletext: '본사 계약 및 공사 계약', titletextbottom: ['다양한 후보지 중 최적의 입점지를 확정 후 선정된 매장에서 본사와의 계약 체결 후 공사 관련 계약체결을 함께 진행합니다.'] },
        { img: Img3, number : '05', link : '/consulting',  titletext: '현장 공사 시작', titletextbottom: ['실측 및 도면의 확정 후 현장 인테리어 공사가 시작됩니다. 천차만별인 업체별 공사비와 자재사용 등 가장 힘들 수 있는 부분을 해결해드립니다.'] },
        { img: Img1, number : '06', link : '/consulting', titletext: '본사 교육 시작', titletextbottom: ['기본적으로 알고만 있는 지식이 아닌 실운영자로서 필요한 서비스 / 메뉴 / 운영 / 기기교육을 프롱아카데미에서 진행합니다.'] },
        { img: Img2, number : '07', link : '/consulting', titletext: '공사 마무리 오픈 준비', titletextbottom: ['가구 및 주방장비세팅, 초도 물품 입고 등 공사가 마무리되면 오픈 리허설을 실시하여 운영 시 오류를 최소화합니다.'] },
        { img: Img3, number : '08', link : '/consulting', titletext: '마케팅 홍보 및 유지보수', titletextbottom: ['지속적인 서비스 방문 관리와 소셜마케팅 등 매장을 개인매장이 아닌 브랜딩으로 지켜나갈 수 있게 매장 기본 유지보수를 실시합니다.'] },
    ]
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            // slidesToShow: 4,
            initialSlide: 0,
            swipeToSlide: true,
            centerMode: true,
            slidesToScroll: 1,
            centerPadding: "0px",
            autoPlay: false,
            variableWidth: true,
            adaptiveHeight: true,
            className: 'slick-current',

            responsive: [
                //   {
                //     breakpoint: 1024,
                //     settings: {
                //       slidesToShow: 3,
                //       slidesToScroll: 3,
                //       infinite: true,
                //       dots: true
                //     }
                //   },
                {
                    breakpoint: 600,
                    settings: {
                        centerMode: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        dots: false,
                        infinite: true,
                        speed: 500,
                        // slidesToShow: 4,
                        initialSlide: 0,
                        swipeToSlide: true,
                        centerMode: true,
                        slidesToScroll: 1,
                        centerPadding: "0px",
                        autoPlay: true,
                        variableWidth: false,
                        adaptiveHeight: true,
                        className: 'slick-current',
                        
                    }
                }
            ]
        }; 
        var settings1 = {
            dots: false,
            infinite: true,
            speed: 0,
            initialSlide: 0,
            swipeToSlide: true,
            centerMode: false,
            slidesToScroll: 1,
            centerPadding: "0px",
            autoPlay: false,
            adaptiveHeight: true,
            className: 'slick-current',
            slidesToShow : 1,
            draggable : false,
            arrows : false,

            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows : false,
                    }
                }
            ]
        };
        return (
            <div className='MainInteriorSlickWrapper'>
                <div>
                    <Slider {...settings}
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}


                    >   {this.list.map((item, index) => {
                        return (
                            <div className='MainInteriorImgbox' key={index}>
                                <img className='MainInteriorImg' src={item.img} alt='이미지'></img>
                            </div>

                        )
                    })}
                    </Slider>
                    <div className='MainInteriorTextboxContainer'>
                        <Slider {...settings1}
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            

                        // variableWidth={true}
                        >   {this.list.map((item, index) => {
                            return (
                                <div className='MainInteriorTextbox' key={index}>
                                    <div className='titletextbox' >
                                        <div className='MainInteriorTextboxTopRow'>
                                            <div className='number'>
                                                {item.number}
                                            </div>
                                            <div className='morebttn'>
                                                <NavLink to={item.link} target=''>
                                                    <MoreViewBttn></MoreViewBttn>
                                                </NavLink>
                                            </div>
                                            
                                        </div>
                                        <div className='titletext'>{item.titletext}</div>
                                        <div className='titletextbottom'>{item.titletextbottom}</div>
                                    </div>
                                </div>
                            )
                        })}





                        </Slider>
                    </div>
                </div>
            </div >
        );
    }
}

export default MainInteriorSlick;