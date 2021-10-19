import React, { Component } from 'react'
import './OurStoryPage.scss';
import bannerimg from "../../_asset/images/ourstory/background-text-6.png";
import Line from "../Main/LineArea/PhilosophyLine"
import NewBanner from '../Main/MainNewBanner/NewBanner';

export default class OurStoryPage extends Component {
    list = [
        { title: 'Brand Consulting', text: '프롱을 통해 점주님만의 브랜드가 만들어 질 수 있도록 컨설팅합니다.' },
        { title: 'Stable Consulting', text: '브랜드가 안정적으로 유지될 수 있도록 지속가능한 가치를 만듭니다.' },
        { title: 'Unrivaled Consulting', text: '같은 상권에 중복해서 컨설팅 하지 않으며 보다 나은 퀄리티를 \n<br>위해 연간 정해진 양의 프로젝트만 징행합니다.' },
        { title: 'High quality Consulting', text: '높은 퀄리티를 위해 충분한 시간을 가지고 한번 더 고민하고 \n<br>발전시켜 나아갑니다.' },
    ];
    consultingList = [
        { title: 'Cafe Start-up \nConsulting', text: ['NCNP, 카페 체리블리, 도트 블랭킷, 코미호미, 카페\n 푸른, KOFFEE VIBE,DBDB DEEP, 비아워게스트, 러디칙스, 어거스트원, 카페 디썸, 카페 인덕동 SAISA, 161 커피 스튜디오, 젤리 스튜디오, 카페 고마워, 카페 문도, 엔 세븐, 루프 808, 팜스프링스 타임리즈, 러디칙스, 올빛'] },
        { title: 'Sales Improvement & \nNew Menu Consulting', text: ['카와랩/ 라페트/ 우주라이크/ 도쿄팡야/ 원푸드 스토리/ 다트커피/ 극장앞/ 카페 화실/ 초코케이/ 할리스 신제품 개발 참여/ 카페베네 신제품 개발 참여/ 커피빈 신제품  개발 참여'] },
        { title: 'Menu & Operation \nCoaching', text: ['인더뷰/ 장수이야기/ 닥터커핀/ 빈스브루/ 감성공간/ 제이디저트/ 싱귤러/이너프 커피로스터스/ 모짜르트/ 7PM/ 스윗왈츠 팬더스윗/ 달비채/ 남양주 카페/ 빨강커피앤/ 우도래요/ 카페 미정/ 힐린카페/ 헬로우 에스프레소/ 커피 버스데이'] },
        { title: 'Cafe related Lectures & \nLectures', text: ['르꼬르동 블루, 서울 중부 기술 교육원, 배민 아카데미, 부산 커피앤디저트 쇼, 인사이트플랫폼, 구리시 장애인 센터, 원주 고등학교 소쿱, 커피앤티 기사 원고 작성'] }
    ]
    render() {
        return (
            <div>
                {/* introduce  */}
                <div className='OurStoryIntroduceContainer'>
                    <div className='OurStoryIntroduceBox'>
                        <div className='OurStoryIntroduceTittleText'>
                            OUR ,<br />
                        STORY
                    </div>
                        <div lang='kr' className='OurStoryIntroduceText'>
                            <span>
                                카페가 가장 많이 생기고, 쉽게 없어지는 상태로 개인 카페의 개성과 브랜딩이 그 카페를 찾게 되는 <br />
                            이유가 되고 있습니다. 나만의 브랜드를 만들어 고객들의 방문을 유도하는 것이 지금의 <br />
                            대한민국에서 카페로 살아남을 수 있는 방법입니다. 더 이상 혼자만의 방식에 의존하기보다 <br />
                            프롱과 함께 나만의 브랜드를 만드세요.
                        </span>
                        </div>
                    </div>
                </div>
                {/* top banner */}
                <div className="OurStoryTopBannerNewContainer">
                    <div className="OurStoryTopBannerNewBox">
                        <img className='ImgBox' src={bannerimg} alt="이미지" />
                        <div className="OurStoryTextBox">
                            <div className="Title">
                                <a>
                                    Be confident and give it <br />
                                to the world </a><br />
                                Create your own brand
                            </div>
                            <div className="SubText">
                                프롱은 디저트 마스터, 브랜드 기획자, 메뉴 개발자, 원두전문가, 전략 마케터 등으로 이루어진 <br />
                            카페 컨설팅 전문가 그룹입니다. 각 전문가들이 내는 시너지는 성공적인 창업으로 인도합니다. <br />
                            프롱만의 독창적인 오픈 준비 프로그램은 점주님들이 하고자 하는 모든 것을 현재 카페산업의 <br />
                            트렌드에 맞춰 도와드리는 특별한 프로그램입니다. 이를 통해 점주님은 보다 더 만족스럽고, <br />
                            안정적인 매출을 보장받습니다. 나만의 브랜드를 위한 최고의 선택. 프롱이 도와드립니다.<br />
                            </div>
                        </div>
                    </div>
                </div>
                {/* philosophy  */}
                <div className="PhilosophyContainer">
                    <Line />
                    <div className="PhilsophyMain">
                        {this.list.map((item, index) => {
                            return (
                                <div key={index} className='ListBox'>
                                    <div className='ListTitle'>{item.title}</div>
                                    <div className='ListSubText' dangerouslySetInnerHTML={{ __html: item.text }} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* consulting  */}
                <div className='OurStoryConsultingContainer'>
                    <div className='ConsultingMain'>
                        <Line />
                        <div className="ConsultingTitle">
                            Be confident and <br />give it to the world
                           <span>Meet people who have succeeded in their own branding at Prong</span>
                        </div>
                        <div className="Consulting_Listbox">
                            {this.consultingList.map((item, index) => {
                                return (
                                    <div className="Consulting_List" key={"list_" + index}>
                                        <div className="Consulting_Title" key={"title_" + index}>
                                            {item.title.split("\n").map((e, index2) => (
                                                <span key={index2}>{e}<br /></span>
                                            ))}
                                        </div>
                                        <div className="Consulting_Text">{item.text}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* banner  */}
                <NewBanner {...this.props} />
            </div>
        )
    }
}
