import React, { Component } from 'react';
import './MainProcedure.scss'

class MainPocedure extends Component {
    list = [
        { produrenumber: '01', produretitle: '온라인 견적문의 및 고객센터 상담', produretext: ['희망지역, 컨셉 등 다양한 조건에 맞는 기초적인 상담이 통화로 이뤄집니다.'] },
        { produrenumber: '02', produretitle: '현장 방문을 통한 상세 상담', produretext: ['온라인 및 고객센터 상담내용을 기초 토대로 원하는 지역의 입점 후보지역의 상권 심사 및 상세한 상담이 이뤄집니다.'] },
        { produrenumber: '03', produretitle: '인테리어 및 매장 컨셉 확정', produretext: ['가장 최적의 입점지를 확정 후 위치 특성과 상권연령층을 기반으로 고객이 원하는 인테리어를 참고하고 조율하여 인테리어 방향성을 확정합니다.'] },
        { produrenumber: '04', produretitle: '본사 계약 및 공사 계약', produretext: ['다양한 후보지 중 최적의 입점지를 확정 후 선정된 매장에서 본사와의 계약 체결 후 공사 관련 계약체결을 함께 진행합니다.'] },
        { produrenumber: '05', produretitle: '현장 공사 시작', produretext: ['실측 및 도면의 확정 후 현장 인테리어 공사가 시작됩니다. 천차만별인 업체별 공사비와 자재사용 등 가장 힘들 수 있는 부분을 해결해드립니다.'] },
        { produrenumber: '06', produretitle: '본사 교육 시작', produretext: ['기본적으로 알고만 있는 지식이 아닌 실운영자로서 필요한 서비스 / 메뉴 / 운영 / 기기교육을 프롱아카데미에서 진행합니다.'] },
        { produrenumber: '07', produretitle: '공사 마무리 오픈 준비', produretext: ['가구 및 주방장비세팅, 초도 물품 입고 등 공사가 마무리되면 오픈 리허설을 실시하여 운영 시 오류를 최소화합니다.'] },
        { produrenumber: '08', produretitle: '마케팅 홍보 및 유지보수', produretext: ['지속적인 서비스 방문 관리와 소셜마케팅 등 매장을 개인매장이 아닌 브랜딩으로 지켜나갈 수 있게 매장 기본 유지보수를 실시합니다.'] }
    ]
    render() {
        return (
            <div className='MainPocedureContainer'>
                <div className='MainProdureTitleTextBox'>
                    <div className='MainProdureTitleTopText'>
                        RECEIVE CONSULTING
                    </div>
                    <div className='MainProdureTitleMiddleText'>
                        START-UP PROCEDURE
                    </div>
                    <div className='MainProdureTitleBottomText'>
                        프롬의 컨설팅은 최고의 전문가들이 모여 진행됩니다.
                    </div>
                </div>
                <div className='ProdureTextBox'>
                    {this.list.map((item, index) => {
                        return (
                        <div className='ProdureMapBox' key={index}>
                            <div className='ProdureMapNumberText'>
                                <div className='ProdureMapNumber'>{item.produrenumber}</div>
                                <div lang='kr' className='ProdureMapTtitleText'>{item.produretitle}</div>
                            </div>
                            <div lang='kr'className='ProdureMapText'>{item.produretext}</div>
                        </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default MainPocedure;