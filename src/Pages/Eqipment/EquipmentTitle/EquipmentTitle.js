import React, { Component } from 'react';
import './EquipmentTitle.scss';

class EquipmentTitle extends Component {
    render() {
        return (
            <div className ='EquipmentTitleContainer'>
                <div className='EquipmentTitleBox'>
                    <div className ='EquipmentTitleLeft'>
                        EQUIPMENT
                    </div>
                    <div className ='EquipmentTitleRight'>
                        공간이라는 내부의 개념을 넘어 전체적인 구조적 체계를 통해 견고하고 안전한 설계와 시공을 <br/>
                        진행합니다. 프롱은 구성있고 매력적인 컨설팅을 선호합니다. 모두가 만족할 만한 기획을 통해 <br/>
                        최적의 스타일을 부여해 줍니다. 또한 알맞은 비용으로 특색있는 자신만의  카페 프랜차이즈를 <br/>
                        운영할 수 있도록 최대한의 도움을 줍니다. 
                    </div>
                </div>
            </div>
        );
    }
}

export default EquipmentTitle;